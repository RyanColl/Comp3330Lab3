import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound'
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Feedback from './Feedback';
import Dogs from "./Dogs";
function App() {
  return (
    <div className="App">
      <h1>React Router Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/dogs" >
          <Dogs />
        </Route>
        <Route>
          <NotFound path='/notfound' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
