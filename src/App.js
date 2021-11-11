import './Styles/global.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPages from './components/Projects/ProjectPages';

function App() {
  return (  
    <div className="App">
      <Router>        
        <Switch>         
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/:project/Project_Page">
            <ProjectPages />
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
