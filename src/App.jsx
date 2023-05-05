import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = parseInt(count);

    setText(data.slice(0, num));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="count">Count</label>
        <input
          type="number"
          id="count"
          value={count}
          min={1}
          max={8}
          step={1}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          generate text
        </button>
      </form>
      <article className="lorem-text">
        {text.map((par) => {
          return <p key={nanoid()}>{par}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
