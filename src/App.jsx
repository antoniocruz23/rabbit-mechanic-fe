import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import EmployeeCreate from "./pages/employee/create/Create";
import EmployeeUpdate from "./pages/employee/update/Update";
import EmployeeDelete from "./pages/employee/delete/Delete";
import CustomerCreate from "./pages/customer/create/Create";
import CustomerUpdate from "./pages/customer/update/Update";
import CustomerDelete from "./pages/customer/delete/Delete";
//import Vehicle from "./pages/vehicle/Vehicle";
//import Repair from "./pages/repair/Repair";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/employee/create" component={EmployeeCreate} />
        <Route path="/employee/update/:id" component={EmployeeUpdate} />
        <Route path="/employee/delete/:id" component={EmployeeDelete} />
        <Route path="/customer/create/" component={CustomerCreate} />
        <Route path="/customer/update/:id" component={CustomerUpdate} />
        <Route path="/customer/delete/:id" component={CustomerDelete} />
      </Switch>
    </Router>
  );
}

export default App;
