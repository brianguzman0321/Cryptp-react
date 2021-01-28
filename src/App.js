import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
//routes
import Routes from './routes';
//page layout
import Layout from './layout';
//import redux action
import { getCurrencyDetails } from 'redux/actions/getCurrencyAction';

const history = createBrowserHistory();

const App = ({ getCurrencyDetails }) => {
  useEffect(() => {
    // getCurrencyDetails();
    try {
      setInterval(async () => {
        getCurrencyDetails();
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default connect(null, { getCurrencyDetails })(App);
