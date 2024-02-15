// App.js file




import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode  has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode  has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (

    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />


        {/* Default Props  */}
        {/* <Navbar/> */}
        <div className='container my-3'>
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>

            <Route path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Charecter Counter, Remove Extra Spaces " mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
