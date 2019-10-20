var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    name: 'dots'
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    name: 'simple lines'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    name: 'dots & lines'
};


var trace4 = {
    x: [1, 2, 3, 4],
    y: [16, 2, 10, 12],
    mode: 'lines+markers',
    name: 'dots & lines',
};
var trace5 = {
    x: [1, 2, 3, 4],
    y: [10, 2, 10, 18],
    mode: 'lines+markers',
    name: 'dots & lines',
};


var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {
    title: 'some big title is coming'
};

Plotly.newPlot('myDiv', data, layout);
