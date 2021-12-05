function DetailsView(props){
    return(
        <div class="detailView">
            <div class="drinkImage"><img src={props.model.drinks[0].strDrinkThumb} alt={props.model.drinks[0].strDrink} height="100"></img></div>
            <div class="drinkTitle"><p>{props.model.drinks[0].strDrink}</p></div>
            <div class="drinkCategory"><p>Category: {props.model.drinks[0].strCategory}</p></div>
            <div><p>Glass: {props.model.drinks[0].strGlass}</p></div>
            <div class="drinkIngredients">
                
            </div>
        </div>
    )
}