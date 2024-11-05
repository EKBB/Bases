import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import { RecoverPassword } from './RecoverPassword';
import Questionnaries from './Questionnaries.js';
import { Header } from './Components/Header.js';
import { Dashboard } from './Dashboard.js';
import { ListUsers } from './ListUsers.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/listUsers",
    element: <ListUsers></ListUsers>,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword/>,
  },
 
  {
    path: "/questionnaire",
    element: <Questionnaries/>,
  },

]);

const user={
  logined: true,
  rol:1,
  name: ""  
}
/* const user = JSON.stringify(localStorage.user); */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <>
      <Header></Header>
    </>

   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
