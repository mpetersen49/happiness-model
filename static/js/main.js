
var button = d3.select("#button");
button.on("click", predict);

function predict() {

    var m1 = 1.13599719; // gdp
    var m2 = 0.64589619; // social
    var m3 = 1.01271055; // health
    var m4 = 1.48127094; // freedom
    var m5 = 0.59244165; // generosity
    var m6 = 0.85822861; // gov trust
    var b = 2.17506744;

    var gdpInput = d3.select('input[name="radioQuestionGDP"]:checked').property("value");
    var socialInput = d3.select('input[name="radioQuestionSupport"]:checked').property("value");
    var healthInput = d3.select('input[name="radioQuestionHealth"]:checked').property("value");
    var freedomInput = d3.select('input[name="radioQuestionFreedom"]:checked').property("value");
    var generosityInput = d3.select('input[name="radioQuestionGenerosity"]:checked').property("value");
    var govTrustInput = d3.select('input[name="radioQuestionGovtTrust"]:checked').property("value");
    var countryName = d3.select("#country-name").property("value");

    var gdp = gdpCalc(gdpInput);
    var social = socCalc(socialInput);
    var freedom = freeCalc(freedomInput);
    var health = healthCalc(healthInput);
    var generosity = genCalc(generosityInput);
    var trust = trustCalc(govTrustInput);

    var prediction = (m1 * gdp + m2 * social + m3 * health + m4 * freedom + m5 * trust + m6 * generosity + b).toFixed(2);

    var output = d3.select("#output");
    var jumbo1 = d3.select("#jumbo1");
    var para1 = d3.select("#para1");
    var classResult = happinessClass(prediction);

    jumbo1.text(`${countryName}'s Happiness score is...`);
    output.text(`${prediction}`);
    para1.text(`${classResult}`);

    // displayData(prediction);

    // jumbo1 country name
    // output place quartile info


};

function displayData(prediction) {
    d3.csv("../../Resources/HappinessModelData.csv").then(data => {
        console.log(data);

         

        

    });
};

displayData(1);

// quartiles for model parameters
var gdpMin = 0;
var gdp25 = 0.605;
var gdp50 = 0.982;
var gdp75 = 1.2337;
var gdpMax = 1.870766;

var socMin = 0;
var soc25 = 0.8702;
var soc50 = 1.125;
var soc75 = 1.328;
var socMax = 1.644;

var healthMin = 0;
var health25 = 0.44006;
var health50 = 0.6447239;
var health75 = 0.808;
var healthMax = 1.141;

var freeMin = 0
var free25 = 0.31048;
var free50 = 0.431;
var free75 = 0.537;
var freeMax = 0.724;

var trustMin = 0;
var trust25 = 0.054;
var trust50 = 0.091;
var trust75 = 0.156030;
var trustMax = 0.55191;

var genMin = 0;
var gen25 = 0.13;
var gen50 = 0.202;
var gen75 = 0.279060;
var genMax = 0.838075;

// random number functions to translate question answers to model inputs
function gdpCalc(gdp) {
    switch(gdp) {
        case "2":
            // 25-50
            return Math.random() * (gdp50 - gdp25) + gdp25;
        case "1":
            // 0-25
            return Math.random() * (gdp25 - gdpMin) + gdpMin;
        case "4":
            // 75-99
            return Math.random() * (gdpMax - gdp75) + gdp75;
        case "3":
            // 50-75
            return Math.random() * (gdp75 - gdp50) + gdp50;
    }
}

function socCalc(social) {
    switch(social) {
        case "1":
            // 0-25
            return Math.random() * (soc25 - socMin) + socMin;
        case "2":
            // 25-50
            return Math.random() * (soc50 - soc25) + soc25;
        case "4":
            // 75-99
            return Math.random() * (socMax - soc75) + soc75;
        case "3":
            // 50-75
            return Math.random() * (soc75 - soc50) + soc50;
    }
}

function healthCalc(health) {
    switch(health) {
        case "2":
            // 25-50
            return Math.random() * (health50 - health25) + health25;
        case "3":
            // 50-75
            return Math.random() * (health75 - health50) + health50;
        case "4":
            // 75-99
            return Math.random() * (healthMax - health75) + health75;
        case "1":
            // 0-25
            return Math.random() * (health25 - healthMin) + healthMin;
    }
}

function freeCalc(freedom) {
    switch(freedom) {
        case "1":
            // 0-25
            return Math.random() * (free25 - freeMin) + freeMin;
        case "2":
            // 25-50
            return Math.random() * (free50 - free25) + free25;
        case "4":
            // 75-99
            return Math.random() * (freeMax - free75) + free75;
        case "3":
            // 50-75
            return Math.random() * (free75 - free50) + free50;
    }
}

function genCalc(generosity) {
    switch(generosity) {
        case "4":
            // 75-99
            return Math.random() * (genMax - gen75) + gen75;
        case "1":
            // 0-25
            return Math.random() * (gen25 - genMin) + genMin;
        case "3":
            // 50-75
            return Math.random() * (gen75 - gen50) + gen50;
        case "2":
            // 25-50
            return Math.random() * (gen50 - gen25) + gen25;
    }
}

function trustCalc(trust) {
    switch(trust) {
        case "3":
            // 50-75
            return Math.random() * (trust75 - trust50) + trust50;
        case "4":
            // 75-99
            return Math.random() * (trustMax - trust75) + trust75;
        case "1":
            // 0-25
            return Math.random() * (trust25 - trustMin) + trustMin;
        case "2":
            // 25-50
            return Math.random() * (trust50 - trust25) + trust25;
    }
}

function happinessClass(prediction) {
    var happy25 = 4.509;
    var happy50 = 5.321;
    var happy75 = 6.182;
    
    if (prediction > happy75) {
        return "Score 6.183+ : Your country's happiness ranks in the 75-99% quartile. Other countries that have ranked in this quartile between 2015-2019 are the United States, Germany, Norway, Sweden and Finland."
    }
    else if (prediction > happy50) {
        return "Score 5.322 - 6.182: Your country's happiness ranks in the 50-75% quartile. Other countries that have ranked in this quartile between 2015-2019 are Argentina, Croatia, Japan, Russia and Malaysia."
    }
    else if (prediction > happy25) {
        return "Score 4.510 - 5.321: Your country's happiness ranks in the 25-50% quartile. Other countries that have ranked in this quartile between 2015-2019 are Portugal, Dominican Republic, Greece and Vietnam."
    }
    else {
        return "Score 0 - 4.509: Your country's happiness ranks in the 0-25% quartile. Other countries that have ranked in this quartile between 2015-2019 are Sri Lanka, Egypt, Ukraine and Haiti."
    }
};

// min starting with 2.693
// 25% 4.509
// 50% 5.321
// 75% 6.182
// max 7.769

//displayData(1); //remove this later

// Quartiles: GDP: min: 0 25%: 0.605 50%: 0.982 75%: 1.2337 max: 1.870766

// Social Support min: 0 25%: .8702 50%: 1.125 75%: 1.328 max: 1.644

// Health min: 0 25%: .44006 50%: .647239 75%: .808 max: 1.141

// Freedom min: 0 25%: .31048 50%: .431 75%: .531 max: .724

// GovtTrust min: 0 25%: .054 50%: .091 75%: .156030 max: .55191

// Genorosity min: 0.0 25%: .13 50%: .202 75%: .279060 max: .838075
