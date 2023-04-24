import Header from './components/Header/Header';
import Scene from './pages/Scene';
import Navbar from './components/Navbar/Navbar';
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