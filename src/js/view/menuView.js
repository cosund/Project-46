import './style.css'

function MenuView(props){
    return(
        <div className="menubar">
            <div className="itemStart" ><a href="start"  onClick={event =>{ event.preventDefault(); window.location.hash="#filter";}}>
                start</a>
            </div>
            <div className="itemFilter"><a href="filter" onClick={event =>{ event.preventDefault(); window.location.hash="#filter";}}>
                filter by category</a>
            </div>

            <div className="itemMyDrinks"><a href="myDrink" onClick={event =>{ event.preventDefault(); window.location.hash="#myDrink";}}>
                my drink page</a>
            </div>

            <div className="itemInput"><input placeholder="search..." type="text"></input></div>
        </div>
    )
}

export default MenuView;
