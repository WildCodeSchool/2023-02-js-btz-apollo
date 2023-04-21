import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Scene from './pages/Scene.jsx';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Cards from './components/Cards';


function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Scene />} />
            <Route path='/cards' element={<Cards/>} />
          </Routes>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;