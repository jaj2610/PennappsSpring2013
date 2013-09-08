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
minHeight: 300,
minWidth: 200,
resize: function() {
$( "#sponsoraccordion" ).accordion( "refresh" );
}
});
});
