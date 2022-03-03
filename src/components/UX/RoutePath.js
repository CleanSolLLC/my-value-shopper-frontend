import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignUp from "../Auth/Signup";
import Login  from "../Auth/Login";
import Logout  from "../Auth/Logout";
import Items  from "../Items/ProcessItems";
import PageNotFound from "../Errors/PageNotFound";
import ItemsContainer from "../Items/ItemsContainer";

const Routes = () => {  
    function NotFound() {
        return <PageNotFound />
    }
    return (
    <>
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/items" component={ItemsContainer} />;
      <Route path="/log-in" component={Login} />;
      <Route path="/sign-up" component={SignUp} />;
      <Route path="/log-out" component={Logout} />;
      <Route path="*" component={NotFound} />;
    </Switch>
    </>
    )
}
export default Routes;