import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import ManageUser from './Components/ManageUser';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import Navbar from './Components/Navbar';
import AddTournament from './Components/AddTournament';
import ListTournament from './Components/ListTournament';
import TournamentDetails from './Components/TournamentDetails';
import SignupForm from './Components/SignupForm';
import RegisterTournament from './Components/RegisterTournament';
import NotFound from './Components/NotFound';


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
              <Route element={<NotFound />} path='/*' />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
