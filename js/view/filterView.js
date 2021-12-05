function FilterView(props){
    return(
        <div class="filterView">
            {props.filterResults.drinks.map(
                function(opt){
                    return(
                            <div class="results" key={opt.idDrink} onClick={()=> window.location.hash="#details"}>
                                <img src={opt.strDrinkThumb} alt={opt.strDrink} height="100"></img>
                                <p>{opt.strDrink}</p>
                            </div>
                        )
                    }
                )}
        </div>
    )
}