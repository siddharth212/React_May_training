import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import {App,Greetings} from './App.jsx'
import Greetings from './Greetings.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Greetings name="Siddharth"/>
  </React.StrictMode>,
)


//import the function that is exported from other file
