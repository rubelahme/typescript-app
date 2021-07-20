import './App.css';
import { BrowserRouter as Router, Route, Switch, RouteProps } from "react-router-dom";
import Home from './Component/Home/Home/Home';
interface ChildComponentProps extends RouteProps {
}
const App: React.FunctionComponent<ChildComponentProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
