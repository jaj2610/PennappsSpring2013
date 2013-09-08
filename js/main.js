$(function() {
	$( "#tabs" ).tabs();
	$( "#eventaccordion" ).accordion({
		collapsible: true
	});
	$( "#sponsoraccordion" ).accordion({
		collapsible: true
	});
	$( ".selector" ).accordion({ clearStyle: true, autoHeight: false });
});