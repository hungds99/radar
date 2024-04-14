import { useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {
  const isFirstRender = useRef(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }
    console.info('useEffect render', count);
  }, [count]);

  return (
    <div>
      <h2>
        React Render Optimize: Skip first <em>useEffect</em> render !!!
      </h2>
      <br />
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            isFirstRender.current && (isFirstRender.current = false);
            setCount(count + 1);
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
