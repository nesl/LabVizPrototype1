$( document ).ready(function() {
  $('#new-feed').click(function(event) {
    var key = $('#key').val();
    var feed = $('#feed').val();
    if (key == '' || feed == '') {
      $('#new-feed-alert').show();
    }
    else {
    
    return false;
  });
});






function addNewGraph(key, feed, element) {

	$.getJSON('https://api.xively.com/v2/feeds/118083/datastreams/Door.json?start=2013-06-2T00:00:00Z&end=2013-06-28T23:00:00Z&interval=3600?key=IHFO5YRkTEcVCRbVc4yEwDDDgoBjolkNaJBjgvEopqo5x9IC', function(data) {

        var xively_datapoints = data.datapoints;
        var chartdata = [];
        
        for (i = 0; i < xively_datapoints.length; i++) {
            chartdata.push([
                Date.parse(xively_datapoints[i].at),
                parseFloat(xively_datapoints[i].value)
            ]);
        }
        
		// Create the chart
		$('#container').highcharts('StockChart', {
			

			rangeSelector : {
				selected : 1
			},

			 exporting: {
                  
                    chartOptions:{		               
	                   yAxis: {
		                    labels: {
		                        style: {
		                            color: '#000',
                                    fontSize: '14px'
		                        }
		                    }
	                    }
	                   
		            }
             },
			
			series : [{
				name : 'NESL Door Sensor',
				data : chartdata,
				tooltip: {
					valueDecimals: 2
				}
			}]
		});
	});

});