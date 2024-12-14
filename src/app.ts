import { env } from "mini-van-plate/shared";
import Counter from "./components/counter";
import './app.css'

export const App = () => {
  const { div, h1, img, p, a } = env.van.tags;
  return div(
    a({ href: "https://vite.dev", target: "_blank" },
      img({ src: "/vite.svg", class: "logo", alt: "Vite logo" }),
    ),
    a({ href: "https://vanjs.org", target: "_blank" },
      img({ src: '/vanjs.svg', class: "logo vanilla", alt: "VanJS logo" }),
    ),
    h1(
      "Hello VanJS!",
    ),
    div({ class: "card" },
      Counter(),
    ),
    p({ class: "read-the-docs" },
      "Click on the Vite logo to learn more",
    ),
  )
};

export default App;
