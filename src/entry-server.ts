// entry-server.ts
// import env from "vanjs";
// import env from "vanjs";
// import van from "vanjs-core";
import { renderPreloadLinks } from "./server-util/renderPreloadLinks.ts";
import { renderToHTML } from "./server-util/renderToHTML.ts";

import App from "./app.ts";

export async function render(_url: string, manifest: Record<string, string[]>) {
  // console.log('entry-server.time --------------------------->', new Date().toISOString(), env);
  // console.log('entry-server.time --------------------------->', new Date().toISOString(), { van, vanX });
  // const { van } = env;
  const head = '';
  // const html = renderToHTML(Fragment(App()));
  const html = renderToHTML(App());
  const preloadLinks = renderPreloadLinks(Object.keys(manifest), manifest);
  return { html, head, preloadLinks };
}
