import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Loginpage/Login";
// import Register from "./Pages/Registration/Registration";
import WholeTeam from './component/WholeTeam/WholeTeam';
import Register from './Pages/Registration/Resistration';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      
        <Route path='/Team' element={<WholeTeam/>}/>
      </Routes>

    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
