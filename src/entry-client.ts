// entry-client.ts
import van from "@vanjs/van";
import App from "./app.ts";

const root = document.getElementById("app") as HTMLElement;

van.hydrate(root, (dom) => {
  dom.innerHTML = "";
  dom.append(App());
  return dom;
});
