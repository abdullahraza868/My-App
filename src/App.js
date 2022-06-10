import './App.css';
import Navbar from './components/Header'; 
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useEffect, useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  //Making alert box
  const [mode, setMode] = useState('light'); 
  const [redmode , setRedmode] = useState('red');
  const [alert , setAlert] = useState(null);
  const showAlert  = (message , type) =>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout( () => {
      setAlert(null);
    }, 1500);
  }
  useEffect(()=>{
    document.body.style.backgroundColor = 'red';
  },[])
  //


  
  //Switch1
    //Switch1
  const toogleMode1 = () => {
   
    if (redmode==='red' ){
     
      setRedmode('grey');
      document.body.style.backgroundColor = 'grey';
      showAlert("Grey mode has been enabled!" , "success");
     
    }
    else{
      setRedmode('red')
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode has been enabled!" , "success");
    }
  }
  //

  //Switch2
         //Switch2
  const toogleMode2 = () => {
    
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  //

 

  return (
    <>
    
    <Router>
      <Navbar title= "TextUtils" secondbuttoninnav = "About" mode={mode} toogleMode1={toogleMode1} toogleMode2={toogleMode2}  />
      <Alert alert={alert}/> 

        <div className="container my-4">
        <Routes>
          <Route path="/about" element = {<About mode={mode} AboutHeading="About Us:" />} />
          <Route path="/" element = { <TextForm heading = 'Enter your text to analyze:' mode={mode} showAlert={showAlert} />} />
        </Routes>
        </div>
    </Router>
  
    </>
  );
}

export default App;