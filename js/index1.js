$(function() {

	form1();
	form2();
	form3();
	form4();
	form5();
	form6();

	function form1() {
		var myChart = echarts.init(document.getElementById('chart1'));
		var labelimg = "";

		option = {
			"grid": {
				"left": "6%",
				"top": "15%",
				"right": "3%",
				"bottom": "10%"
			},
			"legend": {
				"data": [
					"中国",
					"印度",
					"美国",
					"巴西",
					"巴基斯坦",
					"其他"
				],
				"top": "92%",
				"icon": "circle",
				"textStyle": {
					"color": "#0DCAD2"
				}
			},
			"color": [
				"#534EE1",
				"#ECD64F",
				"#00E4F0",
				"#44D16D",
				"#124E91",
				"#BDC414"
			],
			"tooltip": {
				"position": "top",
			},
			"xAxis": {
				"type": "category",
				"data": [
					"中国",
					"印度",
					"美国",
					"巴西",
					"巴基斯坦",
					"其他"
				],
				"axisLabel": {
					"show": false,
					"color": "#999999",
					"fontSize": 16
				},
				"axisTick": {
					"show": false
				},
				"axisLine": {
					"show": false
				},
				"splitLine": {
					"show": false
				}
			},
			"yAxis": {
				"type": "value",
				"axisLabel": {
					"show": false,
					"color": "#999999",
					"fontSize": 14
				},
				"axisTick": {
					"show": false
				},
				"axisLine": {
					"show": false
				},
				"splitLine": {
					"show": false
				}
			},
			"series": [{
					"name": "中国",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"name": "印度",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"name": "美国",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"name": "巴西",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"name": "巴基斯坦",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"name": "其他",
					"data": [
						0,
						0,
						0,
						0,
						0,
						0,
						0
					],
					"stack": "a",
					"type": "bar"
				},
				{
					"type": "pictorialBar",
					// "name": "提示框值",
					"data": [{
							"name": "",
							"value": "631.4",
							"label": {
								"show": true,
								"position": "top",
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#534EE1",
										"align": "center",
										"height": 40
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-2,
											0,
											2,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 50,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(83,78,225,1)"
											},
											{
												"offset": 1,
												"color": "rgba(83,78,225,0)"
											}
										],
										"global": false
									}
								}
							}
						},
						{
							"name": "",
							"value": 631.4,
							"label": {
								"show": true,
								"position": "top",
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#ECD64F",
										"align": "center",
										"height": 40
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-4,
											0,
											8,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 45,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(236,214,79,1)"
											},
											{
												"offset": 1,
												"color": "rgba(236,214,79,0)"
											}
										],
										"global": false
									}
								}
							}
						},
						{
							"name": "",
							"value": 325.6,
							"label": {
								"show": true,
								"position": "top",
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#00E4F0",
										"align": "center",
										"height": 40
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-4,
											0,
											8,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 45,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(0,228,240,1)"
											},
											{
												"offset": 1,
												"color": "rgba(0,228,240,0)"
											}
										],
										"global": false
									}
								}
							}
						},
						{
							"name": "",
							"value": 261.3,
							"label": {
								"show": true,
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"position": "top",
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#44D16D",
										"align": "center",
										"height": 40
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-4,
											0,
											8,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 45,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(68,209,109,1)"
											},
											{
												"offset": 1,
												"color": "rgba(68,209,109,0)"
											}
										],
										"global": false
									}
								}
							}
						},
						{
							"name": "",
							"value": 98,
							"label": {
								"show": true,
								"position": "top",
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#124E91",
										"align": "center",
										"height": 30
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-4,
											0,
											8,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 45,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(18,78,145,1)"
											},
											{
												"offset": 1,
												"color": "rgba(18,78,145,0)"
											}
										],
										"global": false
									}
								}
							}
						},
						{
							"name": "",
							"value": 400,
							"label": {
								"show": true,
								"position": "top",
								formatter: function(params) {
									var index = params.dataIndex;
									var str = "{a|" + params.value + "}";
									return str;
								},
								"rich": {
									"a": {
										"fontSize": 18,
										"color": "#BDC414",
										"align": "center",
										"height": 30
									},
									"c": {
										"fontSize": 18,
										"color": "#fff",
										"padding": [
											-4,
											0,
											8,
											0
										],
										"backgroundColor": {
											"image": labelimg
										},
										"align": "center",
										"verticalAlign": "bottom",
										"height": 45,
										"lineHeight": 40,
										"width": 100
									}
								}
							},
							"itemStyle": {
								"normal": {
									"color": {
										"type": "linear",
										"x": 0,
										"y": 0,
										"x2": 0,
										"y2": 1,
										"colorStops": [{
												"offset": 0,
												"color": "rgba(189,196,20,1)"
											},
											{
												"offset": 1,
												"color": "rgba(189,196,20,0)"
											}
										],
										"global": false
									}
								}
							}
						}
					],
					"stack": "a",
					"symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
				}
			]
		}
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function form2() {
		var myChart = echarts.init(document.getElementById('chart2'));

		var ydata = [{
				name: '中国',
				value: 860
			},
			{
				name: '印度',
				value: 529.1
			},
			{
				name: '巴基斯坦',
				value: 222.1
			},
			{
				name: '孟加拉国',
				value: 161.1
			},
			{
				name: '土耳其',
				value: 158.9
			},
			{
				name: '越南',
				value: 145.9
			},
			{
				name: '乌兹别克斯坦',
				value: 68.6
			},
			{
				name: '其他',
				value: 406.2
			}
		];
		var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301",
			"#57e7ec", "#cf9ef1"
		]
		var xdata = ['中国', "印度", "巴基斯坦", "孟加拉国", '土耳其', '越南', '乌兹别克斯坦', '其他'];


		option = {
			color: color,
			legend: {
				orient: "vartical",
				x: "left",
				top: "center",
				left: "53%",
				bottom: "0%",
				data: xdata,
				itemWidth: 8,
				itemHeight: 8,
				textStyle: {
					color: '#fff'
				},

				formatter: function(name) {
					return '' + name
				}
			},
			series: [{
				type: 'pie',
				clockwise: false, //饼图的扇区是否是顺时针排布
				minAngle: 2, //最小的扇区角度（0 ~ 360）
				radius: ["20%", "60%"],
				center: ["30%", "45%"],
				avoidLabelOverlap: false,
				itemStyle: { //图形样式
					normal: {
						borderColor: '#ffffff',
						borderWidth: 1,
					},
				},
				label: {
					normal: {
						show: false,
						position: 'center',
						formatter: '{text|{b}}\n{c} ({d}%)',
						rich: {
							text: {
								color: "#000",
								fontSize: 18,
								align: 'center',
								verticalAlign: 'middle',
								padding: 8
							},
							value: {
								color: "#8693F3",
								fontSize: 24,
								align: 'center',
								verticalAlign: 'middle',
							},
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: 24,
							color: "#000",
						}
					}
				},
				data: ydata
			}]
		};
		myChart.setOption(option);

		setTimeout(function() {
			myChart.on('mouseover', function(params) {
				if (params.name == ydata[0].name) {
					myChart.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: 0
					});
				} else {
					myChart.dispatchAction({
						type: 'downplay',
						seriesIndex: 0,
						dataIndex: 0
					});
				}
			});

			myChart.on('mouseout', function(params) {
				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: 0
				});
			});
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: 0
			});
		}, 1000);

		myChart.currentIndex = -1;

		setInterval(function() {
			var dataLen = option.series[0].data.length;
			// 取消之前高亮的图形
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: myChart.currentIndex
			});
			myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
			// 高亮当前图形
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: myChart.currentIndex
			});
		}, 1000);

		// 使用刚指定的配置项和数据显示图表。
		/*myChart.setOption(option);*/
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function form3() {
		var myChart = echarts.init(document.getElementById('map'));
		var option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				y: 'bottom',
				data: [
					'棉花产量分布'
				],
				textStyle: {
					color: '#ccc'
				}
			},
			visualMap: {
				min: 0,
				max: 600,
				left: 'right',
				top: 'bottom',
				text: ['高', '低'], // 文本，默认为数值文本
				calculable: true,
				color: ['#1790cf', '#a2d4e6'],
				textStyle: {
					color: '#fff'
				}
			},
			series: [{
				name: '棉花产量（单位：万吨）',
				type: 'map',
				aspectScale: 0.75,
				zoom: 1.2,
				mapType: 'china',
				roam: false,
				label: {
					normal: {
						show: true, //显示省份标签
						textStyle: {
							color: "#c71585"
						} //省份标签字体颜色
					},
					emphasis: { //对应的鼠标悬浮效果
						show: true,
						textStyle: {
							color: "#800080"
						}
					}
				},
				itemStyle: {
					normal: {
						borderWidth: .5, //区域边框宽度
						borderColor: '#009fe8', //区域边框颜色
						areaColor: "#ffffff", //区域颜色
					},
					emphasis: {
						borderWidth: .5,
						borderColor: '#4b0082',
						areaColor: "#ffdead",
					}
				},
				data: function() {
					var serie = [];
					for (var i = 0; i < vm.map.length; i++) {
						var item = {
							name: vm.map[i].area,
							value: vm.map[i].cnt
						};
						serie.push(item);
					}
					return serie;
				}()

			}]
		};

		myChart.setOption(option);

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		myChart.on('click', function(params) { //点击事件
			if (params.componentType === 'series') {}
		})
	}

	function form4() {
		var myChart = echarts.init(document.getElementById('chart4'));

		var colors = ['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)'];

		option = {
			color: colors,

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			grid: {
				right: '15%',
				left: '8%'
			},
			toolbox: {
				feature: {
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			legend: {
				textStyle: {
					color: "rgba(255, 255, 255, 1)"
				},
				data: ['总产量(万吨)', '播种面积(千公顷)', '单位面积产量(公斤/公顷)']
			},
			dataZoom: [{
				show: true,
				start: 60,
				end: 100
			}],
			xAxis: [{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				axisLine: {
					show: true
				},
				axisLabel: {
					show: true,
					interval: 0,
					formatter: '{value} 年',
					textStyle: {
						color: "#ffffff" //X轴文字颜色
					}
				},
				data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
					'2015', '2016', '2017',
					'2018', '2019',
					'2020'
				]
			}],
			yAxis: [{
					type: 'value',
					name: '总产量',
					min: 0,
					max: 800,
					position: 'right',
					axisLine: {
						lineStyle: {
							color: colors[0]
						}
					}
				},
				{
					type: 'value',
					name: '播种面积',
					splitLine: {
						show: false
					},
					min: 0,
					max: 6000,
					position: 'right',
					offset: 50,
					axisLine: {
						lineStyle: {
							color: colors[1]
						}
					}
				},
				{
					type: 'value',
					splitLine: {
						show: false
					},
					name: '单位面积产量',
					min: 0,
					max: 2000,
					position: 'left',
					axisLine: {
						lineStyle: {
							color: colors[2]
						}
					}
				}
			],
			series: [{
					name: '总产量(万吨)',
					type: 'bar',
					data: [753.3, 759.7, 723.2, 623.6, 577.0, 651.9, 660.8, 628.2, 629.9, 590.7, 534.3,
						565.3, 610.3, 588.9,
						591.0
					],
					itemStyle: {
						normal: {
							barBorderRadius: 2
						}
					}
				},
				{
					barGap: '0%', // 增加偏移量使重叠显示
					barWidth: "30%",
					name: '播种面积(千公顷)',
					type: 'bar',
					yAxisIndex: 1,
					data: [5816, 5199, 5278, 4485, 4366, 4524, 4360, 4162, 4176, 3775, 3198, 3195, 3354,
						3339, 3169.9
					],
					itemStyle: {
						normal: {
							barBorderRadius: 2
						}
					}
				},
				{
					name: '单位面积产量(公斤/公顷)',
					type: 'line',
					yAxisIndex: 2,
					data: [1295, 1461, 1370, 1390, 1322, 1441, 1516, 1509, 1508, 1565, 1671, 1769, 1819,
						1764, 1864.5
					],
				}
			]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function form5() {
		var myChart = echarts.init(document.getElementById('chart5'));

		option = {
			"animation": true,
			"title": {
				"x": "center",
				"y": "center",
				"textStyle": {
					"color": "#fff",
					"fontSize": 12,
					"fontWeight": "normal",
					"align": "center",
					"width": "200px"
				},
				"subtextStyle": {
					"color": "#fff",
					"fontSize": 12,
					"fontWeight": "normal",
					"align": "center"
				}
			},
			"legend": {
				"width": "100%",
				"left": "center",
				"textStyle": {
					"color": "#fff",
					"fontSize": 10
				},
				"icon": "circle",
				"right": "0",
				"bottom": "0",
				"padding": [15, 20],
				"itemGap": 5,
				"data": ["新疆", "河北", "山东", "湖北", "湖南", "江西", "其它"]
			},
			"series": [{
				"type": "pie",
				"center": ["50%", "40%"],
				"radius": ["20%", "43%"],
				"color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#F76F01", "#01A4F7",
					"#FE2C8A"
				],
				"startAngle": 135,
				"labelLine": {
					"normal": {
						"length": 15
					}
				},
				"label": {
					"normal": {
						"formatter": "{b|{b}:}{per|{d}%} ",
						"backgroundColor": "rgba(255, 147, 38, 0)",
						"borderColor": "transparent",
						"borderRadius": 4,
						"rich": {
							"a": {
								"color": "#999",
								"lineHeight": 12,
								"align": "center"
							},
							"hr": {
								"borderColor": "#aaa",
								"width": "100%",
								"borderWidth": 1,
								"height": 0
							},
							"b": {
								"color": "#b3e5ff",
								"fontSize": 10,
								"lineHeight": 33
							},
							"c": {
								"fontSize": 10,
								"color": "#eee"
							},
							"per": {
								"color": "#FDF44E",
								"fontSize": 12,
								"padding": [5, 8],
								"borderRadius": 2
							}
						},
						"textStyle": {
							"color": "#fff",
							"fontSize": 14
						}
					}
				},
				"emphasis": {
					"label": {
						"show": true,
						"formatter": "{b|{b}:}  {per|{d}%}  ",
						"backgroundColor": "rgba(255, 147, 38, 0)",
						"borderColor": "transparent",
						"borderRadius": 4,
						"rich": {
							"a": {
								"color": "#999",
								"lineHeight": 22,
								"align": "center"
							},
							"hr": {
								"borderColor": "#aaa",
								"width": "100%",
								"borderWidth": 1,
								"height": 0
							},
							"b": {
								"color": "#fff",
								"fontSize": 14,
								"lineHeight": 33
							},
							"c": {
								"fontSize": 14,
								"color": "#eee"
							},
							"per": {
								"color": "#FDF44E",
								"fontSize": 14,
								"padding": [5, 6],
								"borderRadius": 2
							}
						}
					}
				},
				"data": [{
						"name": "新疆",
						"value": 516.1
					}, {
						"name": "河北",
						"value": 20.9
					}, {
						"name": "山东",
						"value": 18.3
					}, {
						"name": "湖北",
						"value": 10.8
					}, {
						"name": "湖南",
						"value": 7.4
					}, {
						"name": "江西",
						"value": 5.3
					},
					{
						"name": "其它",
						"value": 12.2
					}
				]
			}, {
				"type": "pie",
				"center": ["50%", "40%"],
				"radius": ["15%", "14%"],
				"label": {
					"show": false
				},
				"data": [{
					"value": 78,
					"name": "实例1",
					"itemStyle": {
						"normal": {
							"color": {
								"x": 0,
								"y": 0,
								"x2": 1,
								"y2": 0,
								"type": "linear",
								"global": false,
								"colorStops": [{
									"offset": 0,
									"color": "#9F17FF"
								}, {
									"offset": 0.2,
									"color": "#01A4F7"
								}, {
									"offset": 0.5,
									"color": "#FE2C8A"
								}, {
									"offset": 0.8,
									"color": "#FEE449"
								}, {
									"offset": 1,
									"color": "#00FFA8"
								}]
							}
						}
					}
				}]
			}]
		}

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		myChart.currentIndex = -1;
		//myChart.setOption(option);
		//console.log(option.series[0].data[0]);
		setInterval(function() {
			var dataLen = option.series[0].data.length;
			// 取消之前高亮的图形
			myChart.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: myChart.currentIndex
			});
			myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
			// 高亮当前图形
			myChart.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: myChart.currentIndex
			});
		}, 1000);

		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function form6() {
		var myChart = echarts.init(document.getElementById('chart6'));

		option = {
			color: 'rgb(46, 199, 201)',
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				data: ['进口数量(万吨)', '进口金额(亿美元)'],
				textStyle: { //图例文字的样式
					color: '#fff',
				}
			},
			xAxis: [{
				type: 'category',
				data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
				axisPointer: {
					type: 'shadow'
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				axisLabel: {
					interval: 0,
					textStyle: {
						color: '#fff',
					},
				},
			}],
			yAxis: [{
					type: 'value',
					name: '数量',
					min: 0,
					max: 250,
					interval: 50,
					axisLine: {
						lineStyle: {
							color: '#fff'
						}
					},
					axisLabel: {
						formatter: '{value}',
						textStyle: {
							color: '#fff',
						},
					}
				},
				{
					type: 'value',
					name: '金额',
					min: 0,
					max: 50,
					interval: 10,
					axisLine: {
						lineStyle: {
							color: '#fff'
						}
					},
					axisLabel: {
						formatter: '{value}'
					}
				}
			],
			series: [

				{
					name: '进口数量(万吨)',
					type: 'bar',
					data: [147, 90, 116, 157, 185, 216],
					barWidth: 20,

				},
				{
					name: '进口金额(亿美元)',
					type: 'line',
					yAxisIndex: 1,
					data: [25.7, 15.7, 21.9, 31.7, 35.7, 35.7]
				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

});
