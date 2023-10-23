// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["西藏", "贵州", "宁夏", "全国", "黑龙\n江", "辽宁", "吉林"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '生育率',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [14.24, 11.03, 10.6, 6.77, 3.34, 4.08, 4.33],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 年份对应数据
  var yearData = [{
    //   year: "数量", // 国家
    //   data: [
    //     // 两个数组是因为有两条线
    //     [2.47,2.47,2.48,2.5,2.52,2.53,2.55,2.57,2.58,2.57,2.54,2.5],
    //     [9.76,9.8,9.84,9.86,9.88,9.88,9.88,9.86,9.84,9.81,9.79,9.77],
    //     [1.15,1.19,1.23,1.27,1.32,1.38,1.45,1.53,1.61,1.69,1.78,1.86]
    //   ]
    // }
    // // ,
    // {
      year: "占比", // 年份
      data: [
        // 两个数组是因为有两条线
        [13.27,14.57,13.03,13.83,11.99,13.57,12.64,10.86,10.41,8.52,7.52,6.77],
        [7.14,7.13,7.13,7.12,7.07,7.04,7.06,7.08,7.09,7.07,7.18,7.37],
        [6.13,7.43,5.90,6.71,4.93,6.53,5.58,3.78,3.32,1.45,0.34,-0.6]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line4 .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#ed3f35', '#00f2f1','#00f200'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: [ '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21','22'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: false, // 圆滑的线
        name: '人口出生率',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: false, // 圆滑的线
        name: '人口死亡率',
        data: yearData[0].data[1]
      },
      {
        type: 'line',
        smooth: false, // 圆滑的线
        name: '人口增长率',
        data: yearData[0].data[2]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // // 5.点击切换2020 和 2021 的数据
  // $('.line h3 a').on('click', function () {
  //   // console.log($(this).index());
  //   // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
  //   // console.log(yearData[$(this).index()]);
  //   var obj = yearData[$(this).index()];
  //   option.series[0].data = obj.data[0];
  //   option.series[1].data = obj.data[1];
  //   option.series[2].data = obj.data[2];
  //   // 选中年份高亮
  //   $('.line h3 a').removeClass('a-active');
  //   $(this).addClass('a-active');

  //   // 需要重新渲染
  //   myChart.setOption(option);
  // })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "总和生育率", // 国家
      data: [
        // 两个数组是因为有两条线
        [1.62,1.64,1.67,1.7,1.71,1.69,1.67,1.8,1.71,1.77,1.67,1.77,1.81,1.55,1.5,1.28,1.16],
        [2.06,2.11,2.12,2.07,2.0,1.93,1.89,1.88,1.86,1.86,1.84,1.82,1.77,1.73,1.71,1.64,1.66],
        [1.08,1.13,1.26,1.19,1.15,1.23,1.24,1.3,1.19,1.21,1.24,1.17,1.05,0.98,0.92,0.84,0.81],
        [1.26,1.32,1.34,1.37,1.37,1.39,1.39,1.41,1.43,1.42,1.45,1.44,1.43,1.42,1.36,1.33,1.3]
      ]
    },
    {
      year: "人口年度增长率", // 年份
      data: [
        // 两个数组是因为有两条线
        [0.59,0.56,0.52,0.51,0.5,0.48,0.55,0.49,0.49,0.63,0.58,0.57,0.61,0.47,0.35,0.24,0.09],
        [0.92,0.96,0.95,0.95,0.88,0.83,0.73,0.73,0.69,0.73,0.74,0.72,0.63,0.53,0.46,0.35,0.12],
        [0.21,0.53,0.51,0.76,0.51,0.5,0.77,0.53,0.46,0.63,0.53,0.4,0.43,0.33,0.2,0.14,-0.18],
        [0.01,0.06,0.11,0.05,-0.01,0.02,-0.19,-0.16,-0.14,-0.13,-0.11,-0.12,-0.16,-0.2,-0.21,-0.29,-0.46]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#ed3f35', '#00f2f1','#00f200','#ffff00'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '中国',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '美国',
        data: yearData[0].data[1]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '韩国',
        data: yearData[0].data[2]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '日本',
        data: yearData[0].data[3]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    option.series[2].data = obj.data[2];
    option.series[3].data = obj.data[3];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22",]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '出生人口',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [1785, 1973, 1776, 1897, 1654, 1883, 1765, 1523, 1465, 1200, 1062, 956]
      },
      {
        name: "净增长人口",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "triangle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [825, 1006, 804, 920, 680, 906, 779, 530, 467, 204, 48, -85]
      },
      {
        name: '死亡人口',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#ffff00",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(255, 255, 0, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(255, 255, 0, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'square',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#ffff00",
          borderColor: "rgba(255, 255, 0, .1)",
          borderWidth: 12
        },
        data: [957, 963, 969, 974, 975, 977, 986, 993, 998, 997, 1014, 1062, 956,1041]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 25615,
          name: "0—15岁"
        },
        {
          value: 7268,
          name: "16—20岁"
        },
        {
          value: 38993,
          name: "21-40岁"
        },
        {
          value: 41295,
          name: "41-60岁"
        },
        {
          value: 28004,
          name: "60岁以上"
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 线型图3
(function () {
  // 年份对应数据
  var yearData = [{
    //   year: "数量", // 国家
    //   data: [
    //     // 两个数组是因为有两条线
    //     [2.47,2.47,2.48,2.5,2.52,2.53,2.55,2.57,2.58,2.57,2.54,2.5],
    //     [9.76,9.8,9.84,9.86,9.88,9.88,9.88,9.86,9.84,9.81,9.79,9.77],
    //     [1.15,1.19,1.23,1.27,1.32,1.38,1.45,1.53,1.61,1.69,1.78,1.86]
    //   ]
    // }
    // // ,
    // {
      year: "占比", // 年份
      data: [
        // 两个数组是因为有两条线
        [13.0771,12.9815,12.9487,12.9437,12.9448,12.9230,12.9037,12.9396,12.9174,12.8224,12.6549,12.4075],
        [72.93,72.85,72.64,72.35,72.01,71.62,71.2,70.65,70.13,69.72,69.38,69.18],
        [8.62,8.82,9.05,9.32,9.63,10.02,10.46,10.95,11.48,12.02,12.6,13.15]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line3 .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#ed3f35', '#00f2f1','#00f200'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '0-14岁',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '15-64岁',
        data: yearData[0].data[1]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '65岁及以上',
        data: yearData[0].data[2]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // // 5.点击切换2020 和 2021 的数据
  // $('.line h3 a').on('click', function () {
  //   // console.log($(this).index());
  //   // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
  //   // console.log(yearData[$(this).index()]);
  //   var obj = yearData[$(this).index()];
  //   option.series[0].data = obj.data[0];
  //   option.series[1].data = obj.data[1];
  //   option.series[2].data = obj.data[2];
  //   // 选中年份高亮
  //   $('.line h3 a').removeClass('a-active');
  //   $(this).addClass('a-active');

  //   // 需要重新渲染
  //   myChart.setOption(option);
  // })
})();



// 模拟飞行路线地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));

const dataInfo = [
    {
        name: '北京',
        value: 5.67,
        // value2: 12.4,
    },
    {
        name: '天津',
        value: 5.3,
        // value2: 7.9,
    },
    {
        name: '上海',
        value: 4.35,
        // value2: 10.8,
    },
    {
        name: '重庆',
        value: 5.98,
        // value2: 19.2,
    },
    {
        name: '河北',
        value: 6.09,
        // value2: 45.3,
    },
    {
        name: '河南',
        value: 7.42,
        // value2: 73.3,
    },
    {
        name: '云南',
        value: 8.14,
        // value2: 38.2,
    },
    {
        name: '辽宁',
        value: 4.08,
        // value2: 17.2,
    },
    {
        name: '黑龙江',
        value: 3.34,
        // value2: 10.4,
    },
    {
        name: '湖南',
        value: 6.23,
        // value2: 41.2,
    },
    {
        name: '安徽',
        value: 7.16,
        // value2: 43.8,
    },
    {
        name: '山东',
        value: 6.71,
        // value2: 68.2,
    },
    {
        name: '新疆',
        value: 6.53,
        // value2: 16.9,
    },
    {
        name: '江苏',
        value: 5.23,
        // value2: 44.5,
    },
    {
        name: '浙江',
        value: 6.28,
        // value2: 41.2,
    },
    {
        name: '江西',
        value: 7.19,
        // value2: 32.5,
    },
    {
        name: '湖北',
        value: 6.08,
        // value2: 35.5,
    },
    {
        name: '广西',
        value: 8.51,
        // value2: 42.9,
    },
    {
        name: '甘肃',
        value: 8.47,
        // value2: 21.1,
    },
    {
        name: '山西',
        value: 6.75,
        // value2: 23.5,
    },
    {
        name: '内蒙古',
        value: 5.58,
        // value2: 13.4,
    },
    {
        name: '陕西',
        value: 7.36,
        // value2: 29.1,
    },
    {
        name: '吉林',
        value: 4.33,
        // value2: 10.2,
    },
    {
        name: '福建',
        value: 7.07,
        // value2: 29.6,
    },
    {
        name: '贵州',
        value: 11.03,
        // value2: 42.5,
    },
    {
        name: '广东',
        value: 8.3,
        // value2: 105.2,
    },
    {
        name: '青海',
        value: 10.6,
        // value2: 6.3,
    },
    {
        name: '西藏',
        value: 14.24,
        // value2: 5.18,
    },
    {
        name: '四川',
        value: 6.39,
        // value: 53.5,
    },
    {
        name: '宁夏',
        value: 10.6,
        // value2: 7.7,
    },
    {
        name: '海南',
        value: 8.6,
        // value2: 8.8,
    },

];


var convertData = function (data) {
    var res = [];

    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                value2: geoCoord.concat(data[i].value2)
            });
        }
    }

    return res;
};

option = {
    backgroundColor: '#142552',
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
          return params.name + '\n 生育率: ' + params.value+ '‰ ' ;
      }
  },

    geo: {
        map: 'china',
        zoom: 1,
        label: {
            normal: {
                show: false,
                color: '#fff',
            },
            emphasis: {
                show: false,
                color: 'red',
            },
        },
        roam: false,
        itemStyle: {
            normal: {
                borderWidth: 1, //区域边框宽度
                borderColor: '#FFFF00', //区域边框颜色
                areaColor: '#FFFF00', //区域颜色
                label: {
                    show: false, //是否显示各省名称
                    textStyle: {
                        color: '#fff', //显示各省名称颜色
                        fontWeight: 'bold',
                    },
                },
            },
            emphasis: {
                areaColor: '#092766', //区域颜色，鼠标悬停颜色
                label: {
                    show: false, //鼠标悬浮时是否显示各省名称
                    textStyle: {
                        color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                    },
                },
            },
        },
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            geoIndex: 1,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            roam: false,
            itemStyle: {
                normal: {
                    borderWidth: 1, //区域边框宽度
                    borderColor: '#0DC0FF', //区域边框颜色
                    areaColor: '#092766', //区域颜色
                    label: {
                        show: true, //是否显示各省名称
                        textStyle: {
                            color: 'yellow', //显示各省名称颜色
                            fontWeight: 'bold',
                        },
                    },
                },
                emphasis: {
                    areaColor: '#FFF8DC', //区域颜色，鼠标悬停颜色
                    label: {
                        show: true, //鼠标悬浮时是否显示各省名称
                        textStyle: {
                            color: '#000000', //鼠标悬浮时显示各省名称的颜色
                        },
                    },
                },
            },
            data: dataInfo,
        },
    ],
};

myChart.setOption(option);
})();