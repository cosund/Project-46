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
                    <tr><td>ingredients:</td></tr>
                </thead>
                <tbody>
                    {//insert props.drinkDetails.drinks[0].strMeasureX + props.drinkDetails.drinks[0].strIngredientX här 
                        // utan att ta med alla 16, som söger null...
                    }

                    
                </tbody>
            </table>
            <table><tbody>
                <tr><td>instructions:</td></tr>
                <tr>
                    <td>{props.drinkDetails.drinks[0].strInstructions}</td>
                </tr></tbody></table>
        </div>
    )
}

export default DetailsView;