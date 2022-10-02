

import { Switch, Route } from 'react-router-dom';
import DefaultLayout from './defaultLayout/defaultLayout';
import AuthLayout from './authLayout/authLayout';
import PrivateRoute from '../components/PrivateRoute';
function Layout(props) {

    return (
        <Switch>
            <Route exact path="/login">
                <AuthLayout />
            </Route>
            <Route path="/">
                <PrivateRoute>
                    <DefaultLayout />
                </PrivateRoute>
            </Route>
        </Switch>
    );
}

export default Layout;