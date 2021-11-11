import React, { useEffect } from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { createTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { useRouter } from 'next/router';
import { StylesProvider } from '@material-ui/core/styles';

import Layout from '../hoc/Layout/Layout';
import authReducer from '../store/reducers/auth';
import Head from 'next/head';
// import firebaseAnalytic from '../container/Function/FirebaseAnalytic';
// import TagManager from 'react-gtm-module';
// import Spinner from '../components/UI/Spinner/Spinner';
// import { CacheProvider, ClassNames } from '@emotion/react';
// import createCache from '@emotion/cache';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  // burgerBuilder: burgerBuilderReducer,
  // order: orderReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const theme = createTheme({
//   typography: {
//     fontFamily: ['Quicksand', 'sans-serif'].join(','),
//   },
// });
// const cache = createCache({
//   key: 'css',
//   prepend: true,
// });

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [pageLoading, setPageLoading] = useState(false);

  // useEffect(() => {
  //   const handleStart = () => {
  //     console.log('start');
  //     setPageLoading(true);
  //   };
  //   const handleComplete = () => {
  //     setPageLoading(false);
  //   };
  //   TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, []);

  useEffect(() => {
    // router.push('https://poom-sci.vercel.app/');
    // TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  });

  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <React.StrictMode>
          <Head>
            <title>Poom Suchao-in</title>
          </Head>
          {/* <Spinner /> */}
          <Layout>
            {/* {pageLoading ? (
              <div style={{ height: '1000px' }}>
                <Spinner />
              </div>
            ) : ( */}
            <Component {...pageProps} />
            {/* )} */}
          </Layout>
        </React.StrictMode>
        {/* </CacheProvider> */}
      </StylesProvider>
    </Provider>
  );
}

export default MyApp;
