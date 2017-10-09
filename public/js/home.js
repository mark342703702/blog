$(function(){
    var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [ 
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [28,48,40,19,96,27,100]
		}
	]
}

var ctx = $("#myChart").get(0).getContext("2d");
var myNewChart = new Chart(ctx).Bar(data);

});