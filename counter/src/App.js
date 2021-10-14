import logo from './logo.svg';
import './App.css';
import Counter1 from './counter';
import Counter2 from './counter2';
import CustomHook from './CustomHook';
import MouseTracker from './MouseTracker';
import { useState } from 'react';
import TabSwitch from './TabSwitch';

function App() {

  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div >
      <div>Counter - 1</div>
      <Counter1 />
      <div>Counter - 2</div>
      <Counter2 />
      <div>
        <button onClick={handleClick}>Toggle</button>
        {toggle && <MouseTracker />}
        <TabSwitch />
     </div>
    </div>
  );
}

export default App;
