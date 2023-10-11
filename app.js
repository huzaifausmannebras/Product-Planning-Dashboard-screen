Highcharts.chart('Availability', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Availability',
        align:'left',
        style:{fontSize:"1rem"}
    },
    plotOptions: {
        pie: {
            borderWidth: 0,
            innerSize: '70%', // Adjust the inner size to create the donut shape
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
                enabled: true,
                distance: '-100%',
                format: '{y}%',
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    textOutline: '0px contrast'
                },
                verticalAlign: 'middle',
                x: 0, // Adjust the x position to center the label horizontally
                y: 0 // Adjust the y position to center the label vertically
            }
        }
    },
    series: [{
        name: 'Availability',
        data: [{
            name: 'Progress',
            y: 76,
            color: '#6fc267'
        }, {
            name: 'Remaining',
            y: 24,
            color: '#DDDDDD',
            dataLabels: {
                enabled: false
            }
        }]
    }],
    tooltip: {
        enabled: true,
        valueSuffix:'%'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    }
});
Highcharts.chart('Performance', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Performance',
        align:'left',
        style:{fontSize:"1rem"}
    },
    plotOptions: {
        pie: {
            borderWidth: 0,
            innerSize: '70%', // Adjust the inner size to create the donut shape
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
                enabled: true,
                distance: '-100%',
                format: '{y}%',
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    textOutline: '0px contrast'
                },
                verticalAlign: 'middle',
                x: 0, // Adjust the x position to center the label horizontally
                y: 0 // Adjust the y position to center the label vertically
            }
        }
    },
    series: [{
        name: 'Performance',
        data: [{
            name: 'Progress',
            y: 92.5,
            color: '#ae1d4f'
        }, {
            name: 'Remaining',
            y: 7.5,
            color: '#DDDDDD',
            dataLabels: {
                enabled: false
            }
        }]
    }],
    tooltip: {
        enabled: true,
        valueSuffix:'%'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    }
});
Highcharts.chart('Quality', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Quality',
        align:'left',
        style:{fontSize:"1rem"}
    },
    plotOptions: {
        pie: {
            borderWidth: 0,
            innerSize: '70%', // Adjust the inner size to create the donut shape
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
                enabled: true,
                distance: '-100%',
                format: '{y}%',
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    textOutline: '0px contrast'
                },
                verticalAlign: 'middle',
                x: 0, // Adjust the x position to center the label horizontally
                y: 0 // Adjust the y position to center the label vertically
            }
        }
    },
    series: [{
        name: 'Quality',
        data: [{
            name: 'Progress',
            y: 97.6,
            color: '#c0a933'
        }, {
            name: 'Remaining',
            y: 2.4,
            color: '#DDDDDD',
            dataLabels: {
                enabled: false
            }
        }]
    }],
    tooltip: {
        enabled: true,
        valueSuffix:'%'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    }
});
Highcharts.chart('Equipment_effectiveness', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Overall Equipment Effectiveness (OEE)',
        align:'left',
        style:{fontSize:"1rem"}
    },
    plotOptions: {
        pie: {
            borderWidth: 0,
            innerSize: '70%', // Adjust the inner size to create the donut shape
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
                enabled: true,
                distance: '-100%',
                format: '{y}%',
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    textOutline: '0px contrast'
                },
                verticalAlign: 'middle',
                x: 0, // Adjust the x position to center the label horizontally
                y: 0 // Adjust the y position to center the label vertically
            }
        }
    },
    series: [{
        name: 'OEE',
        data: [{
            name: 'Progress',
            y: 87.16,
            color: '#df772c'
        }, {
            name: 'Remaining',
            y: 24,
            color: '#DDDDDD',
            dataLabels: {
                enabled: false
            }
        }]
    }],
    tooltip: {
        enabled: true,
        valueSuffix:'%'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    }
});

Highcharts.chart('Defect_analysis', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Defect Analysis & Stockout Rate by Category',
        align: 'left'
    },
    xAxis: {
        categories: ['Confections', 'Beverages', 'Condiments', 'Seafoods', 'Dairy Products', 'Grains Cereals', 'Produce'],
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Inventory'
        }
    }, {
        title: {
            text: 'Stock Out Rate'
        },
        opposite: true
    }],
    credits: {
        enabled: false
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
    },
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Gross Margin',
        type: 'column',
        yAxis: 1,
        color: '#df772c',
        data: [171.190, 158.8, 221.7, 234.1, 270.0, 200.4, 202.6],
        tooltip: {
            valueSuffix: '%',
        },

    }, {
        marker: {
            lineWidth: 3,
            lineColor: 'white',
            fillColor: 'brown'
        },
        name: 'Gross Profit Margin',
        type: 'spline',
        label: {
            enabled: true
        },
        color: 'brown',
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}$'
        },
        data: [121.160, 128.8, 221.7, 204.1, 229.0, 180.4, 200.6],
        tooltip: {
            valueSuffix: '%',

        }
    }]

});


Highcharts.chart('Leads_vs_converted_leads', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Cost Analysis Over Time',
        align: 'left',
        style: {
            fontSize: '1rem'
        }
    },
    subtitle: {
        text: 'Last 06 Months',
        align: 'left'
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
    },
    xAxis: {
        categories: ['April 2023', 'May 2023', 'June 2023', 'July 2023', 'August 2023']

    },
    yAxis: {
        title: {
            text: '',
        }

    },
    tooltip: {
        shared: true,
    },

    series: [{
        marker: {
            lineWidth: 3,
            lineColor: '#835382',
            fillColor: 'white'
        },
        name: 'Production Cost',
        data: [77.44, 80.89, 93.40, 86.03, 80.52, 90.89, 73.40]
        , color: '#efbb96'
    },
    {
        marker: {
            lineWidth: 3,
            lineColor: '#ca8bcd',
            fillColor: 'white'
        },
        name: 'Manufacturing Cost',
        color: '#d67c6a',
        data: [43.49, 60.08, 51.88, 62.94, 50, 60.08, 45.88]
    }, {
        marker: {
            lineWidth: 3,
            lineColor: 'white',
            fillColor: '#c24c5d'
        },
        name: 'Labor Cost',
        color: '#c24c5d',
        data: [20.49, 13.08, 15.88, 18.94, 16, 13.08, 15.88]
    }
    ]
});





