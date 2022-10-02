

import { Switch, Route } from 'react-router-dom';
import DefaultLayout from './defaultLayout/defaultLayout';
import AuthLayout from './authLayout/authLayout';
function Layout(props) {

    return (
        <Switch>
            <Route path="/login">
                <AuthLayout />
            </Route>
            <Route path="/">
                <DefaultLayout />
            </Route>
        </Switch>
    );
}

export default Layout;