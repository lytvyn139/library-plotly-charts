Plotly.d3.csv("/resources/AMZN_year.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }
    var frames = []
    var x = unpack(rows, 'AMZN_x')
    var y = unpack(rows, 'AMZN_y')
    var n = 100;
    for (var i = 0; i < n; i++) {
        frames[i] = {
            data: [{
                x: [],
                y: []
            }]
        }
        frames[i].data[0].x = x.slice(0, i + 1);
        frames[i].data[0].y = y.slice(0, i + 1);
    }

    Plotly.newPlot('myDiv', [{
        x: frames[1].data[0].x,
        y: frames[1].data[0].y,
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'lines',
        line: {
            color: 'gold'
        }
    }], {
        xaxis: {
            type: 'date',
            range: [
                frames[99].data[0].x[0],
                frames[99].data[0].x[99]
            ],
            showgrid: false,
            showline: false,
            showticklabels: false,
            zeroline: false
        },
        yaxis: {
            range: [
                0,
                2000, //stock price
            ],
            showgrid: false,
            showline: false, //play here
            showticklabels: false,
            zeroline: false
        },
        annotations: [{
            showarrow: false,
            text: "<b>AMZN</b>",
            font: {
                family: 'Gravitas One',
                size: 48,
                color: 'black'
            },
            xref: 'paper',
            yref: 'paper',
            x: 0.5,
            y: 0.5
        }, {
            showarrow: false,
            text: "hi there",
            font: {
                family: 'Gravitas One',
                size: 26,
                color: 'black'
            },
            xref: 'paper',
            yref: 'paper',
            x: 0.5,
            y: 0.35
        }]
    }).then(function () {
        Plotly.animate('myDiv', frames, {
            transition: {
                duration: 0
            },
            frame: {
                duration: 5, //speed
                redraw: false
            }
        });
    });

})