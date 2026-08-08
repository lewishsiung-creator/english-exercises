#!/usr/bin/env python3
"""Serve public/ for local testing.

    python3 serve.py            # then open http://localhost:8000

This exists instead of a bare `python3 -m http.server` for one reason: on
macOS the system mime table maps .m4a to "audio/mp4a-latm", and Safari
refuses to play that. Chrome sniffs the file and plays it anyway, so the
phonics handbook's recorded words appear broken in Safari and fine in
Chrome — a confusing false negative that has nothing to do with the files.

GitHub Pages and Cloudflare Pages both serve .m4a as audio/mp4 already, so
this only matters locally.
"""

import functools
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map = dict(Handler.extensions_map)
Handler.extensions_map['.m4a'] = 'audio/mp4'
Handler.extensions_map['.mp3'] = 'audio/mpeg'

# No caching, so an edit shows up on reload instead of serving a stale file.
class NoCache(Handler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == '__main__':
    os.chdir(ROOT)
    print('serving %s at http://localhost:%d' % (ROOT, PORT))
    print('  handbook:  http://localhost:%d/phonics-handbook/' % PORT)
    print('  Ctrl-C to stop')
    http.server.test(HandlerClass=NoCache, port=PORT, bind='127.0.0.1')
