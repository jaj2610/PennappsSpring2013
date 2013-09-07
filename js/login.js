// Author: Jacob jones
// Email: jaj5333@psu.edu
// Date: 6.11.2013
// Please contact with any questions
//
// Maxwell-Boltzmann Plot
/*
$(function () {

    // constants
    var R = 8.3144621;
    var pi = Math.PI;

    // Options for any plots
    var options = {
            legend: {
                show: true,
                container: $('#legendHolder')
            },
            yaxis: { min: 0 },
            xaxis: { tickDecimals: 0 },
            grid: { hoverable: true }
        };

    var choiceContainer = $("#choices");

    choiceContainer.find("input").click(plotAccordingToChoices);

    function plotAccordingToChoices() {
        var data = [];

        // store input values
        var temp1 = document.getElementById('temp1').value;
        var temp2 = document.getElementById('temp2').value;
        var temp3 = document.getElementById('temp3').value;
        var temp4 = document.getElementById('temp4').value;
        var temp5 = document.getElementById('temp5').value;
        var mass1 = document.getElementById('mass1').value;
        var mass2 = document.getElementById('mass2').value;
        var mass3 = document.getElementById('mass3').value;
        var mass4 = document.getElementById('mass4').value;
        var mass5 = document.getElementById('mass5').value;

        // calculate and fill each set of data
        var d1 = [];
        for (var i = 0; i < 250; i += 0.1) {
            d1.push([i, maxwellBoltzmann(mass1,temp1, i)]);
        }
        var d2 = [];
        for (var i = 0; i < 250; i += 0.1) {
            d2.push([i, maxwellBoltzmann(mass2,temp2, i)]);
        }
        var d3 = [];
        for (var i = 0; i < 250; i += 0.1) {
            d3.push([i, maxwellBoltzmann(mass3,temp3, i)]);
        }
        var d4 = [];
        for (var i = 0; i < 250; i += 0.1) {
            d4.push([i, maxwellBoltzmann(mass4,temp4, i)]);
        }
        var d5 = [];
        for (var i = 0; i < 250; i += 0.1) {
            d5.push([i, maxwellBoltzmann(mass5,temp5, i)]);
        }

        // set datasets
        var datasets = {
        "1": {
            label: "1",
            data: d1
        },
        "2": {
            label: "2",
            data: d2
        },
        "3": {
            label: "3",
            data: d3
        },
        "4": {
            label: "4",
            data: d4
        },
        "5": {
            label: "5",
            data: d5
        }
    };

        // hard-code color indices to prevent them from shifting as
        // countries are turned on/off
        var i = 0;
        $.each(datasets, function(key, val) {
            val.color = i;
            ++i;
        });

        choiceContainer.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasets[key]) {
                data.push(datasets[key]);
            }
        });

        if (data.length > 0) {
            $.plot($("#graph"), data, options);
        }
        else
        {
            $.plot("#graph", [[null]], options);
        }

    }

    function maxwellBoltzmann(M, T, u) {
        // var u = Math.sqrt((8*R*T)/(pi*M));

        var f = 4*pi*Math.pow((M/(2*pi*R*T)), 3/2)*u*u*Math.exp((-1*M*u*u)/(2*R*T));

        return f;
    }

    function showTooltip(x, y, contents) {
            $("<div id='tooltip'>" + contents + "</div>").css({
                position: "absolute",
                display: "none",
                top: y + 5,
                left: x + 5,
                border: "1px solid #fdd",
                padding: "2px",
                "background-color": "#fee",
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#graph").bind("plothover", function (event, pos, item) {
            if ($(true).length > 0) {
                if (item) {
                    if (previousPoint != item.dataIndex) {

                        previousPoint = item.dataIndex;

                        $("#tooltip").remove();
                        var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                        showTooltip(item.pageX, item.pageY,
                            "IE-1: " + x + "\natomic radius: " + y);
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;            
                }
            }
        });

    plotAccordingToChoices();

});*/