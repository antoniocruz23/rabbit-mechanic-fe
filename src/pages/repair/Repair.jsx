import "../styles/pages.css";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";

const ROUTES = [
  {
    path: "#",
    text: "Create a Repair",
  },
  {
    path: "#",
    text: "Show All Repairs",
  },
  {
    path: "#",
    text: "Show Specific Repair",
  },
  {
    path: "#",
    text: "Update Repair Details",
  },
  {
    path: "#",
    text: "Delete Repair",
  },
];

const Repair = () => {
  return (
    <>
      <Header />
      <Menu route={ROUTES} />;
    </>
  );
};

export default Repair;
