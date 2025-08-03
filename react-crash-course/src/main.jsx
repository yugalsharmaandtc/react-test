// import { StrictMode,createElement } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import reactImg  from './assets/react.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//const heading=createElement('h1', null, 'Hello World');
// const heading=
// <>
// <img src={reactImg} alt="" />
// <h1>Hello React!</h1>

// </>// The above lines is same as const heading=createElement('h1', null, 'Hello World'); line but the diffrence is this line is the jsx syntax the react syntax
// createRoot(document.getElementById('root')).render(heading);
