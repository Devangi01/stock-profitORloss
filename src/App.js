import { useState } from "react";
import "./styles.css";
export default function App() {
  var [message, setMessage] = useState("");
  var [color, setColor] = useState("black");
  function onSubmitHandler(event) {
    event.preventDefault();
    var init = Number(event.target.init.value);
    var current = Number(event.target.current.value);
    var quatity = Number(event.target.quatity.value);
    if (isNaN(init) || isNaN(current)) {
      setColor("black");
      setMessage(`invalid inputs`);
    } else if (quatity === 0) {
      setColor("black");
      setMessage(`do not have any stock`);
    } else if (init > current) {
      var loss = ((init - current) * quatity).toFixed(2);
      var lossPercentage = ((loss * 100) / init).toFixed(2);
      setColor("red");
      setMessage(
        `oops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}%`
      );
    } else if (current > init) {
      var profit = ((current - init) * quatity).toFixed(2);

      var profitPercentage = ((profit * 100) / init).toFixed(2);

      setColor("green");

      setMessage(
        `Yeah!! Your profit is ${profit} and profit Percentage is ${profitPercentage}%`
      );
    } else {
      setColor("blue");
      setMessage(`No Gain, No Pain`);
    }
  }
  return (
    <div className="App">
      <form className="input-container" onSubmit={onSubmitHandler}>
        <h3>Where is my Stocks?</h3>
        <div className="input">
          <input
            autoComplete="off"
            id="init"
            type="text"
            placeholder="Enter inital price here"
            required
          />
          <input
            autoComplete="off"
            id="quatity"
            type="number"
            placeholder="Enter Number of Stocks here"
            required
          />
          <input
            autoComplete="off"
            id="current"
            type="text"
            placeholder="Enter Current Price Here"
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit">➜</button>
        </div>
      </form>

      <div className="output-container">
        <div style={{ color: color }} className="output">
          {message}
        </div>
      </div>
    </div>
  );
}
