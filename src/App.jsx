import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import EmployeeCreate from "./pages/employee/pages/create/Create";
import EmployeeUpdate from "./pages/employee/pages/update/Update";
import EmployeeDelete from "./pages/employee/pages/delete/Delete";
//import Customer from "./pages/customer/Customer";
//import Vehicle from "./pages/vehicle/Vehicle";
//import Repair from "./pages/repair/Repair";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/employee/create" component={EmployeeCreate} />
        <Route path="/employee/update" component={EmployeeUpdate} />
        <Route path="/employee/delete" component={EmployeeDelete} />
      </Switch>
    </Router>
  );
}

export default App;
