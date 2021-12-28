import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages";
import UsersPage from './pages/users';

function App() {
  
    return (
      <Router>
        <Routes>
       {/*All our Routes goes here!*/}
       <Route path="/" element ={ <MainPage/>} />
       <Route path="/users" element ={ <UsersPage/>} />
       
      </Routes>
      </Router>
    );
  
}

export default App;
