import './style.css';
import './drinkSource.js';

let alphabet = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','Y','Z'];
let mainIng = new Array(DrinkSource.listCategories("i").then(data => data));
function FilterOptions(props){
    return(
        <div className="filterOptions">
            <div className="ingridientSort">
                <p className="filterTopic">Sort by Main Ingridient:</p>
                <p onClick={() => props.categoryChosen("vodka")}>- Vodka</p>
                <p onClick={() => props.categoryChosen("gin")}>- Gin</p>
                <p onClick={() => props.categoryChosen("rum")}>- Rum</p>
                <p onClick={() => props.categoryChosen("tequila")}>- Tequila</p>
                <p onClick={() => props.categoryChosen("triple sec")}>- Triple sec</p>
            </div>
            <div className="colorSort">
                <p className="filterTopic">Sort by Color:</p>
                <p onClick={() => props.categoryChosen("gin")}>- Blue</p>
                <p onClick={() => props.categoryChosen("rum")}>- Red</p>
                <p onClick={() => props.categoryChosen("tequila")}>- Green</p>
                <p onClick={() => props.categoryChosen("triple sec")}>- Yellow</p>
            </div>
            <div className="categorySort">
                <p className="filterTopic">Sort by Category:</p>
                <p onClick={() => props.categoryChosen("gin")}>- Blue</p>
                <p onClick={() => props.categoryChosen("rum")}>- Red</p>
                <p onClick={() => props.categoryChosen("tequila")}>- Green</p>
                <p onClick={() => props.categoryChosen("triple sec")}>- Yellow</p>
            </div>
            <div className="abcSort">
                <p className="filterTopic">Sort by First Letter:</p>
                {alphabet.map(
                    function(opt) {
                        return(
                            <p key={opt} onClick={() => props.characterChosen(opt)}>- {opt}</p>
                        )
                    }
                )}
            </div>
        </div>
    )
}

function FilterResults(props){
    return(
        <div className="filterResults">
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
