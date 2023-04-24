import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Scene from './pages/Scene';
import Navbar from './components/navbar/Navbar';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Scene />} />
            <Route path='/:id' element={<Cards/>} />
          </Routes>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;