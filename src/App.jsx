import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/account-settings" component={AccountSettings} />
      </Switch>
    </Router>
  );
}

export default App;
