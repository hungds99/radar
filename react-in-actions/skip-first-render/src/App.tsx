import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.info('=> useEffect: First render');
  }, [btnRef.current]);

  return (
    <div>
      <h2>
        React Render Optimize: Skip first <em>useEffect</em> render !!!
      </h2>
      <button
        ref={btnRef}
        onClick={() => {
          btnRef.current?.style.setProperty('background-color', '#f00');
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
