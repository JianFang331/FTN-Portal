import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Auth/LoginPage';
import FabIntegrationSnackbar from './SnackBar';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactRouterExample from "./ReactRouterExample";

ReactDOM.render(
  /** APP 页面入口 暂时关闭 */
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // <LoginPage/>,
  // <FabIntegrationSnackbar/>,
  // <LoginPage>,
  <ReactRouterExample/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
