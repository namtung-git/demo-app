import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddController from './components/AddComponent/AddController'
import EditController from './components/EditComponent/EditController'
import ComponentSwitcher from './components/ComponentSwitcher'
// import ViewModel from './components/ViewModel'

function App() {
  return (
    <Router>
      <ComponentSwitcher />
      <Switch>
        <Route path="/" component={AddController} exact />
        <Route path="/add-villager" component={AddController} exact />
        <Route path="/edit-villager" component={EditController} exact />
      </Switch>
  </Router>
  );
}

export default App;
