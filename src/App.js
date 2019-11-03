import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageHome from './Components/Pages/PageHome';
import PageNosotros from './Components/Pages/PageNosotros';
import PageBlog from './Components/Pages/PageBlog';
import PageContacto from './Components/Pages/PageContacto';






function App() {
  return (
        <BrowserRouter>
                <Redirect from="/" to="/PageHome" />
                <Switch>
                  <Route exact path = "/PageHome" render = {()=><PageHome/>}/>
                  <Route exact path = "/PageNosotros" render = {() => <PageNosotros/>} />
                  <Route exact path = "/PageBlog" render = {() => <PageBlog/>} />
                  <Route exact path = "/PageContacto" render = {() => <PageContacto/>} />
                </Switch>
          </BrowserRouter>
  );
}

export default App;
