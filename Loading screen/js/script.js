Plotly.d3.csv("/resources/loading2.csv", function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }
    var frames = []
    var x = unpack(rows, 'loading_x')
    var y = unpack(rows, 'loading_y')
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
            color: 'purple'
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
            zeroline: false,
        },
        yaxis: {
            range: [
                0,
                200,
            ],
            showgrid: false,
            showline: false,
            showticklabels: false,
            zeroline: false
        },
        annotations: [{
            showarrow: false,
            text: "<b>please wait loading...</b>",
            font: {
                family: 'Gravitas One',
                size: 100,
                color: 'white'
            },
            xref: 'paper',
            yref: 'paper',
            x: 0.5,
            y: 0.5
        }]
    }).then(function () {
        Plotly.animate('myDiv', frames, {
            transition: {
                duration: 0
            },
            frame: {
                duration: 100, //speed
                redraw: false
            }
        });
    });

})