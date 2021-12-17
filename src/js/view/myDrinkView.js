function MyDrinkView(props){
  console.log(props.drinks);
  return(
    <div>
      <h1> My Drink Page </h1>
      <table>
          <tbody>
            {props.drinks.map((drink) =>
              <tr key={drink.id}>
                <td>
                  <button onClick={() => props.removeDrink(drink)}> X </button>
                </td>
                <td>
                  <a href="#details" onClick={event =>
                    {event.preventDefault();
                      props.drinkChoice(drink.id);
                      window.location.hash="#details";
                      }}>
                    {drink.title}
                  </a>
                </td>
              </tr>
            )}
          <tr>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default MyDrinkView;