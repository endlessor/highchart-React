<template>
  <div id="container" class="chart-container-main"></div>
</template>

<script>
import Highcharts from 'highcharts/highcharts.src';
import * as Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
export default {
  name: 'Line_Charts',
  data () {
    return {
      msg: 'Welcome to Your Chart.js'
    }
  },
  mounted () {
    this.chartRender()
  },
  methods: {
    chartRender: function () {
      Highcharts.chart('container', {
        chart: {
          type: 'area'
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          allowDecimals: true,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            }
          }
        },
        yAxis: {
          labels: {
            formatter: function () {
              return this.value / 10;
            }
          }
        },
        tooltip: {
          pointFormat: 'Price: <b>{point.y:,.0f} BTC</b><br/>Sell orders: {point.x}'
        },
        plotOptions: {
          area: {
            pointStart: 0.008,
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            },
          }
        },
        series: [{
          name: 'Buy orders',
          data: [24605, 26662, 26600, 23232,
            23334, 23324, 23314, 23311, 23288, 23286, 23282, 23280, 23276, 23274,
            27387, 23246, 23238, 23274, 23334, 23234, 23134, 23130, 22356,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 23334,
            null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null,
            null, null, null, null],
          color: '#25655d',

        }, {
          name: 'Sell orders',
          data: [null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            10000, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
            33952, 35804, 37431, 37431, 37431, 37431, 37431, 37431, 37000,
            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000],
          color: '#8a495f'
        }]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chart-container-main {
        min-width: 310px;
        height: 400px; margin: 0 auto;
    }
</style>
