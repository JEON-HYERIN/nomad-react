import Button from './Button';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); 

  // 코드가 한 번만 실행될 수 있도록 도와줌
  useEffect(() => {
    console.log('i run only once');
  }, []);
  useEffect(() => {
    console.log('i run when "keyword" changes');
  }, [keyword])
  useEffect(() => {
    console.log('i run when "counter" changes');
  }, [counter])
  useEffect(() => {
    console.log('i run when keyword and counter changes');
  }, [keyword, counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
