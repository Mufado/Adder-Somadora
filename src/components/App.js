import React from "react";
import "./App.css"

const App = () => {
  const [firstAddend, setFirstAddend] = React.useState('');
  const [secondAddend, setSecondAddend] = React.useState('');
  const [sumTotal, setSumTotal] = React.useState('Resultado');

  const handleGetFirstAddend = (e) => {
    setFirstAddend(Number(e.target.value));
  }

  const handleGetSecondAddend = (e) => {
    setSecondAddend(Number(e.target.value));
  }

  const handleSumAddends = (e) => {
    setSumTotal(firstAddend + secondAddend);
    e.preventDefault();
  }

  const title = process.env.REACT_APP_TITLE;

  return (
    <div className="container">
      <h1> {title} </h1>
      <div className="addends">
        <input type="number" onChange={handleGetFirstAddend} />
        <input type="number" onChange={handleGetSecondAddend} />
      </div>

      <form onSubmit={handleSumAddends}>
        <button type="submit"> + </button>
      </form>

      <h3> {sumTotal} </h3>
    </div>
  );
};

export default App;