import React from 'react';
import useModelProperty from './useModelProperty';
import promiseNoData from "../view/promiseNoData";
import DetailsView from "../view/detailsView";
import DrinkModel from '../drinkModel';


function DetailsPresenter(props){
  const currentDrink = useModelProperty(props.model, "currentDrink");
  const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");
  const currentDrinkError = useModelProperty(props.model, "currentDrinkError");
  console.log("currDrink: ",currentDrink);
  
  return(
      <React.Fragment>
          {promiseNoData(currentDrink, currentDrinkDetails, currentDrinkError) || 
          <DetailsView 
          drinkDetails = {currentDrinkDetails}
          drinkAdded = {drinks => DrinkModel.addToMenu(drinks)}
          />}
      </React.Fragment>
  )
}

export default DetailsPresenter;
