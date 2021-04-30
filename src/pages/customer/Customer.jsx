import "../styles/pages.css";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";

import "../../styles.css";

const ROUTES = [
  {
    path: "#",
    text: "Create Customer Profile",
  },
  {
    path: "#",
    text: "Show All Customers",
  },
  {
    path: "#",
    text: "Show Specific Customer",
  },
  {
    path: "#",
    text: "Update Customer Profile",
  },
  {
    path: "#",
    text: "Delete Customer Profile",
  },
];

const Customer = () => {
  return (
    <>
      <Header />
      <Menu route={ROUTES} />;
    </>
  );
};

export default Customer;
