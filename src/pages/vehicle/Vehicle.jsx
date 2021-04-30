import "../styles/pages.css";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";

const ROUTES = [
  {
    path: "#",
    text: "Create Vehicle Profile",
  },
  {
    path: "#",
    text: "Show All Vehicles",
  },
  {
    path: "#",
    text: "Show Specific Vehicle",
  },
  {
    path: "#",
    text: "Update Vehicle",
  },
  {
    path: "#",
    text: "Delete Vehicle",
  },
];

const Vehicle = () => {
  return (
    <>
      <Header />
      <Menu route={ROUTES} />;
    </>
  );
};

export default Vehicle;
