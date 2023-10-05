import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import GameList from './components/GameList';
import GameForm from './components/GameForm';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
          <Route path='/results' element={<GameList/>}></Route>
          <Route path='/preferences' element={<GameForm/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </Router>  
  );
}

export default App;