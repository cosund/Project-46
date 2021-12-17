import React from 'react';
import useModelProperty from './useModelProperty';
import usePromise from "./usePromise";
import promiseNoData from "../view/promiseNoData";
import DetailsView from "../view/detailsView";
import DrinkSource from '../view/drinkSource';

function DetailsPresenter(props){
  const currentDrink = useModelProperty(props.model, "currentDrink");
  const currentDrinkDetails = useModelProperty(props.model, "currentDrinkDetails");
  const currentDrinkError = useModelProperty(props.model, "currentDrinkError");
  console.log("currDrink: ",currentDrink);
  
  return(
      <React.Fragment>
          {promiseNoData(currentDrink, currentDrinkDetails, currentDrinkError) || 
          <DetailsView drinkDetails = {currentDrinkDetails}/>}
      </React.Fragment>
  )
}

export default DetailsPresenter;
