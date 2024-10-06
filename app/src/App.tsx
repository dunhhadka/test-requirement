import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import HomePage from './components/HomePage';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/register">Register</Link>  | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm onSubmit={(data) => console.log(data)} />} />
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
