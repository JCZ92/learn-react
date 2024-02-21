import { sculptureList } from '../../data/data.js';
import { useState, useEffect } from 'react';


export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }
  const [count, setCount] = useState(0);

  document.title = `You clicked ${count} times`;
  

  let sculpture = sculptureList[index];
  return (
    <>
        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
      <button onClick={handleClick}>
        Next
      </button>
      <input ></input>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}