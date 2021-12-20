function MyDrinkView(props){
  return(
    <div className="filterResults">
      <h1> My Drink Page </h1>
          <div>
            {props.drinks.map(function(drink){
              return(
                <div className="results" key={drink.drinks[0].idDrink}
                  onClick={event =>
                    {event.preventDefault();
                    props.drinkChoice(drink.drinks[0].idDrink);
                    window.location.hash="#details";
                    }}>
                  <button onClick={() => props.removeDrink(drink.drinks[0].idDrink)}> Remove </button>
                  <img src={drink.drinks[0].strDrinkThumb} height="100"></img>
                  <p className="resultsP" href="#details">
                    {drink.drinks[0].strDrink}
                  </p>
                </div>
              )
})}
</div></div>)}
export default MyDrinkView;