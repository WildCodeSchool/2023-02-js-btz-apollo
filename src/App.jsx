import Header from './components/Header/Header';
import Scene from './pages/Scene.jsx';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Header />
      <Scene />
      <Navbar />
    </div>
  );
}

export default App;