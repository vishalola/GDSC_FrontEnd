import React from 'react';
import App from './App'
import ReactDOM from 'react-dom/client';
import './index.css';
import First from "./components/first_page";
import Second from "./components/second";
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route index element={<App/>}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>

          <Route/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
