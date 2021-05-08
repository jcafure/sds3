import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>

            </Switch>
        
        </BrowserRouter>
    );
  }
  
  export default Routes;