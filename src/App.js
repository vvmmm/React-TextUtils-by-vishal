// import logo from '../public/CTAG_LOGO - Copy.png';
import './App.css';
import React,{useState} from 'react'
// import Explain from './components/Explain';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import{

//   Route,
//   Switch,

// } from 'react-router-dom';

function App() {
  const changeMode=()=>{
    if(mod==='light'){
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark Mode Enable Successfully","success");
        }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enable Successfully","success");
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      type:type,
      msg:message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }

  const [alert,setAlert]=useState(null)
  const[mod,setMode]=useState("light");
  
  return (
    <>
  
    <Navbar title="Vishal" about="About Us" mode={mod} change={changeMode}/>
    <Alert alert={alert}/>
    <div className="container my-5">
     {/* <Switch>
      <Route path='/about' component={Explain}>
          
        </Route>
        <Route exact path='/' >
        <TextArea heading="Enter the Text to analyse"mode={mod} salert={showAlert}/>
        </Route>
        
      </Switch> */}
       <TextArea heading="Enter the Text to analyse"mode={mod} salert={showAlert}/>

    </div>


   
    </>
  );
}

export default App;
