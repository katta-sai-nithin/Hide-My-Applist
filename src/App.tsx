import { useEffect, useState } from 'react'
import './App.css'
// import Page from './NewPage'

function App() {
  let a:number=10;
  console.log('ab :>> ', a);
 const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      {/* <Page></Page> */}
      <h1>Count: {count}</h1>
      <button onClick={() => { a++; console.log('a :>> ', a);  setCount(count + 1); }}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
    </div>
  );
}

export default App
