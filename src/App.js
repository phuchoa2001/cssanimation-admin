import { Provider } from "react-redux";

import './resetcss.scss';
import "./Global.css";

import 'antd/dist/antd.min.css'
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import store from './redux/store';
import routes from "./routes";
function App() {
  const showRouter = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.mani}
          />
        )
      })
    }
    return result;
  }
  return (
    <Provider store={store}>
      <Layout />
      <Switch>
        {showRouter(routes)}
      </Switch>
    </Provider >
  );
}

export default App;
