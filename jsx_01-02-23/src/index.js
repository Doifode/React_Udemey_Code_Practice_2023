// import React from 'react'
// import ReactDOM from 'react-dom/client'
//  const el=document.getElementById('root');
//  const root= ReactDOM.createRoot(el)
//  function App(){
//   return <h1>Hellow ! </h1>
//  }

//  root.render(<App />)
import React from 'react'
import ReactDOM from 'react-dom/client'
 
const el = document.getElementById('root');
const root= ReactDOM.createRoot(el)
function App(){
  
  let message= 'hi There !'
  if( Math.random() < 0.5){
 message = 'bye there!'
  }
  return <h1> Hi there !  { message}</h1>
}
root.render(<App/>)
