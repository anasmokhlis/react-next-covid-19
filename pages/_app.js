import React from 'react'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createWrapper } from 'next-redux-wrapper'
import '../scss/main.scss'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp)
