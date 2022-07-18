import './Styles/global.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPages from './components/Projects/ProjectPages';
import { useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (  
    <div className="App">
      <Router>        
        <Switch>         
          <Route path="/Projects">
            <Projects isOpen={isOpen} toggle={toggle} />
          </Route>
          <Route path="/:project/Project_Page">
            <ProjectPages isOpen={isOpen} toggle={toggle}/>
          </Route>         
          <Route path="/">
            <Home/>
          </Route>                    
        </Switch>                         
      </Router>                                                
    </div>
  );
}
export default App;
