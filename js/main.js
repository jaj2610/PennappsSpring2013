var myClubs = new Array();
myClubs[0] = "AWC";
myClubs[1] = "ACM";

var myEvents = new Array();
myEvents[0] = "Grace Hopper";
myEvents[1] = "CodePSU";

var mySponsors = new Array();
mySponsors[0] = "NSA";
mySponsors[1] = "CSE Department";

var ACMSponsors = newArray();
ACMSponsors[0] = "We're Broke";

$(function() {
	$( "#tabs" ).tabs();
	$( "#accordion" ).accordion({
		collapsible: true
	});
});