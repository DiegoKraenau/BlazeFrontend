
import './App.scss';
import TableCustomers from './components/TableCustomers';

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCustomer from './components/AddCustomer';

function App() {
  return (
    <Router>
      <div>
        <p className="firma">Designed by @DiegoKraenau</p>
        <Switch>
          <Route path="/" exact>
            <TableCustomers />
          </Route>
          <Route path="/addCustomer" exact>
            <AddCustomer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
