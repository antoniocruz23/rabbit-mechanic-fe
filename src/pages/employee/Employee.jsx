import "../styles/pages.css";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";

const ROUTES = [
  {
    path: "/employee/create",
    text: "Create Employee Profile",
  },
  {
    path: "#",
    text: "Show All Employees",
  },
  {
    path: "#",
    text: "Show Specific Employee",
  },
  {
    path: "/employee/update",
    text: "Update Employee Profile",
  },
  {
    path: "/employee/delete",
    text: "Delete Employee Profile",
  },
];

const Employee = () => {
  return (
    <>
      <Header />
      <Menu route={ROUTES} />;
    </>
  );
};

export default Employee;
