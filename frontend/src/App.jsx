import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Notfound from './components/Notfound';
import ManageUser from './components/ManageUser';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import Navbar from './components/Navbar';


function App() {


  return (
    <div>
      <Toaster position='top center' />
      <AnimatePresence >
        <BrowserRouter>
          <AppProvider>
            <Navbar />
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Login />} path='/login' />
              <Route element={<SignUp />} path='/signup' />
              <Route element={<UserAuth> <ManageUser /> </UserAuth> } path='/manageuser' />
              <Route element={<Notfound />} path='/*' />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
