function SearchBarView(props){
  return(
    <div className="searchBar">
      <input placeholder="search..." type="text" onInput={ e=> props.onText(e.target.value) }></input>
      <button onClick={ () => props.onSearch() }>Search!</button>
    </div>
  )
}

function SearchResultsView(props){
  if(props.searchResults.drinks === null){
    return( 
      <div>
        <p>There was no results for that search :(</p>
        <img src="https://c.tenor.com/XQ0tXSAP8noAAAAC/no-data-upset.gif" alt="probleeeem"></img>
      </div>
    )
  }
  return (
    <div className="filterResults">
      {props.searchResults.drinks.map(
          function(opt){
            return(
              <div className="results" key={opt.idDrink} onClick={
                () => {props.drinkChosen(opt.idDrink); window.location.hash="#details";}}>
                <img src={opt.strDrinkThumb} alt={opt.strDrink} height="100"></img>
                <p>{opt.strDrink}</p>
              </div>
            )
          })
      }
    </div>
  )
}

export {SearchBarView, SearchResultsView};