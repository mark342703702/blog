$(function(){
	$('#weekChart').after('<canvas id="myChart" width="800" height="400"></canvas>');
    var data = {
	labels : ["7-25","7-26","7-27","7-28","7-29","7-30","今天"],
	datasets : [ 
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [12328,14282,12340,12319,11236,12327,21123]
		}
	]
}

var ctx = $("#myChart").get(0).getContext("2d");
var myNewChart = new Chart(ctx).Line(data);

});