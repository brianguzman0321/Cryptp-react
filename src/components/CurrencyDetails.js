import React from 'react';
import PropTypes from 'prop-types';
//mui components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//utils
import { currencyIcons } from 'utils';
//constants
import { CURRENCY_TABLE_HEADER } from 'constants/index';

const muiStyles = theme => ({
  tableHeadCell: {
    fontSize: 20,
    fontWeight: 600,
  },
  tableCell: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    spacing: 10,
  },
  tableRow: {
    padding: '10px 0',
  },
  container: {
    padding: '10px 50px',
  },
});

const CurrencyDetails = ({ currencies, classes }) => {
  return (
    <Paper>
      <Grid container className={classes.container}>
        <Grid item container xs={12} className={classes.tableRow}>
          {CURRENCY_TABLE_HEADER.map((c, idx) => (
            <Grid item xs={4} key={`currency-header-${idx}`} className={classes.tableHeadCell}>
              {c.title}
            </Grid>
          ))}
        </Grid>
        {currencies.length > 0 &&
          currencies.map((c, idx) => (
            <Grid
              item
              xs={12}
              container
              key={`currency-detail-${idx}`}
              className={classes.tableRow}
            >
              <Grid item xs={4} className={classes.tableCell}>
                {currencyIcons.find(i => i.symbol === c.symbol) &&
                  currencyIcons.find(i => i.symbol === c.symbol).icon}
                {c.name}
              </Grid>
              <Grid item xs={4} className={classes.tableCell}>
                {c.quote.USD.price}
              </Grid>
              <Grid item xs={4} className={classes.tableCell}>
                {c.quote.USD.percent_change_24h}
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

CurrencyDetails.propTypes = {
  currencies: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(muiStyles)(CurrencyDetails);
