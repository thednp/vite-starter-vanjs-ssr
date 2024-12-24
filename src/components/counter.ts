import van from "@vanjs/van";

const Counter = () => {
  const { button } = van.tags;
  const counter = van.state(0);
  return (
    button({ onclick: () => ++counter.val }, "Counter: ", counter)
  );
};
export default Counter;
