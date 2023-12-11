
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
        {
          /* Do not remove the main div */
          // JSX inside the curly braces should be wrapped in a fragment 
          // (<>...</> or <React.Fragment>...</React.Fragment>) to include both the <p> and <button> 
          // elements as siblings inside the main <div>.
          <>
          <p>Button clicked {count} times</p>
          <button onClick={() => setCount(count+1)}>Click Me</button>
          </>
        }
    </div>
  );
};

export default App
