import logo from './logo.svg';
import './App.css';
import Greet_component from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import EventBind from './EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import styles from './components/AppStyles.module.css';

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
    <div>
      <EventBind />
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <ParentComponent />
      <UserGreeting />
      <NameList />
    </div>
    <div>
      <StyleSheet primary={true}/>
      <Inline />
      <div>
        <h1 className={styles.success}>Success</h1>
      </div>
    </div>
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