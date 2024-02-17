import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // setNumber(number + 1);
        // setNumber(number + 1);
        // setNumber(number + 1);
        setNumber(num => num + 1); // use functional update instead
        setNumber(num => num + 1);
        setNumber(num => num + 1);
      }}>+3</button>
    </>
  )
}
