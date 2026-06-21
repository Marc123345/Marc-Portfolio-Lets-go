/**
 * Standalone Cloudflare Worker for the THRIVE Global proposal deck.
 * Serves the static export (../out) but maps the subdomain root "/" to the
 * deck at "/thrive/", so thrive.marcfriedmanportfolio.com opens straight on
 * the presentation. Fully isolated from the main portfolio worker.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Root → the deck. Keep query string intact.
    if (url.pathname === "/" || url.pathname === "") {
      url.pathname = "/thrive/";
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }

    return env.ASSETS.fetch(request);
  },
};
