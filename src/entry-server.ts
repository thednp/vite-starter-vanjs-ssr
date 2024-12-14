// entry-server.ts
import van from "mini-van-plate/van-plate";
import { registerEnv } from "mini-van-plate/shared";
import App from "./app.ts";

registerEnv({ van });

const Head = () => {
  const { title, meta } = van.tags;
  return [
    title("Vite + VanJS"),
    meta({name: "description", content: "Starter template for VanJS + Vite"}),
  ];
}

export function render(_url: string) {
  const head = Head().map(el => el.render()).join('');
  const html = App().render();
  return { html, head };
}
