import './src/js/view/style.css'

function MenuView(props){
    return(
        <div className="menubar">
            <div className="itemStart"><a>start</a></div>
            <div className="dropdown">
                <span onClick={() => window.location.hash="#filter"}>filter by category</span>
                <div className="dropdown-content">
                    <p onClick={() => props.categoryChosen("vodka")}>vodka</p>
                    <p onClick={() => props.categoryChosen("gin")}>gin</p>
                    <p onClick={() => props.categoryChosen("rum")}>rum</p>
                    <p onClick={() => props.categoryChosen("tequila")}>tequila</p>
                    <p onClick={() => props.categoryChosen("triple sec")}>triple sec</p>
                </div>
            </div>
            <div className="itemMyDrinks"><a href="myDrink" onClick={event =>{
              event.preventDefault();
              window.location.hash="#myDrink";
            }}>my drink page</a></div>
            <div className="itemInput"><input placeholder="search..." type="text"></input></div>
        </div>
    )
}

export default MenuView;
