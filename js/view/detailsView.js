function DetailsView(props){
    return(
        <div className="detailView">
            <div className="drinkImage"><img src={props.model.drinks[0].strDrinkThumb} alt={props.model.drinks[0].strDrink} height="100"></img></div>
            <div className="drinkTitle"><p>{props.model.drinks[0].strDrink}</p></div>
            <div className="drinkCategory"><p>Category: {props.model.drinks[0].strCategory}</p></div>
            <div><p>Glass: {props.model.drinks[0].strGlass}</p></div>
            <div className="drinkIngredients">

            </div>
        </div>
    )
}
