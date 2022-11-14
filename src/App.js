import './App.css';
import React from "react";
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
  	setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="container">	
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
