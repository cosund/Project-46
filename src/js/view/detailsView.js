import React from 'react';
import DrinkSource from '../view/drinkSource.js';
import useModelProperty from './useModelProperty.js';
import usePromise from './usePromise.js';
import promiseNoData from '../view/promiseNoData.js';

function DetailsView(props){
    return(
        <div className="detailView">
            <div className="drinkImage"><p>drinkBild</p><img src={props.model.drinks[0].strDrinkThumb} alt={props.model.drinks[0].strDrink} height="100"></img></div>
            <div className="drinkTitle"><p>{props.model.drinks[0].strDrink}</p></div>
            <div className="drinkCategory"><p>Category: {props.model.drinks[0].strCategory}</p></div>
            <div><p>Glass: {props.model.drinks[0].strGlass}</p></div>
            <div className="drinkIngredients">

            </div>
        </div>
    )
}
