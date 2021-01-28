import React, { useState } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
//mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//components
import CurrencyDetails from 'components/CurrencyDetails';
import CurrencyCharts from 'components/CurrencyCharts';
import CustomButton from 'components/Button';
//icons
import { AiOutlineAreaChart } from 'react-icons/ai';

const muiStyles = theme => ({
  text: {
    marginTop: 30,
  },
  container: {
    padding: '50px 0',
  },
  link: {
    cursor: 'pointer',
  },
  icon: {
    marginLeft: 10,
    fontSize: 20,
  },
});

const HomePage = ({ classes, currencies }) => {
  const [chartsDisplay, setChartsDisplay] = useState(true);
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
      direction="column"
    >
      <Typography variant="h5">Recent Cyptocurrency Details</Typography>
      <Typography>(Update every 60 seconds)</Typography>
      <Grid
        item
        container
        xs={12}
        className={classes.container}
        justify="space-between"
        spacing="2"
      >
        <Grid item xs={12}>
          <CurrencyDetails currencies={currencies} />
        </Grid>
        <Grid item>
          <CustomButton
            onClick={() => setChartsDisplay(!chartsDisplay)}
            disabled={currencies.length === 0}
          >
            {chartsDisplay ? (
              'Hide Charts'
            ) : (
              <>
                Show Charts
                <AiOutlineAreaChart className={classes.icon} />
              </>
            )}
          </CustomButton>
        </Grid>
        {chartsDisplay && (
          <Grid item xs={12}>
            <CurrencyCharts currencies={currencies} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { currencies } = state;
  return { currencies: currencies.currencyDetails };
};

export default compose(withStyles(muiStyles), connect(mapStateToProps, null))(HomePage);
