
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/page-one" render={() => <PageOne />} />
          <Route exact path="/page-two" render={() => <PageTwo />} />
          <Route exact path="/page-three" render={() => <PageThree />} />
          <Route exact path="/page-four" render={() => <PageFour />} />
          <Route exact path="/page-five" render={() => <PageFive />} />
          <Route exact path="*" render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
