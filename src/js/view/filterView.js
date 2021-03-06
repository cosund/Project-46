import './style.css';
import DrinkSource from './drinkSource';
import DrinkModel from '../drinkModel';

let alphabet = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','Y','Z'];
let mainIng = new Array(DrinkSource.listCategories("i").then(data => data));
function FilterOptions(props){
    return(
        <div className="filterOptions">
            <div className="ingrediensort dropdown">
            <button className="filterTopic">Sort by main Ingredient</button>
            <div className="dropdown-content">
            <a onClick={() => props.categoryChosen("vodka")}>Vodka</a>
            <a onClick={() => props.categoryChosen("gin")}>Gin</a>
            <a onClick={() => props.categoryChosen("rum")}>Rum</a>
            <a onClick={() => props.categoryChosen("tequila")}>Tequila</a>
            <a onClick={() => props.categoryChosen("triple sec")}>Triple sec</a>
            </div>
            </div>
             
            <div className="colorSort dropdown">
                <a className="filterTopic">Sort by Color:</a>
                <div className="dropdown-content">
                <a onClick={() => props.categoryChosen("gin")}>- Blue</a>
                <a onClick={() => props.categoryChosen("rum")}>- Red</a>
                <a onClick={() => props.categoryChosen("tequila")}>- Green</a>
                <a onClick={() => props.categoryChosen("triple sec")}>- Yellow</a>
                </div>
            </div>
            <div className="categorySort dropdown">
                <a className="filterTopic">Sort by Category:</a>
                <div className="dropdown-content">
                <a onClick={() => props.categoryChosen("gin")}>- Blue</a>
                <a onClick={() => props.categoryChosen("rum")}>- Red</a>
                <a onClick={() => props.categoryChosen("tequila")}>- Green</a>
                <a onClick={() => props.categoryChosen("triple sec")}>- Yellow</a>
                </div>
            </div>
            <div className="abcSort dropdown">
                < a className="filterTopic">Sort by First Letter:</a>
                <div className="dropdown-content">
                {alphabet.map(
                    function(opt) {
                        return(
                            <a key={opt} onClick={() => props.characterChosen(opt)}>- {opt}</a>
                        )
                    }
                )}
                </div>
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
                        <div className="results" key={opt.idDrink} onClick={
                            () => {props.drinkChosen(opt.idDrink); window.location.hash="#details";}}>
                            <img src={opt.strDrinkThumb} alt={opt.strDrink} height="100"></img>
                            <p className="resultsP">{opt.strDrink}</p>
                        </div>
                        )
                    }
                )}
        </div>
    )
}

export {FilterOptions, FilterResults};
