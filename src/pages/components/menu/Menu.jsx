import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ route, ...remainingProps }) => {
  return (
    <div class="table-header" {...remainingProps}>
      <nav class="table-container">
        {route.map((route, index) => {
          const { path, text } = route;

          return (
            <Link key={index} to={path}>
              {text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Menu;
