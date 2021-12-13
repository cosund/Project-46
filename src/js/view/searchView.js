function eventPrinter(evt){ console.log(evt);}

function SearchResultsView(props){
  return (<div className="flexParent">
      {
        props.searchResults.drinks && props.searchResults.drinks.map((searchResults) =>(
            <span className="SearchResults" key={searchResults.id} onClick={
               () => {props.drinkChosen(searchResults.id);
               window.location.hash="#details";}}>
              <img src={searchResults.strDrinkThumb} alt={searchResults.strDrink} height="100"></img>
              <p className="SearchResults">{searchResults.strDrink}</p>
            </span>
          ))
      }
  </div>
);
}

export default SearchResultsView;