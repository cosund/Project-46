function MyDrinkView(props){
  console.log(props.drinks);
  return(
    <div>
      <h1> My Drink Page </h1>
      <table>
          <tbody>
            {props.drinks.map(function(drink){
              return(
              <tr key={drink.drinks[0].idDrink}>
                <td>
                  <button onClick={() => props.removeDrink(drink.drinks[0].idDrink)}> Remove </button>
                  <img src={drink.drinks[0].strDrinkThumb} height="100"></img>
                </td>
                <td>
                  <a href="#details" onClick={event =>
                    {event.preventDefault();
                      props.drinkChoice(drink.drinks[0].idDrink);
                      window.location.hash="#details";
                      }}>
                    {drink.drinks[0].strDrink}
                  </a>
                </td>
              </tr>
              )
})}
          <tr>
          </tr>
          </tbody>
        </table>
    </div>
  )
}
// drinks[0].idDrink

export default MyDrinkView;