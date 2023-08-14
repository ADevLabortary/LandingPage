import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from "./Login";
import Signup from './Signup';
import ErrorPage from './ErrorPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path='/' element={<App />}  />
      <Route exact path='/login-page' element={<Login/>}  />
      <Route exact path='/sign-up' element={<Signup/>}  />
      <Route exact path='/error-page' element={<ErrorPage/>}  />
      </Routes>
    </Router>
  </React.StrictMode>,
)
