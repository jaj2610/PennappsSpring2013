$(function() {
	$( "#tabs" ).tabs();
	$( "#accordion" ).accordion({
		collapsible: true
	});
});

function addAccordionElement(i) {
	var eventHeader=document.createElement("h3");
	var eventName=document.createTextNode("<%= events[" + i + "].name %>");
	eventHeader.appendChild(eventName);

	var accordionDiv=document.createElement("div");

	var eventPara=document.createElement("p");
	var eventInfo=document.createTextNode("Date: <%= events[" + i + "].date %>");
	eventPara.appendChild(eventInfo);
	accordionDiv.appendChild(eventPara);

	var accordion=document.getElementById("accordion");
	accordion.appendChild(eventHeader);
	accordion.appendChild(accordionDiv);
}