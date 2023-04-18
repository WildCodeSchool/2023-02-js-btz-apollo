import Header from './components/Header.jsx';
import Scene from './pages/Scene.jsx';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Cards from './components/Cards'

function App() {
  return (
    <div className='app'>
      <Header />
      <Scene />
      <Cards />
      <Navbar />
    </div>
  );
}

export default App;