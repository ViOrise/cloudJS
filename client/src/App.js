import React from "react"
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar.js"
import {Registration} from "./components/Registration/Registration.js"
import {Authorisation} from "./components/Authorisation/Authorisation"

const App = () =>{
  return (
    <BrowserRouter>
      <div className="root_div">
        <Navbar/>
        <Switch>
          <Route  path="/registration" component={Registration} />
          <Route  path="/authorisation" component={Authorisation}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App