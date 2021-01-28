import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
//mui components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//chart libraries
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const muiStyles = theme => ({
  container: {
    padding: '10px 50px',
  },
});

const CurrencyCharts = ({ classes, currencies }) => {
  const ref = React.createRef();
  let myChart;

  const chartData = useMemo(() => {
    if (currencies.length <= 0) {
      return [];
    }

    let data = currencies;

    data = data.map(d => {
      return {
        currency: d.name,
        percent_change_24h: d.quote.USD.percent_change_24h,
      };
    });

    return data;
  }, [currencies]);

  useEffect(() => {
    let chart = am4core.create('chart_div', am4charts.XYChart3D);

    chart.data = chartData;
    chart.cursor = new am4charts.XYCursor();

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'currency';
    xAxis.renderer.labels.template.fontSize = 16;
    xAxis.renderer.labels.template.verticalCenter = 'middle';
    xAxis.renderer.labels.template.horizontalCenter = 'middle';
    xAxis.renderer.labels.template.location = 0.5;
    xAxis.renderer.grid.template.location = 0.5;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Currency 24hr Price Change';
    valueAxis.numberFormatter.numberFormat = "#'%'";

    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = 'percent_change_24h';
    series.dataFields.categoryX = 'currency';
    series.clustered = false;
    series.columns.template.tooltipText =
      '24hr Price Change of {currency}: [bold]{percent_change_24h}[/]';
    series.columns.template.fillOpacity = 0.9;

    myChart = chart;

    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  });
  return (
    <Paper>
      <Grid container className={classes.container}>
        <div id={'chart_div'} ref={ref} style={{ width: '100%', height: '500px' }} />
      </Grid>
    </Paper>
  );
};

CurrencyCharts.propTypes = {
  classes: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
};

export default withStyles(muiStyles)(CurrencyCharts);
