import React from 'react';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
//styled components
import { Root, Page } from 'components/StyledComponents';
//custom components
import AppHeader from 'components/Header';

const Layout = ({ children, currencies }) => {
  return (
    <Root>
      <AppHeader />
      <Page isLoading={currencies.length === 0}>{children}</Page>
    </Root>
  );
};

const mapStateToProps = state => {
  const { currencies } = state;
  return { currencies: currencies.currencyDetails };
};

export default connect(mapStateToProps, null)(Layout);
