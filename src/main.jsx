import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastContainer/>
        <App/>
    </React.StrictMode>,
)
