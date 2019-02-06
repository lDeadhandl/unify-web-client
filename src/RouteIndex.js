import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './Components/App';
import Login from './Components/Login';
import Users from './Components/Users';


const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/app/">App</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/login/" exact component={Login} />
      <Route path="/app/" component={App} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;