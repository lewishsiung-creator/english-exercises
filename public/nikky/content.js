/* Deliberately empty, and deliberately still here.

   The notebook's words used to live in this file. They are now encrypted in
   sealed.js and opened in the browser by lock.js, and the plaintext lives
   under private/, which git ignores.

   Deleting this file was not enough. Cloudflare had the old copy at the edge
   with a seven-day s-maxage, and a removed file does not invalidate a cached
   one: for hours after the page was sealed, the whole notebook was still
   downloadable from /nikky/content.js while the page above it asked for a
   passcode. Publishing a different file at the same path is what replaces that
   cached copy, so this stub has to stay until well past the old TTL.

   Nothing loads it. If a later session ever needs a file here again, do not
   reuse this name — give it a new one, so no cache anywhere can answer with
   something older. */
