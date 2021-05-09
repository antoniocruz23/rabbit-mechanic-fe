import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import EmployeeCreate from "./pages/employee/create/Create";
import EmployeeUpdate from "./pages/employee/update/Update";
import EmployeeDelete from "./pages/employee/delete/Delete";
import EmployeeGetAll from "./pages/employee/getAll/GetAll";
import EmployeeGetById from "./pages/employee/getById/GetById";

import CustomerCreate from "./pages/customer/create/Create";
import CustomerUpdate from "./pages/customer/update/Update";
import CustomerDelete from "./pages/customer/delete/Delete";
import CustomerGetAll from "./pages/customer/getAll/GetAll";
import CustomerGetById from "./pages/customer/getById/GetById";

import VehicleCreate from "./pages/vehicle/create/Create";
import VehicleUpdate from "./pages/vehicle/update/Update";
import VehicleDelete from "./pages/vehicle/delete/Delete";
import VehicleGetAll from "./pages/vehicle/getAll/GetAll";
import VehicleGetById from "./pages/vehicle/getById/GetById";

import RepairCreate from "./pages/repair/create/Create";
import RepairUpdate from "./pages/repair/update/Update";
import RepairDelete from "./pages/repair/delete/Delete";
import RepairGetAll from "./pages/repair/getAll/GetAll";
import RepairGetById from "./pages/repair/getById/GetById";
import RepairGetAllActive from "./pages/repair/getActive/GetActive";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/home" component={Home} />

        <Route path="/employee/create" component={EmployeeCreate} />
        <Route path="/employee/update" component={EmployeeUpdate} />
        <Route path="/employee/delete" component={EmployeeDelete} />
        <Route path="/employee/get-all" component={EmployeeGetAll} />
        <Route path="/employee/get" component={EmployeeGetById} />

        <Route path="/customer/create" component={CustomerCreate} />
        <Route path="/customer/update" component={CustomerUpdate} />
        <Route path="/customer/delete" component={CustomerDelete} />
        <Route path="/customer/get-all" component={CustomerGetAll} />
        <Route path="/customer/get" component={CustomerGetById} />

        <Route path="/vehicle/create" component={VehicleCreate} />
        <Route path="/vehicle/get-all" component={VehicleGetAll} />
        <Route path="/vehicle/delete" component={VehicleDelete} />
        <Route path="/vehicle/update" component={VehicleUpdate} />
        <Route path="/vehicle/get" component={VehicleGetById} />

        <Route path="/repair/create" component={RepairCreate} />
        <Route path="/repair/get-all" component={RepairGetAll} />
        <Route path="/repair/get" component={RepairGetById} />
        <Route path="/repair/get-active" component={RepairGetAllActive} />
        <Route path="/repair/update" component={RepairUpdate} />
        <Route path="/repair/delete" component={RepairDelete} />
      </Switch>
    </Router>
  );
}

export default App;
