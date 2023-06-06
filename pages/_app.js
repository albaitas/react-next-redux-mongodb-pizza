import '/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/Layout';
import store from '../redux/store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SSRProvider>
  );
}
