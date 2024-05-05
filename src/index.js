import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './landing-page/Landing';
import Home from './Home/Home';
import PassswordGenerator from './password/password';
import CurrencyConvertor from './currency-convertor/CurrencyConvertor';
import BgMain from './bg-changer/bg-changer';

const router = createBrowserRouter([
  { path: '/', element: <Landing/>,
    children: [
      { path: '' , element: <Home/>},
      { path: 'password-generator' , element: <PassswordGenerator/>},
      { path: 'currency-converter' , element: <CurrencyConvertor/>},
      { path: 'bg-changer' , element: <BgMain/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
