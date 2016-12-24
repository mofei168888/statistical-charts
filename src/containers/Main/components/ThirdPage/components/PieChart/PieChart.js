import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


class PieChart extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    // PieData: PropTypes.array.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    // const { pieData } = this.props;
    const myChart = echarts.init(document.getElementById('pieChart'));
    const option = {
      color: ['#2196f3', '#1f939e', '#00bcd4', '#009688', '#37bdab'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {d}%',
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['C', 'C++', 'Java', 'Python2', 'Python3'],
      },
      series: [
        {
          name: '提交语言',
          type: 'pie',
          radius: ['55%', '85%'],
          center: ['55%', '52%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 1335, name: 'C' },
            { value: 1310, name: 'C++' },
            { value: 234, name: 'Java' },
            { value: 135, name: 'Python2' },
            { value: 48, name: 'Python3' },
          ],
        },
      ],
    };
    myChart.setOption(option);
  }

  render() {
    const { className } = this.props;

    /* eslint-disable */
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.piechart)}
      >
        <div id="pieChart" className={style.pieChart}></div>
      </div>
    );
  }
}

export default PieChart;