import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageHome from './Components/Pages/PageHome';
import PageNosotros from './Components/Pages/PageNosotros';
import PageBlog from './Components/Pages/PageNosotros';
import PageContacto from './Components/Pages/PageContacto';






function App() {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/pageHome" />
        <Switch>
          <Route exact path = "/PageHome" component = {PageHome}/>
          <Route exact path = "/PageBlog" component = {PageBlog}/>
          <Route exact path = "/PageContacto" component = {PageContacto}/>
          <Route exact path = "/PageNosotros" component = {PageNosotros}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
