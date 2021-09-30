import "./styles.css";
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register';
import Logout from './components/Logout';
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute path='/about'>
                <About/>
              </PrivateRoute>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/logout' component={Logout} />
          </Switch>
    </Router>
    </div>
  );
}
