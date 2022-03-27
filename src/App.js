import ReactDOM from 'react-dom';
import React, { useState } from "react";


// function logRandom(){
  //	console.log(Math.random());
// }

function Button(props) {
  const handleButton = ()=>props.handleClick(props.increment)
	return <button onClick={handleButton}>+{props.increment}</button>;
}

function Display(props) {
	return <div>{props.message}</div>;
}

function App(props) {
  const [counter,setCounter]=useState(5);
  const incrementCounter=(incrementValue)=>setCounter(counter+incrementValue);
	return <div>
        <Button handleClick={incrementCounter} increment={1}></Button>
    <Button handleClick={incrementCounter} increment={2}></Button>
    <Button handleClick={incrementCounter} increment={3}></Button>
    <Button handleClick={incrementCounter} increment={5}></Button>
        <Display message={counter}></Display>
    </div>;
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);

export default App;
