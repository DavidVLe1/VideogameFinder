import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { useState } from 'react';
import Logout from './components/LogOut';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Function to update authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    // console.log('isAuthenticated updated:', status);
  };
//key={isAuthenticated.toString()}
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/signin' element={<SignIn handleAuthentication={handleAuthentication} isAuthenticated={isAuthenticated}/>}></Route>
        <Route path='/signup' element={<SignUp  handleAuthentication={handleAuthentication}/>}></Route>
        <Route path='/results' element={<GameList />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/preferences' element={<GameForm />}></Route>
        <Route path='/logout' element={<Logout handleAuthentication={handleAuthentication}/>}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;