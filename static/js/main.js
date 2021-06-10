
var button = d3.select("#button");
button.on("click", predict);

function predict() {

    var m1 = 1;
    var m2 = 2;
    var m3 = 3;
    var m4 = 4;
    var m5 = 5;
    var m6 = 6;
    var b = 7;

    var gdpInput = d3.select("#gdp-input").property("value");
    var socialInput = d3.select("#social-input").property("value");
    var healthInput = d3.select("#health-input").property("value");
    var freedomInput = d3.select("#freedom-input").property("value");
    var govTrustInput = d3.select("#govTrust-input").property("value");
    var generosityInput = d3.select("#generosity-input").property("value");

    var prediction = m1 * gdpInput + m2 * socialInput + m3 * healthInput + m4 * freedomInput + m5 * govTrustInput + m6 * generosityInput + b;

    var output = d3.select("#output");

    output.text(`Your happiness score is ${prediction}!`);

};