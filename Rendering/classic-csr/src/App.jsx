import { lazy } from 'react';

// import Counter from './Counter';
const Counter = lazy(() => import('./Counter'));

function App() {
  return (
    <>
      <h1>React + Classic CSR</h1>
      <Counter />
      {/* <UserList /> */}
    </>
  );
}

export default App;
