import Dashboard from "./Pages/Dashboard"
import Detalhe from "./Pages/Detalhes"
import Posts from "./Pages/Posts"
import Users from "./Pages/Users"
import User from "./Pages/User"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'


export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/posts" component={Posts} />
            <Route path="/usuarios" component={Users} />
            <Route path="/:id/:postid" component={Detalhe} />
            <Route path="/:id" component={User} />
            <Route path='*'>
              <Redirect to="/" />
            </Route>
        </Switch>
    </ BrowserRouter>
  );
}
