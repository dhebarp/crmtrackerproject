import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { LeadForm } from './components/LeadForm';
import { ViewLead } from './components/ViewLead';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/form"} component={LeadForm} />
        <Route exact path={'/form/:id'} component={LeadForm} />
        <Route exact path={'/view/:id'} component={ViewLead} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
