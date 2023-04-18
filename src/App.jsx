import Header from './components/Header.jsx'
import Scene from './pages/Scene.jsx'
import Footer from './components/Footer.jsx'
import './App.css';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Header />
      <Scene />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

