- original lib
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

- harvest data from here
https://finance.yahoo.com/quote/FDX/history?period1=1543644000&period2=1551420000&interval=1d&filter=history&frequency=1d

- in csv file, no spacing in first row
AMZN_x,AMZN_y

- CSV file must be in next format
FDX_x,FDX_y
2019-01-02,158.520004

will not work !!!
1/2/2019,158.520004
so there's no need to edit in exel, parser reads only first two rows
but if you want to get more speed change cells format to 2019-01-02,158.520004

- the ONLY working names for divs are

<div id="container">
     <div id="myDiv"></div>
</div>






