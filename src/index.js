import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});
reportWebVitals();
