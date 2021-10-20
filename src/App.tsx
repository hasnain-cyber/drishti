import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>;
}

export default App;
