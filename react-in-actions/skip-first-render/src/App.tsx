import { useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }

    console.info('=> useEffect: First render');
  }, []);

  return (
    <div>
      <h2>
        React Render Optimize: Skip first <em>useEffect</em> render !!!
      </h2>
      <button>Click me</button>
    </div>
  );
}
