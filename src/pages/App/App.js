import { Routes, Route } from 'react-router-dom'

import Home from "../Home/Home";
import About from "../About/About"
import NavBar from '../../components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route 
        path='/' element={
          <Home />
        }
        />
        <Route path='/about' element={
          <About />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
