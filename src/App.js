import Button from './Button';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log('i run all the time');

  // 코드가 한 번만 실행될 수 있도록 도와줌
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
