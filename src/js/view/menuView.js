import './style.css';

function MenuView(props){
    return(
        <div className="menubar">
            <div className="menuItem" ><a href="start"  onClick={event =>{ event.preventDefault(); window.location.hash="#start";}}>
                Start</a>
            </div>
            <div className="menuItem"><a href="filter" onClick={event =>{ event.preventDefault(); window.location.hash="#filter";}}>
                Filter By Category</a>
            </div>
            <div className="menuItem"><a href="search" onClick={event =>{ event.preventDefault(); window.location.hash="#search";}}>
                Search Drinks</a>
            </div>
            <div className="menuItem"><a href="myDrink" onClick={event =>{ event.preventDefault(); window.location.hash="#myDrink";}}>
                My Drink Page</a>
            </div>
        </div>
    )
}

export default MenuView;
