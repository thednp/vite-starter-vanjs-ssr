import { type Element as VanElement } from "mini-van-plate/van-plate";

type Source = number | string | VanElement | VanElement[] | Element | undefined;

export const Fragment = (children: (Source | (() => Source))): VanElement => {
  return { render: () => renderToHTML(children)};
};

export function renderToHTML(
  source: Source | (() => Source),
): string {
  if (typeof source === "number") {
    return String(source);
  }
  if (typeof source === "string") {
    return source.trim();
  }
  if (typeof source === "function") {
    return renderToHTML(source());
  }
  if (typeof source === "object" && "render" in source) {
    return source.render();
  }
  if (source instanceof Element) {
    return source.outerHTML;
  }
  if (Array.isArray(source)) {
    const elements = [];
    for (const el of source) {
      elements.push(renderToHTML(el));
    }
    return elements.join("\n    ");
  }

  // no source provided
  // @ts-ignore - this is server side code
  console.warn("Vite Plugin VanJS: source not recognized:" + source);
  return "";
}
