"""Topic tags shared by both word pages' builds.

list.json    the 26 topics: [id, 中文名, what belongs there], in display order.
topics.json  every headword on 國中單字 and 高中單字, keyed like the
             collocations (the exact headword for China/china, May/may,
             Miss/miss; otherwise lower-cased, spaces collapsed), each a list
             of one or two topic ids, the best fit first.

Tagged 2026-11-08 by eight writers working from each word's taught meanings;
see README, 主題. A word missing here simply has no topic.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).parent


def topic_list():
    return [[k, zh] for k, zh, _ in json.loads((HERE / 'list.json').read_text(encoding='utf-8'))]


def topic_tags():
    f = HERE / 'topics.json'
    return json.loads(f.read_text(encoding='utf-8')) if f.exists() else {}


def tags_for(tags, w):
    w = w.strip()
    return tags.get(w) or tags.get(re.sub(r'\s+', ' ', w.lower()), [])
