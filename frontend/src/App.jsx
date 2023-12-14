import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Notfound from './components/Notfound';
import ManageUser from './components/ManageUser';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import Navbar from './components/Navbar';
import AddTournament from './components/AddTournament';
import ListTournament from './components/ListTournament';
import TournamentDetails from './components/TournamentDetails';
import SignupForm from './components/SignupForm';
import RegisterTournament from './components/RegisterTournament';


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
              <Route element={<SignUp />} path='/signup' />
              <Route element={<AddTournament />} path='/addtournament' />
              <Route element={<UserAuth><ListTournament /></UserAuth>} path='/listtournament' />
              <Route element={<SignupForm />} path='/signupfrom' />
              <Route element={<RegisterTournament />} path='/register' />
              <Route element={<TournamentDetails />} path='/tourdetails/:id' />
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
