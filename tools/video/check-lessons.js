const fs = require('fs');
const LESSONS = eval(fs.readFileSync(process.argv[2], 'utf8') + '\n;LESSONS');
const DUR = { '1LMcGRfYBro':897, 'rtufWBLOXgw':7879, 'c7jGXPEY54k':976, 'ZXHrPfWJcCI':275, 'IRAaCq3nAMs':147 };
const MAINLAND = ['人工智能','視頻','網絡','軟件','硬件','信息','質量','博客','筆記本電腦'];
let bad = 0; const ids = new Set();
for (const l of LESSONS) {
  const p = (m) => { console.log('  X ' + l.id + ': ' + m); bad++; };
  if (ids.has(l.id)) p('duplicate id'); ids.add(l.id);
  if (!/^[\w-]{11}$/.test(l.videoId || '')) p('bad videoId');
  if (!l.sourceEn) p('missing sourceEn');
  if (DUR[l.videoId] && l.end > DUR[l.videoId]) p('end ' + l.end + ' past the video');
  const T = l.lines.map((x) => x.t);
  for (let i = 1; i < T.length; i++) if (T[i] <= T[i-1]) p('t=' + T[i] + ' not after ' + T[i-1]);
  if (T[0] < l.start) p('first line before start');
  if (T[T.length-1] >= l.end) p('last line ' + T[T.length-1] + ' >= end ' + l.end);
  for (const w of (l.words || [])) {
    if (w.t < l.start || w.t >= l.end) p('card "' + w.en + '" outside clip');
    let host = null;
    for (let i = 0; i < l.lines.length; i++) {
      const a = l.lines[i].t, b = i+1 < l.lines.length ? l.lines[i+1].t : l.end;
      if (w.t >= a && w.t < b) { host = l.lines[i]; break; }
    }
    if (!host) p('card "' + w.en + '" falls in no line');
  }
  for (const q of (l.questions || [])) {
    if (q.t < l.start || q.t >= l.end) p('question t=' + q.t + ' outside clip');
    if (!l.lines.some((x) => x.t === q.t)) p('question t=' + q.t + ' is not a line t');
  }
  for (const x of l.lines) {
    if (!x.zh) p('line ' + x.t + ' has no Chinese');
    if (x.en.split(/\s+/).length > 18) p('line ' + x.t + ' is ' + x.en.split(/\s+/).length + ' words');
  }
  const all = JSON.stringify(l);
  for (const m of MAINLAND) if (all.includes(m)) p('mainland term ' + m);
}
const order = LESSONS.map((l) => l.videoId), seen = new Set();
for (let i = 0; i < order.length; i++) if (order[i] !== order[i-1]) {
  if (seen.has(order[i])) { console.log('  X nav: ' + order[i] + ' split into non-adjacent runs'); bad++; }
  seen.add(order[i]);
}
const g = [];
for (const l of LESSONS) { const last = g[g.length-1]; if (last && last.v === l.videoId) last.n++; else g.push({ v: l.videoId, n: 1, zh: l.videoZh }); }
console.log('groups:');
for (const x of g) console.log('  ' + x.v + '  ' + String(x.n).padStart(2) + ' clips  ' + (x.zh || '(no zh)'));
console.log('\n' + LESSONS.length + ' clips, ' + LESSONS.reduce((a,l) => a + l.lines.length, 0) + ' lines, ' + seen.size + ' videos');
console.log(bad ? bad + ' PROBLEM(S)' : 'all structural checks passed');
