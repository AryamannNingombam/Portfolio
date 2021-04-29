
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
import Home from './pages/Home';
import { Navbar } from './components/navbar/Navbar';
import {useState} from 'react';

function App() {
  const [showPreLoader,setShowPreLoader] = useState(true);
  window.scroll({
    top:0,
    behaviour:'smooth'});
  return (
    <Router>
      {!showPreLoader ? <Navbar/> : null}
      
      <Switch>
        <Route path='/'>
          <Home setPre={setShowPreLoader}/>
          </Route>
        
       
      </Switch>
      </Router>
          
  );
}

export default App;
