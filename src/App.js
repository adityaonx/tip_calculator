import { useState } from "react";

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}
function Bill({ handleBill, handleTip, handleTip2 }) {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleReset() {
    setTip(0);
    setTip2(0);
    setBill(0);
  }
  return (
    <form>
      <span>How much was the bill? </span>
      <input onChange={(e) => setBill(Number(e.target.value))}></input>
      <br></br>
      <span>How much you like the service? </span>
      <Select tip={tip} handleTip={(e) => setTip(Number(e.target.value))} />
      <br></br>
      <span>How much your friend like the service? </span>
      <Select tip={tip2} handleTip={(e) => setTip2(Number(e.target.value))} />
      {bill > 0 ? (
        <div>
          <h2>{`You pay $${
            Number(bill) + Number((tip + tip2) / 2)
          }(${bill} + $${(tip + tip2) / 2} tip)`}</h2>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
function Select({ tip, handleTip }) {
  return (
    <select value={tip} onChange={handleTip}>
      <option value={0}>Dissatisfied (0%)</option>
      <option value={5}>It was okay (5%)</option>
      <option value={10}>It was good(10%)</option>
      <option value={20}>Absolutely amazing! (20%)</option>
    </select>
  );
}
