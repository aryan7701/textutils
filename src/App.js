import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether DarkMode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses= ()=>{
  //   document.body.classsList.remove('bg-dark')
  //   document.body.classsList.remove('bg-warning')
    
  // }

  const toggleMode =()=>{
    // removeBodyClasses();
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/"> */}
            <TextForm heading= "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode}/>
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
