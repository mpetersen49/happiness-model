
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

    var gdpInput = d3.select('input[name="question-gdp"]:checked').property("value");
    var socialInput = d3.select('input[name="question-social"]:checked').property("value");
    var healthInput = d3.select('input[name="question-health"]:checked').property("value");
    var freedomInput = d3.select('input[name="question-freedom"]:checked').property("value");
    var generosityInput = d3.select('input[name="question-generosity"]:checked').property("value");
    var govTrustInput = d3.select('input[name="question-trust"]:checked').property("value");

    var test = gdpQuart(gdpInput);

    console.log(test);

    var prediction = m1 * test + m2 * socialInput + m3 * healthInput + m4 * freedomInput + m5 * govTrustInput + m6 * generosityInput + b;

    var output = d3.select("#output");

    output.text(`Your happiness score is ${prediction}!`);

    displayData(prediction);

};

function displayData(prediction) {
    d3.csv("../../Resources/HappinessModelData.csv").then(data => {
        // console.log(data);

        

        // add plot showing ranking and where their country lies

    });
};

function gdpQuart(gdp) {
    switch(gdp) {
        case "1":
            test = 4;
            break;
        case "2":
            console.log("0-25");
            break;
        case "3":
            console.log("75-99");
            break;
        case "4":
            console.log("50-75");
            break;
    }
}
//displayData(1); //remove this later