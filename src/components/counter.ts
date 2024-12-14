import { env } from "mini-van-plate/shared";

const Counter = () => {
    const { button } = env.van.tags;
    const counter = env.van.state(0);
    return (
      button({onclick: () => ++counter.val}, "Counter: ", counter)
    );
}
export default Counter;
