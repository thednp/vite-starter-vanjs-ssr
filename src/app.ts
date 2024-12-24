import van from "@vanjs/van";
import Counter from "./components/counter";
import "./app.css";

export const App = () => {
  const { div, h1, img, p, a } = van.tags;
  return div(
    a(
      { href: "https://vite.dev", target: "_blank" },
      img({
        src: "/vite.svg",
        class: "logo",
        alt: "Vite logo",
        width: 96,
        height: 96,
      }),
    ),
    a(
      { href: "https://vanjs.org", target: "_blank" },
      img({
        src: "/vanjs.svg",
        class: "logo vanilla",
        alt: "VanJS logo",
        width: 96,
        height: 96,
      }),
    ),
    h1(
      "Hello VanJS!",
    ),
    div({ class: "card" }, Counter()),
    p(
      { class: "read-the-docs" },
      "Click on the Vite logo or the VanJS logo to learn more",
    ),
  );
};

export default App;
