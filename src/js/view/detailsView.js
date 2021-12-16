import React from 'react';
import DrinkSource from '../view/drinkSource.js';
import useModelProperty from './useModelProperty.js';
import usePromise from './usePromise.js';
import promiseNoData from '../view/promiseNoData.js';

function DetailsView(props){
    return(
        console.log("hej" {props.strDrink})
        <div className="detailView">
          {console.log(props.strDrink);}
          {console.log(props.drinkDetails.Drink[0].strDrink);}
          <h2>{props.strDrink}</h2>

          <div className="drinkImage">
            <img src={props.drinkDetails.Drink[0].strDrinkThumb} alt={props.strDrink} height="100"></img>
          </div>
          <div className="drinkTitle">
            <p>{props.strDrink}</p>
          </div>
          <div className="drinkIngredients">
            // Ej färdig. Behöver återgärds i presenter.
            {[...props.DrinkIngredients].sort(compareIngredients).map(ingredient => (
            <li key={ingredient.id}> {ingredient.original}</li>
            ))}
          </div>
          <div><p>Glass: {props.model.drinks[0].strGlass}</p></div>
          <div className="drinkIngredients">

            </div>
        </div>
        <div className="detailsView">

    )
}

export default DetailsView;
