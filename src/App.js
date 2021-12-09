
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
      <Router  basename="/">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/page-one" render={() => <PageOne />} />
          <Route path="/page-two" render={() => <PageTwo />} />
          <Route path="/page-three" render={() => <PageThree />} />
          <Route path="/page-four" render={() => <PageFour />} />
          <Route path="/page-five" render={() => <PageFive />} />
          <Route path="*" render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
