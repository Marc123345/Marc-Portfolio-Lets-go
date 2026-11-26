/**
 * dental.marcfriedmanportfolio.com
 *
 * The subdomain used to serve a full copy of the main site, which Google
 * indexed as duplicate content. This worker serves nothing itself: every
 * request gets a permanent (301) redirect to the canonical www host.
 * The subdomain root goes to the dental offer page; every other path
 * goes to the same path on www, so old links and indexed URLs keep working.
 */
const CANONICAL = "https://www.marcfriedmanportfolio.com";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname === "/" || url.pathname === "" ? "/dental-audit/" : url.pathname;
    return Response.redirect(CANONICAL + path + url.search, 301);
  },
};
