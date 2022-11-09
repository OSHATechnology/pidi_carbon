var targetHarian = 200000;
var yesterday = 180000
$.ajax({
    url: '/convertEnergy',
    type: 'GET',
    dataType: 'JSON',
    async: false,
    success: function(result) {
        $('.text-yesterday').html('')
        $('.text-today').html('')
        $('.text-percent-today').html('')

        var sumAll = parseInt(result.welding) + parseInt(result.painting) + parseInt(result.assy) + parseInt(result.press)
        columnChart();
        targetHarianVsAktualChart(sumAll);
        donutChart(result)
        
        $('.result-welding').html(numberWithSeparator(result.welding.toFixed(2)))
        $('.result-painting').html(numberWithSeparator(result.painting.toFixed(2)))
        $('.result-assy').html(numberWithSeparator(result.assy.toFixed(2)))
        $('.result-press').html(numberWithSeparator(result.press.toFixed(2)))
    }
})

function numberWithSeparator(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function targetHarianVsAktualChart(totalEmisi) {
    var persentase = (totalEmisi/targetHarian)*100;
    var persentaseToday = 0;
    persentase = persentase.toFixed(0);

    if(parseInt(yesterday) > parseInt(totalEmisi)) {
        persentaseToday = ((parseInt(totalEmisi) - parseInt(yesterday))/parseInt(yesterday)) *100
    } else {
        persentaseToday = ((parseInt(yesterday) - parseInt(totalEmisi))/parseInt(yesterday)) *100
    }
    
    $('.text-yesterday').html(numberWithSeparator(yesterday))
    $('.text-today').html(numberWithSeparator(totalEmisi))
    $('.text-percent-today').html()
    var gradientRadialChart,gradientRadialOptions={
        series:[persentase],
        chart:{
            height:200,
            type:"radialBar",
            toolbar:{show:!1}
        },
        plotOptions:{
            radialBar:{
                startAngle:-135,
                endAngle:225,
                hollow:{
                    margin:0,
                    size:`${persentase}%`,
                    background:colors.backgroundColor,
                    image:void 0,
                    imageOffsetX:0,
                    imageOffsetY:0,
                    position:"front"
                },
                track:{
                    background:colors.backgroundColor,
                    strokeWidth:"67%",
                    margin:0
                },
                dataLabels:{
                    show:!0,
                    name:{
                        fontSize:"0.875rem",
                        fontWeight:400,
                        offsetY:-10,
                        show:!0,
                        color:colors.mutedColor,
                        fontFamily:base.defaultFontFamily
                    },
                    value:{
                        formatter:function(e){return parseInt(e)
                    },
                    color:colors.headingColor,
                    fontSize:"1.53125rem",
                    fontWeight:700,
                    fontFamily:base.defaultFontFamily,
                    offsetY:5,
                    show:!0},
                    total:{
                        show:!0,
                        fontSize:"0.875rem",
                        fontWeight:400,
                        offsetY:-10,
                        color:colors.mutedColor,
                        fontFamily:base.defaultFontFamily
                    }
                }
            }
        },
        fill:{
            type:"gradient",
            gradient:{
                shade:"dark",
                type:"horizontal",
                shadeIntensity:.5,
                gradientToColors:["#ABE5A1"],
                inverseColors:!0,
                opacityFrom:1,
                opacityTo:1,
                stops:[0,100]
            }
        },
        stroke:{lineCap:"round"},
        labels:["Percent"]
    },
    gradientRadial=document.querySelector("#gradientRadial");
    gradientRadial&&(gradientRadialChart=new ApexCharts(gradientRadial,gradientRadialOptions)).render();
}

function donutChart(data) {
    var donutChartWidget,donutChartWidgetOptions={
        series:[parseInt(data.welding),parseInt(data.painting), parseInt(data.assy), parseInt(data.press) ],
        chart:{
            type:"donut",
            height:180,
            zoom:{enabled:!1},
            toolbar:{show:!1}
        },
        theme:{mode:colors.chartTheme},
        plotOptions:{
            pie:{
                donut:{
                    size:"40%",
                    background:"transparent"
                },
                expandOnClick:!1
            }
        },
        labels:["Welding","Painting","Assy","Press"],
        dataLabels:{
            enabled:!0,
            style:{
                fontSize:"10px",
                fontFamily:base.defaultFontFamily,
                fontWeight:"300"
            }
        },
        legend:{show:!1},
        stroke:{
            show:!1,
            colors:colors.borderColor,
            width:1,
            dashArray:0
        },
        fill:{
            opacity:1,
            colors:chartColors
        }
    },
    donutChartWidgetCtn=document.querySelector("#donutChartWidget");
    donutChartWidgetCtn&&(donutChartWidget=new ApexCharts(donutChartWidgetCtn,donutChartWidgetOptions)).render();
}

function columnChart() {
    var columnChart,columnChartoptions = { 
        series: [
            {
                name:"Welding",
                data:[32,66,44,55,41,24,67,22,43,32,66,44,55,41,24,67,22,43]
            },
            {
                name:"Painting",
                data:[7,30,13,23,20,12,8,13,27,7,30,13,23,20,12,8,13,27]
            }
        ],
        chart: { 
            type:"bar",
            height:350,
            stacked:!1,
            columnWidth:"70%",
            zoom:{enabled:!0},
            toolbar:{show:!1},
            background:"transparent"
        },
        dataLabels: { 
            enabled:!1
        },
        theme: {
            mode:colors.chartTheme
        },
        responsive: [
            { 
                breakpoint:480,
                options: { 
                    legend: { 
                        position:"bottom",
                        offsetX:-10,
                        offsetY:0
                    }
                }
            }
        ],
        plotOptions: { 
            bar: {
                horizontal:!1,
                columnWidth:"40%",
                radius:30,
                enableShades:!1,
                endingShape:"rounded"
            }
        }, 
        xaxis: { 
            type:"datetime",
            categories: [
                "01/01/2020 GMT",
                "01/02/2020 GMT",
                "01/03/2020 GMT",
                "01/04/2020 GMT",
                "01/05/2020 GMT",
                "01/06/2020 GMT",
                "01/07/2020 GMT",
                "01/08/2020 GMT",
                "01/09/2020 GMT",
                "01/10/2020 GMT",
                "01/11/2020 GMT",
                "01/12/2020 GMT",
                "01/13/2020 GMT",
                "01/14/2020 GMT",
                "01/15/2020 GMT",
                "01/16/2020 GMT",
                "01/17/2020 GMT",
                "01/18/2020 GMT"
            ],
            labels: { 
                show:!0,
                trim:!0,
                minHeight:void 0,
                maxHeight:120,
                style: { 
                    colors:colors.mutedColor, 
                    cssClass:"text-muted", 
                    fontFamily:base.defaultFontFamily
                }
            },
            axisBorder: {show:!1}
        },
        yaxis: { 
            labels: { 
                show:!0,
                trim:!1,
                offsetX:-10,
                minHeight:void 0,
                maxHeight:120,
                style: { 
                    colors:colors.mutedColor,
                    cssClass:"text-muted",
                    fontFamily:base.defaultFontFamily
                }
            }
        },
        legend:{ 
            position:"top",
            fontFamily:base.defaultFontFamily,
            fontWeight:400,
            labels:{ 
                colors:colors.mutedColor,
                useSeriesColors:!1
            },
            markers:{
                width:10,
                height:10,
                strokeWidth:0,
                strokeColor:"#fff",
                fillColors:[extend.primaryColor,extend.primaryColorLighter],
                radius:6,
                customHTML:void 0,
                onClick:void 0,
                offsetX:0,
                offsetY:0
            },
            itemMargin:{
                horizontal:10,
                vertical:0
            },
            onItemClick:{
                toggleDataSeries:!0
            },
            onItemHover:{highlightDataSeries:!0}},
            fill:{
                opacity:1,
                colors:[
                    base.primaryColor,
                    extend.primaryColorLighter
                ]
            },
                grid:{
                    show:!0,
                    borderColor:colors.borderColor,
                    strokeDashArray:0,
                    position:"back",
                    xaxis:{
                        lines:{show:!1}
                    },
                    yaxis:{lines:{show:!0}},
                    row:{
                        colors:void 0,
                        opacity:.5
                    },
                    column:{
                        colors:void 0,
                        opacity:.5
                    },
                    padding:{
                        top:0,
                        right:0,
                        bottom:0,
                        left:0
                    }
                }
            },
            
            columnChartCtn=document.querySelector("#columnChart");
            columnChartCtn&&(columnChart=new ApexCharts(columnChartCtn,columnChartoptions)).render();

}