Highcharts.setOptions({
    lang:{
        contextButtonTitle:"图表导出菜单",
        decimalPoint:".",
        downloadJPEG:"下载JPEG图片",
        downloadPDF:"下载PDF文件",
        downloadPNG:"下载PNG文件",
        downloadSVG:"下载SVG文件",
        drillUpText:"返回 {series.name}",
        loading:"加载中",
        months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        noData:"没有数据",
        numericSymbols: [ "千" , "兆" , "G" , "T" , "P" , "E"],
        printChart:"打印图表",
        resetZoom:"恢复缩放",
        resetZoomTitle:"恢复图表",
        shortMonths: [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],
        thousandsSep:",",
        weekdays: ["星期一", "星期二", "星期三", "星期三", "星期四", "星期五", "星期六","星期天"]
    }
});

$(function(){
    $('#fullpage').fullpage({
        sectionsColor: ['#dbe9d8','#C2D4D8','#F2EFE8','#B0ABC2'],
        anchors: ['page1','page2','page3','page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['图表一','图表二','图表三','图表四'],
        showActiveTooltip: true
    });

    $('#chart1').highcharts({
        chart: {
            type: 'spline',
            backgroundColor : '#dbe9d8',
        },
        title: {
            text: '深圳二月份历史均值气温',
            style: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            text: '2017/2/23/16:05'
        },
        xAxis: {
            title: {
                text: '日期'
            },
            type: 'datetime',
            labels: {
                overflow: 'justify'
            },
            lineWidth: 3,
            lineColor: '#afe5a2'
        },
        yAxis: {
            title: {
                text: '摄氏温度(℃)'
            },
            lineWidth: 3,
            lineColor: '#afe5a2'
        },
        tooltip: {
            valueSuffix: '℃'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 86400000,
                pointStart: Date.UTC(2017, 2, 1)
            }
        },
        series: [{
            name: '历史均值高温',
            data: [23,24,22,22,22,23,24,23,19,20,19,18,17,17,16,17,15,17,17,16,18,20,21,24,23,24,24,24]
        },{
            name: '历史均值低温',
            data: [15,16,15,16,17,17,17,14,13,13,14,11,10,12,13,12,13,13,10,10,13,15,16,17,18,17,18,17]
        }]
    })

    $('#chart2').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : '#C2D4D8',
        },
        title: {
            text: '网站用户访问来源统计',
            style: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            text: '数据纯属虚构'
        },
        xAxis: {
            categories: ['周一','周二','周三','周四','周五','周六','周日'],
            lineWidth: 3,
            lineColor: '#68c3d6'
        },
        yAxis: {
            title: {
                text: '访问来源数量'
            },
            lineWidth: 3,
            lineColor: '#68c3d6',
            gridLineWidth: 0
        },
        legend: {
            reverse: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '直接访问',
            data: [320, 302, 301, 334, 390, 330, 320]
        },{
            name: '邮件营销',
            data: [120, 132, 101, 134, 90, 230, 210]
        },{
            name: '联盟广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },{
            name: '视频广告',
            data: [150, 212, 201, 154, 190, 330, 410]
        },{
            name: '搜索引擎',
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }]
    })

    $('#chart3').highcharts({
        chart: {
            type: 'pie',
            backgroundColor : '#F2EFE8',
        },
        title: {
            text: '网站用户访问来源统计',
            style: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            text: '数据纯属虚构'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true
            }
        },
        series: [{
            name: '所占比例',
            colorByPoint: true,
            data: [{
                name: '直接访问',
                y: 335
            },{
                name: '邮件营销',
                y: 310
            },{
                name: '联盟广告',
                y: 234
            },{
                name: '视频广告',
                y: 135
            },{
                name: '搜索引擎',
                y: 1548
            }]
        }]
    })

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart4',
            type: 'column',
            backgroundColor : '#B0ABC2',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            },
        },
        title: {
            text: '2016中国手机销量排行榜',
            style: {
                fontSize: '20px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            text: 'OPPO暴增,小米跌惨！'
        },
        xAxis: {
            categories: ['华为','OPPO','vivo','小米','中兴','联想','TCL','金立','魅族','乐视'],
            lineWidth: 3,
            lineColor: '#715bbf',
            // gridLineColor: '#197F07',//纵向网格线颜色
            gridLineWidth: 0 //纵向网格线宽度
        },
        yAxis: {
            title: {
                text: '销量（百万台）'
            },
            lineWidth: 3,
            lineColor: '#715bbf',
            gridLineColor: '#715bbf'
        },
        tooltip: {
            valueSuffix: '百万台'
        },
         plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            name: '手机厂商',
            data: [139,95,82,58,57,50,34,28,22,19]       
        }]
    })

    function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }

    // Activate the sliders
    $('#sliders input').on('input change', function () {
        chart.options.chart.options3d[this.id] = this.value;
        showValues();
        chart.redraw(false);
    });

    showValues();
})