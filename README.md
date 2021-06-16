# Final Project: The Happiness Model
Identifying happiness based on machine learning and the World Happiness Report. 

![Happiness](Resources/happiness.jpg)

Launch site: https://mpetersen49.github.io/happiness-model/index.html


This project uses the following technologies:
>Python<br>
>Pandas<br>
>Scikit-learn<br>
>MatPlotLib<br>
>HTML<br>
>Javascript<br>
>CSS<br>
>Bootstrap-UI<br>

Our methodology:
1. Gathered Data<br>
    1. Saved CSVs from Kaggle for years 2015-2020
    1. Pulled data into pandas dataframes and joined data into one output [/Resources/HappinessModelData.csv](/Resources/HappinessModelData.csv)
    1. Identified that 2020 data was causing outliers and was calculated differently than prior years, so data from 2020 was removed from final output
    

1. Identified Multiple Linear Regression Equation<br>
    1. Pulled [/Resources/HappinessModelData.csv](/Resources/HappinessModelData.csv) into pandas dataframe
    1. Identified statistics on data, specifically looking for the quartiles for the six features: GDP, Social Support, Health, Freedom, Government Trust and Generosity
    1. Split the data into testing and training sets
    1. Used scikit-learn to perform multiple linear regression with the inputs being the six features and the output being the happiness score 
        1. Fit the model
        1. Trained the model
        1. Tested the model<br><br>

    1. Identified the intercept and coefficients to generate the happiness model equation
    1. Created a Pearson Correlation to demonstrate the effects of each of the six features on the happiness score


1. Created survey using the equation<br>
    1. 

1. Predicted happiness<br>
    
