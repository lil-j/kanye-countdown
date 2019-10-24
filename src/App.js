import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Countdown'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter className="counter"/>
        <img style={{'z-index':4}} src="https://pbs.twimg.com/media/EHSh4xMXUAAMbrn?format=jpg&name=medium"></img>
      </header>
      <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=eb56e24ef84504498ecdb102b3f0da6b26b9d918'></script>
      <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/590983/t/3"></script>
    </div>
  );
}

export default App;
