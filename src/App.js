import TodoPage from "./container/TodoPage";
import ContactPage from "./container/ContactPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Link to TodoPage</Link>
        <Link to="/contact">Link to ContactPage</Link>

        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={TodoPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
