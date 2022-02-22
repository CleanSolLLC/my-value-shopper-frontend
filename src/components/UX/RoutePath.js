import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignUp from "../Auth/Signup";
import Login  from "../Auth/Login";
import Logout  from "../Auth/Logout";
import Items  from "../Items/Items";
import PageNotFound from "../Errors/PageNotFound";

const Routes = (props) => {
    console.log(props)
    
    function NotFound(props) {
        return <>props.error 
        <PageNotFound />
        </>
    }
    return (
    <>
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/items" component={Items} />;
      <Route path="/log-in" component={Login} />;
      <Route path="/sign-up" component={SignUp} />;
      <Route path="/log-out" component={Logout} />;
      <Route path="*" component={NotFound} />;
    </Switch>
    </>
    )
}
export default Routes;