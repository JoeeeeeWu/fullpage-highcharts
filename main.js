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
        navigationTooltips: ['图表一','图表二','','图表三'],
        showActiveTooltip: true
    });

    $('#chart1').highcharts({
        chart: {
            type: 'spline',
            backgroundColor : '#dbe9d8',
        },
        title: {
            text: '深圳二月份历史均值气温'
        },
        subtitle: {
            text: '2017/2/23/16:05'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: '摄氏温度(℃)'
            }
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
})