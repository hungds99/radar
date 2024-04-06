import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div className='content'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
