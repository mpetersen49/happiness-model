
var button = d3.select("#button");
button.on("click", predict);

function predict() {

    var m1 = 1.13599719;
    var m2 = 0.64589619;
    var m3 = 1.01271055;
    var m4 = 1.48127094;
    var m5 = 0.59244165;
    var m6 = 0.85822861;
    var b = 2.17506744;

    var gdpInput = d3.select('input[name="radioQuestionGDP"]:checked').property("value");
    var socialInput = d3.select('input[name="radioQuestionSupport"]:checked').property("value");
    var healthInput = d3.select('input[name="radioQuestionHealth"]:checked').property("value");
    var freedomInput = d3.select('input[name="radioQuestionFreedom"]:checked').property("value");
    var generosityInput = d3.select('input[name="radioQuestionGenerosity"]:checked').property("value");
    var govTrustInput = d3.select('input[name="radioQuestionGovtTrust"]:checked').property("value");

    var test = gdpQuart(gdpInput);

    console.log(test);

    var prediction = m1 * gdpInput + m2 * socialInput + m3 * healthInput + m4 * freedomInput + m5 * govTrustInput + m6 * generosityInput + b;

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

// gdp
// 0-25 0-0.605
// 25-50 0.605-0.982
// 50-75 0.982-1.2337
// 75-99 1.2337-1.870766

//social
// 0-25 0-0.8702
// 25-50 0.8702-1.125
// 50-75 1.125-1.328
// 75-99 1.328-1.644

//health
// 0-25 0-0.44006
// 25-50 0.44006-0.647239
// 50-75 0.647239-0.808
// 75-99 0.808-1.141

//freedom

// Quartiles: GDP: min: 0 25%: 0.605 50%: 0.982 75%: 1.2337 max: 1.870766

// Social Support min: 0 25%: .8702 50%: 1.125 75%: 1.328 max: 1.644

// Health min: 0 25%: .44006 50%: .647239 75%: .808 max: 1.141

// Freedom min: 0 25%: .31048 50%: .431 75%: .531 max: .724

// GovtTrust min: 0 25%: .054 50%: .091 75%: .156030 max: .55191

// Genorosity min: 0.0 25%: .13 50%: .202 75%: .279060 max: .838075
