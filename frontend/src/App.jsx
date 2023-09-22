import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home />} path='/' />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
