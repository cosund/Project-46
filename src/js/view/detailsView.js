import React from 'react';

function DetailsView(props){
    return(
        <div className="detailsView">
            <h2>{props.drinkDetails.drinks[0].strDrink}</h2>
            <img src={props.drinkDetails.drinks[0].strDrinkThumb} className="detailImage" 
                height="400"alt={props.drinkDetails.drinks[0].strDrink}>
            </img>
            <table>
                <thead>
                    ingredients
                </thead>
                <tbody>
                    {//[...props.drinkDetails.drinks[0].filter(checkIfIngredient).map( =>
                    }

                    
                </tbody>
            </table>
        </div>
    )
}

export default DetailsView;