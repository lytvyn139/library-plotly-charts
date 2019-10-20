Plotly.d3.csv("/resources/2011_us_ag_exports.csv", function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(rows, 'code'),
        z: unpack(rows, 'total exports'), //data row
        text: unpack(rows, 'state'),
        /* zmin: 0, // not changing shit
        zmax: 17000,
         */
        colorscale: [
            //6 shades of black 
            [0, 'rgb(125,125,125)'],
            [0.2, 'rgb(100,100,100)'],
            [0.4, 'rgb(75,75,75)'],
            [0.6, 'rgb(50,50,50)'],
            [0.8, 'rgb(25,25,25)'],
            [1, 'rgb(0,0,0)']
        ],

        marker: {
            line: {
                color: 'rgb(0,250,250)', //state line color
                width: 1 //thickness
            }
        }
    }];


    var layout = {
        title: 'total fruits exports',
        geo: {
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(52,224, 255)'
        }
    };


    Plotly.plot(myDiv, data, layout, {
        showLink: false
    });
})