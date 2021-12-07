import './style.css'
function FilterView(props){
    return(
        <div className="filterView">
            {props.filterResults.drinks.map(
                function(opt){
                    return(
                            <div className="results" key={opt.idDrink} onClick={()=> window.location.hash="#details"}>
                                <img src={opt.strDrinkThumb} alt={opt.strDrink} height="100"></img>
                                <p>{opt.strDrink}</p>
                            </div>
                        )
                    }
                )}
        </div>
    )
}

export default FilterView;
