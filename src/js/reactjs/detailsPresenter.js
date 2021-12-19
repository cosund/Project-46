import React from 'react';
import useModelProperty from './useModelProperty';
import promiseNoData from "../view/promiseNoData";
import DetailsView from "../view/detailsView";
import myModel from '../../index.js';


function DetailsPresenter(props){
  const currentDrink = useModelProperty(props.model, "currentDrink");
  const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");
  const currentDrinkError = useModelProperty(props.model, "currentDrinkError");
  
  return(
      <React.Fragment>
          {promiseNoData(currentDrink, currentDrinkDetails, currentDrinkError) || 
          <DetailsView 
          isDrinkInMenu = {props.model.drinks.find(d => d.drinks[0].idDrink === currentDrink)}
          drinkDetails = {currentDrinkDetails}
          drinkAdded = {drinks => myModel.addToMenu(drinks)}
          />}
      </React.Fragment>
  )
}

export default DetailsPresenter;
