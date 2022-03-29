$(function() {

	table1();
	table2();
	table3();

	function table1() {
		var airData = [{
				"name": "乌鲁木齐市",
				"value": 248
			},
			{
				"name": "克拉玛依市",
				"value": 17577
			},
			{
				"name": "吐鲁番市",
				"value": 7349
			},
			{
				"name": "高昌区",
				"value": 180
			},
			{
				"name": "鄯善县",
				"value": 967
			},
			{
				"name": "托克逊县",
				"value": 6203
			},
			{
				"name": "哈密市",
				"value": 38766
			},
			{
				"name": "伊州区",
				"value": 38405
			},
			{
				"name": "巴里坤哈萨克自治县",
				"value": 339
			},
			{
				"name": "伊吾县",
				"value": 22
			},
			{
				"name": "昌吉回族自治州",
				"value": 305501
			},
			{
				"name": "昌吉市",
				"value": 61332
			},
			{
				"name": "阜康市",
				"value": 25204
			},
			{
				"name": "呼图壁县",
				"value": 108501
			},
			{
				"name": "玛纳斯县",
				"value": 110008
			},
			{
				"name": "奇台县",
				"value": 0
			},
			{
				"name": "吉木萨尔县",
				"value": 456
			},
			{
				"name": "木垒哈萨克自治县",
				"value": 0
			},
			{
				"name": "伊犁哈萨克自治州",
				"value": 22611
			},
			{
				"name": "伊宁市",
				"value": 0
			},
			{
				"name": "奎屯市",
				"value": 20977
			},
			{
				"name": "霍尔果斯市",
				"value": 656
			},
			{
				"name": "伊宁县",
				"value": 0
			},
			{
				"name": "察布查尔锡伯自治县",
				"value": 660
			},
			{
				"name": "霍城县",
				"value": 317
			},
			{
				"name": "巩留县",
				"value": 0
			},
			{
				"name": "新源县",
				"value": 0
			},
			{
				"name": "昭苏县",
				"value": 0
			},
			{
				"name": "特克斯县",
				"value": 0
			},
			{
				"name": "尼勒克县",
				"value": 0
			},
			{
				"name": "塔城地区",
				"value": 429148
			},
			{
				"name": "塔城市",
				"value": 0
			},
			{
				"name": "乌苏市",
				"value": 196016
			},
			{
				"name": "额敏县",
				"value": 0
			},
			{
				"name": "沙湾县",
				"value": 222358
			},
			{
				"name": "托里县",
				"value": 1861
			},
			{
				"name": "裕民县",
				"value": 0
			},
			{
				"name": "和布克赛尔蒙古自治县",
				"value": 8912
			},
			{
				"name": "阿勒泰地区",
				"value": 0
			},
			{
				"name": "阿勒泰市",
				"value": 0
			},
			{
				"name": "布尔津县",
				"value": 0
			},
			{
				"name": "富蕴县",
				"value": 0
			},
			{
				"name": "福海县",
				"value": 0
			},
			{
				"name": "哈巴河县",
				"value": 0
			},
			{
				"name": "青河县",
				"value": 0
			},
			{
				"name": "吉木乃县",
				"value": 0
			},
			{
				"name": "博尔塔拉蒙古自治州",
				"value": 178890
			},

			{
				"name": "博乐市",
				"value": 58820
			},
			{
				"name": "精河县",
				"value": 120070
			},
			{
				"name": "温泉县",
				"value": 0
			},
			{
				"name": "巴音郭楞蒙古自治州",
				"value": 427151
			},
			{
				"name": "库尔勒市",
				"value": 124467
			},
			{
				"name": "轮台县",
				"value": 115395
			},
			{
				"name": "尉犁县",
				"value": 145441
			},
			{
				"name": "若羌县",
				"value": 3755
			},
			{
				"name": "且末县",
				"value": 15811
			},
			{
				"name": "焉耆回族自治县",
				"value": 245
			},
			{
				"name": "和静县",
				"value": 0
			},
			{
				"name": "和硕县",
				"value": 13440
			},
			{
				"name": "博湖县",
				"value": 8596
			},
			{
				"name": "阿克苏地区",
				"value": 869852
			},
			{
				"name": "阿克苏市",
				"value": 99331
			},
			{
				"name": "温宿县",
				"value": 62479
			},
			{
				"name": "库车市",
				"value": 201332
			},
			{
				"name": "沙雅县",
				"value": 231868
			},
			{
				"name": "新和县",
				"value": 106318
			},
			{
				"name": "拜城县",
				"value": 603
			},
			{
				"name": "乌什县",
				"value": 25
			},
			{
				"name": "阿瓦提县",
				"value": 154036
			},
			{
				"name": "柯坪县",
				"value": 13861
			},
			{
				"name": "克孜勒苏柯尔克孜自治州",
				"value": 18004
			},
			{
				"name": "阿图什市",
				"value": 10063
			},
			{
				"name": "阿克陶县",
				"value": 7940
			},
			{
				"name": "阿合奇县",
				"value": 0
			},
			{
				"name": "乌恰县",
				"value": 0
			},
			{
				"name": "喀什地区",
				"value": 648450
			},
			{
				"name": "喀什市",
				"value": 20169
			},
			{
				"name": "疏附县",
				"value": 7423
			},
			{
				"name": "疏勒县",
				"value": 74381
			},
			{
				"name": "英吉沙县",
				"value": 22092
			},
			{
				"name": "泽普县",
				"value": 11002
			},
			{
				"name": "莎车县",
				"value": 76483
			},
			{
				"name": "叶城县",
				"value": 26948
			},
			{
				"name": "麦盖提县",
				"value": 71968
			},
			{
				"name": "岳普湖县",
				"value": 72292
			},
			{
				"name": "伽师县",
				"value": 142602
			},
			{
				"name": "巴楚县",
				"value": 122381
			},
			{
				"name": "塔什库尔干塔吉克自治县",
				"value": 711
			},
			{
				"name": "和田地区",
				"value": 10454
			},
			{
				"name": "和田市",
				"value": 99
			},
			{
				"name": "和田县",
				"value": 980
			},
			{
				"name": "墨玉县",
				"value": 2446
			},
			{
				"name": "皮山县",
				"value": 1029
			},
			{
				"name": "洛浦县",
				"value": 22
			},
			{
				"name": "策勒县",
				"value": 787
			},
			{
				"name": "于田县",
				"value": 4893
			},
			{
				"name": "民丰县",
				"value": 198
			},
			{
				"name": "北屯市",
				"value": 0
			},
			{
				"name": "北屯市",
				"value": 0
			},
			{
				"name": "石河子市",
				"value": 0
			},
			{
				"name": "双河市",
				"value": 0
			},
			{
				"name": "阿拉尔市",
				"value": 0
			},
			{
				"name": "图木舒克市",
				"value": 0
			},
			{
				"name": "可克达拉市",
				"value": 0
			},
			{
				"name": "胡杨河市",
				"value": 0
			},
			{
				"name": "五家渠市",
				"value": 0
			},
			{
				"name": "铁门关市",
				"value": 0
			},
			{
				"name": "昆玉市",
				"value": 0
			},
		]
		var mChart = echarts.init(document.getElementById('xj'));
		$.get('js/xinjiang.geoJson', function(ret) {
			echarts.registerMap('chinaMap', ret)
			console.log(ret)
			var option = {
				geo: {
					type: 'map',
					map: 'chinaMap',
					roam: true,
					label: {
						show: true,
						color: "#333"
					},
					// zoom: 1,
				},
				tooltip: {
					trigger: 'item',
					formatter: '{b}<br/>{c} (吨)'
				},
				series: [{
					data: airData,
					geoIndex: 0,
					type: 'map',
					aspectScale: 0.75,
					roam: false,
					zoom: 1.2,
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
				}],
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
					max: 1000000,
					left: 'right',
					top: 'bottom',
					text: ['高', '低'], // 文本，默认为数值文本
					calculable: true,
					color: ['#1790cf', '#a2d4e6'],
					textStyle: {
						color: '#fff'
					}
				},

			}
			mChart.setOption(option);
		})

		// 使用刚指定的配置项和数据显示图表。
		window.onresize = function() {
			mChart.resize()
		}
	}

	function table2() {
		var myChart = echarts.init(document.getElementById('chart_2'));
		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['产量(千吨)', '播种面积(千公顷)'],
				textStyle: {
					color: '#fff'
				}
			},
			grid: {
				left: '3%',
				right: '6%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01],
				axisLabel: {
					color: "rgba(255, 255, 255, 1)"
				},
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "rgba(255, 255, 255, 1)"
					}
				}
			},
			yAxis: {
				type: 'category',
				axisLabel: {
					color: "rgba(255, 255, 255, 1)"
				},
				axisLine: {
					lineStyle: {
						color: "rgba(255, 255, 255, 1)"
					}
				},
				data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年']
			},
			series: [{
					name: '产量(千吨)',
					type: 'bar',
					data: [4191, 4078, 4566, 5111, 5002, 5161]
				},
				{
					name: '播种面积(千公顷)',
					type: 'bar',
					data: [2144.3, 2059.6, 2217.5, 2491.3, 2540.5, 2501.9],
					itemStyle: {
						normal: {
							color: '#379fbf'
						}
					},

				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function table3() {
		var myChart = echarts.init(document.getElementById('chart_3'));
		var chinaDatas = [{
				name: '生产建设兵团',
				value: 2028000
			},
			{
				name: '喀什地区',
				value: 648450
			},
			{
				name: '阿克苏地区',
				value: 869852
			},
			{
				name: '巴音郭楞蒙古',
				value: 427151
			},
			{
				name: '博尔塔拉蒙古',
				value: 178890
			},
			{
				name: '塔城地区',
				value: 429148
			},

			{
				name: '昌吉回族',
				value: 305501
			},
			{
				name: '哈密市',
				value: 38766
			},


		];

		var yData = [];
		var barData = chinaDatas;
		barData = barData.sort(function(a, b) {
			return b.value - a.value;
		});
		for (var j = 0; j < barData.length; j++) {
			if (j < 10) {
				yData.push('0' + j + barData[j].name);
			} else {
				yData.push(j + barData[j].name);
			}
		}

		option = {
			title: [{
				show: true,
				text: '2019年产量排行',
				subtext: '单位：吨',
				subtextStyle: {
					color: '#ffffff',
					lineHeight: 20
				},
				textStyle: {
					color: '#fff',
					fontSize: 18
				},
				right: 140,
				top: 20
			}],
			grid: {
				right: 10,
				top: 80,
				bottom: 20,
				width: '200'
			},
			xAxis: {
				show: false
			},
			yAxis: {
				type: 'category',
				inverse: true,
				axisLine: {
					show: false,
					lineStyle: {
						color: '#ddd'
					}
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: '#ddd'
					}
				},
				axisLabel: {
					interval: 0,
					margin: 110,
					textStyle: {
						color: '#fff',
						align: 'left',
						fontSize: 12
					},
					rich: {
						a: {
							color: '#fff',
							backgroundColor: '#f0515e',
							width: 15,
							height: 15,
							align: 'center',
							borderRadius: 2
						},
						b: {
							color: '#fff',
							backgroundColor: '#24a5cd',
							width: 15,
							height: 15,
							align: 'center',
							borderRadius: 2
						}
					},
					formatter: function(params) {
						if (parseInt(params.slice(0, 2)) < 3) {
							return [
								'{a|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + params
								.slice(2)
							].join('\n')
						} else {
							return [
								'{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + params
								.slice(2)
							].join('\n')
						}
					}
				},
				data: yData
			},
			series: [{
				name: 'barSer',
				type: 'bar',
				roam: false,
				visualMap: false,
				zlevel: 2,
				barMaxWidth: 16,
				barGap: 0,
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = [{
									colorStops: [{
										offset: 0,
										color: '#f0515e'
									}, {
										offset: 1,
										color: '#ef8554'
									}]
								},
								{
									colorStops: [{
										offset: 0,
										color: '#3c38e4'
									}, {
										offset: 1,
										color: '#24a5cd'
									}]
								}
							];
							if (params.dataIndex < 3) {
								return colorList[0]
							} else {
								return colorList[1]
							}
						},
						barBorderRadius: [0, 15, 15, 0]
					}
				},
				label: {
					normal: {
						show: true,
						textBorderColor: '#333',
						textBorderWidth: 2
					}
				},
				data: barData.sort((a, b) => {
					return b.value - a.value;
				})
			}]
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}

		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}



});
