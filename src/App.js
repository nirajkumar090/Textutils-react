
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';

function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);

}

const toggleMode =()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.background='#042743';
    showAlert("Dark Mode is Enable","success");
  }
  else{
    setMode('light');
    document.body.style.background="white";
    showAlert("Light Mode is Enable","success");
  }
}

  return (
    <> 
    <Navbar title="NRK Textutils" mode={mode} aboutText="AboutUs" toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textarea showAlert={showAlert} mode={mode} heading="Try TextUtils - word counter, character counter,"/>
      <Aboutus/>
   </>

  );
}

export default App;
