import { Provider } from 'react-redux'
import Scene from './pages/Scene';
import Home from './pages/Home'
import store from './assets/Redux/store'
import './App.css';


function App() {    
    return (
        <Provider store={store}>
        <div className='app'>
        <Home />
        <Scene />
        </div>
        </Provider>
    );
}

export default App;