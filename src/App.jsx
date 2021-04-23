import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

function App() {
  const [token, setToken] = useState();

//  if(!token) {
//    return <Login setToken={setToken} />
//  }

  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
