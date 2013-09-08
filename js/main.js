$(function() {
	$( "#tabs" ).tabs();
	$( "#eventaccordion" ).accordion({
		collapsible: true,
		heightStyle: "fill"
	});
});

$(function() {
	$( "#sponsoraccordion" ).accordion({
	collapsible: true,
	heightStyle: "fill"
	});
});

$(function() {
$( "#accordion-resizer" ).resizable({
resize: function() {
$( "#sponsoraccordion" ).accordion( "refresh" );
}
});
});
