import React from 'react';

function DetailsView(props){
    let ingredientsArray = [];
    for(let i=1; i<16; i++){
        if(props.drinkDetails.drinks[0]['strIngredient' + i] === null)
            break;
        else{
            const ingredient = {ing: props.drinkDetails.drinks[0]['strIngredient' + i], 
                            measure: props.drinkDetails.drinks[0]['strMeasure' + i]}
            ingredientsArray.push(ingredient)
        }
    }
    return(
        <div className="detailsView">
            <h2>{props.drinkDetails.drinks[0].strDrink}</h2>
            <img className="" src={props.drinkDetails.drinks[0].strDrinkThumb} className="detailImage" 
                height="400"alt={props.drinkDetails.drinks[0].strDrink}>
            </img>
            <button disabled={props.isDrinkInMenu}
    onClick={ (event)=> {props.drinkAdded(props.drinkDetails)} }> Add to menu! </button>
    <button onClick={e => window.location.hash="#search"}> Back </button>
            <table>
                <thead>
                    <tr><td>Ingredients:</td></tr>
                </thead>
                <tbody>
                    {ingredientsArray.map(
                        function(opt) {
                            return(
                                <tr key={opt.ing}><td key={opt.ing}>- {opt.ing} ({opt.measure})</td></tr>
                        )
                    })
                }   
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr><td>Instructions:</td></tr>
                    <tr>
                        <td>{props.drinkDetails.drinks[0].strInstructions}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsView;