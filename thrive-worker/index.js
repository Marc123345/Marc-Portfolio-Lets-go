/**
 * Standalone Cloudflare Worker for the THRIVE Global proposal deck.
 * Serves the static export (../out) but maps the subdomain root "/" to the
 * deck at "/thrive/", so thrive.marcfriedmanportfolio.com opens straight on
 * the presentation. Fully isolated from the main portfolio worker.
 *
 * Any other page path is 301-redirected to the main www site so the
 * subdomain never serves duplicate copies of portfolio pages. Static
 * assets (/_next/, images, fonts, files with an extension) still load
 * from here because the deck needs them.
 */
const CANONICAL = "https://www.marcfriedmanportfolio.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;

    // Root → the deck. Keep query string intact.
    if (p === "/" || p === "") {
      url.pathname = "/thrive/";
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    const isDeck = p === "/thrive" || p.startsWith("/thrive/");
    const isAsset = p.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(p);
    if (isDeck || isAsset) return env.ASSETS.fetch(request);

    return Response.redirect(CANONICAL + p + url.search, 301);
  },
};
