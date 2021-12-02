import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Complain from "./components/complain/Complain";
import AdminMenu from "./components/menu/AdminMenu";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/complain" component={Complain} />
          <Route path='/admin' component={AdminMenu} >
            {/* <Route  path='/admin' component={AdminPage} /> */}
            {/* <Route path='/admin/usermgt' component={UserMgt} /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
