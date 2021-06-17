# Final Project: The Happiness Model
Identifying happiness based on the World Happiness Report using machine learning. 

![Happiness](Resources/happiness.jpg)

Launch site: https://mpetersen49.github.io/happiness-model/index.html


## Technologies Used:
>Python<br>
>Pandas<br>
>Scikit-learn<br>
>MatPlotLib<br>
>HTML<br>
>Javascript<br>
>CSS<br>
>Bootstrap-UI<br>

## Our Methodology:
1. Gathered Data<br>
    1. Saved CSVs from Kaggle for years 2015-2020
    1. Pulled data into pandas dataframes and joined data into one output [/Resources/HappinessModelData.csv](/Resources/HappinessModelData.csv)
    1. Identified that 2020 data was causing outliers and was calculated differently than prior years, so data from 2020 was removed from final output<br><br>
    

1. Identified Multiple Linear Regression Equation<br>
    1. Pulled [/Resources/HappinessModelData.csv](/Resources/HappinessModelData.csv) into pandas dataframe
    1. Identified statistics on data, specifically looking for the quartiles for the six features: GDP, Social Support, Health, Freedom, Government Trust and Generosity
    1. Split the data into testing and training sets
    1. Used scikit-learn to perform multiple linear regression with the inputs being the six features and the output being the happiness score (fit, train then test the model!)
    1. Identified the intercept and coefficients to generate the happiness model equation
    1. Created a Pearson Correlation to demonstrate the effects of each of the six features on the happiness score<br><br>


1. Created survey using the equation<br>
    1. Identified six questions for each feature that is used to predict the happiness score. 
    1. Identified 4 possible answers for each question that correlates to the quartiles for each feature<br><br>    

1. Predict happiness!<br>
    1. Allow a website user to create their own country name, and complete the survey.
    1. Each survey answer is randomly assigned a number within the quartile of the correlated the feature.
    1. Once the user clicks submit all numbers are used in the happiness equation to predict the user inputted country's happiness score

