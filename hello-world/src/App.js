import logo from './logo.svg';
import './App.css';
import Greet_component from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';

// class App extends Component {
//   render() {
//     return ( // You were missing this 'return' statement
//       <div className='App'>
//         <Greet_component />
//         <Welcome />
//       </div>
//     );
//   }
// }

// export default App;


import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}