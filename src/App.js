
import './App.scss';
import TableCustomers from './components/TableCustomers';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCustomer from './components/AddCustomer';

function App() {
  return (
    <Router>
      <div>
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
