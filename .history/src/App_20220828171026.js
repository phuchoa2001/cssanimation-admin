import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query';



import './resetcss.scss';
import "./Global.css";
import 'antd/dist/antd.min.css'


import Layout from './Layout';
import store from './redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </Provider >
  );
}

export default App;
