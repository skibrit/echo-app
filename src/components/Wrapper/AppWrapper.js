import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PageLoader from "../Layouts/PageLoader/PageLoader";
import "../../assets/scss/global.scss";

// components
const Home = React.lazy(() => import("../Home/Home"));

function App() {
  return (
    <React.Suspense fallback={PageLoader()}>
      <Router>
        <Switch>
          {/* partner routes */}
          <Route
            exact
            path="/"
            name="Home Page"
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
