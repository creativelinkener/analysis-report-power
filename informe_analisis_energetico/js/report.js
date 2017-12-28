var chart = c3.generate({
  bindto: '#chart_combination',
  data: {
        columns: [
            ['Penalización energía reactiva (€)', 30, 200, 100, 400, 150, 250],
            ['Consumo energía reactiva', 50, 150, 150, 150, 50, 150],
            ['hit', 1, 1, 1, 1, 0, 0],
            
        ],
  groups: [
            ['Penalización energía reactiva (€)', 'Consumo energía reactiva','hit'],

            ],
            type: 'bar',
            labels: true
        },
        
        legend: {
            hide: ['hit']

        },
        
    axis: {
      y: {
        padding: {
          top: 0,
          bottom: 100
        },
        label: {
          text: 'Consumo energía reactiva (kVArh)',
          position: 'outer-middle',
          
        }
      }
    },
    tooltip: {
        grouped: false
    },
        
    color: {
            pattern: ['#29c1ff','#cc0000']
        },
    grid: {
            x: {
                lines: [
                    {value: 1, text: 'P1'},
                    {value: 2, text: 'P2'},
                    {value: 3, text: 'P3'},
                    {value: 4, text: 'P4'},
                    {value: 5, text: 'P5'},
                    {value: 6, text: 'P6'},
                ]
            },
    y: {
        show: true
              // lines: [{value: 1}, {value: 2, class: 'gridcombine'}]
            }
        }
});




//Reactive power donut left //
var chart = c3.generate({
    bindto: '#chart_donut',
    data: {
    colors: {
        data1: '#000051',
        data2: '#eceff1',
        },

    columns: [
        ['data1', 30],
        ['data2', 120],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
        donut: {
            title: "10%"
        },
            legend: {
        show: false
    }
});





//Reactive power donut left 2
var chart = c3.generate({
    bindto: '#chart_donut_left1',
    data: {
              colors: {
        data1: '#000051',
        data2: '#eceff1',
    },
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "10%"
    },
    legend: {
      show: false
    }
});



//Reactive power donut left 2
var chart = c3.generate({
    bindto: '#chart_donut_left2',
    data: {
              colors: {
        data1: '#000051',
        data2: '#eceff1',
    },
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "10%"
    },
    legend: {
      show: false
    }
});






    //Reactive power donut right //
        var chart = c3.generate({
          bindto: '#chart_donut_right',
        data: {
                  colors: {
                data1: '#eceff1',
                data2: '#f2095e',
            },
            columns: [
                ['data1', 30],
                ['data2', 120],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "10%"
        },
        legend: {
            show: false
        }
    });





    // Chart_lastime 
    var chart = c3.generate({
      bindto: '#chart_lastime', 
        data: {
          x:'x',
            columns: [
                ['x', '01:00 am', '02:00 am', '03:00 am','04:00 am', '05:00 am', '06:00 am','07:00 am', '08:00 am', '09:00 am','10:00 am', '11:00 am', '12:00 pm','13:00 pm', '14:00 pm', '15:00 pm','16:00 pm', '17:00 pm', '18:00 pm','19:00 pm', '20:00 pm','21:00 pm', '22:00 pm', '23:00 pm','24:00 pm' ],
                ['yy', 0, 10, 25, 10, 5, 50, 100, 200, 300, 400, 500,20,5,35,25,12,68,89,5,96,300,22,11,36,12,26,23,56,89,456]
            ]
        },
        legend: {
            hide: ['yy']

        },
         axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
      },
       color: {
            pattern: ['#cc0000']
            
        },
        regions: [
            {start:0, end:154},
            {start:4, end:6},
            {start:7, end:8, class:'foo'},
            {start:9, end:10, class:'foo'}
        ]

    });



// chart area //

var chart = c3.generate({
    bindto: '#chart_area',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});


// chart area1 //

var chart = c3.generate({
    bindto: '#chart_area1',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});

// chart area2 //

var chart = c3.generate({
    bindto: '#chart_area2',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});


// chart area3 //

var chart = c3.generate({
    bindto: '#chart_area3',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});


// chart area4 //

var chart = c3.generate({
    bindto: '#chart_area4',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});


// chart area5 //

var chart = c3.generate({
    bindto: '#chart_area5',
    data: {
        columns: [
            ['Registrada', 30, 200, 100, 400, 150, 250],
            ['Contratada', 130, 100, 140, 200, 150, 50],
            ['Propuesta', 60, 80, 110, 150, 110, 20],
        ],
        type: 'spline'
    },

    legend: {
        show: true
    }   
});


$(document).ready(function(){
    $(".table_b1").mouseover(function(){
        $(".table_b1").addClass("animated infinite bounce");
    });
    $(".table_b1").mouseout(function(){
        $(".table_b1").removeClass("animated bounce");
    });


    $(".table_b2").mouseover(function(){
        $(".table_b2").addClass("animated infinite bounce");
    });
    $(".table_b2").mouseout(function(){
        $(".table_b2").removeClass("animated bounce");
    });

    $(".table_b3").mouseover(function(){
        $(".table_b3").addClass("animated infinite bounce");
    });
    $(".table_b3").mouseout(function(){
        $(".table_b3").removeClass("animated bounce");
    });


    $("#apr2").mouseover(function(){
        $("#apr2").addClass("animated infinite bounce");
    });
    $("#apr2").mouseout(function(){
        $("#apr2").removeClass("animated bounce");
    });

});




















