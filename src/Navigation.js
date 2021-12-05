import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import  SignUp  from "./components/signup.component";
import  { Logout }  from "./components/logout.component";
import Home from "./components/home.component";
import ItemsByCategory from "./components/itemsbycategory.component";
import Items from "./components/items.component";

//import App from './App';

//used React sign in and sign up template from https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/

function Navigation() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/items-by-category"}>Items By Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/items"}>Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/log-out"}>Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/"    component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/items-by-category" component={ItemsByCategory} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/log-out" component={Logout} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Navigation;
