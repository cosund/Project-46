import './style.css'

function MenuView(prop){
    return(
        <div className="menubar">
            <div className="itemStart"><a>start</a></div>
            <div className="dropdown">
                <span onClick={() => window.location.hash="#filter"}>filter by category</span>
                <div className="dropdown-content">
                    {prop.options.map( (arg) =>
                            (
                            <p key={arg} onClick={() => prop.categoryChosen(arg)}>{arg}</p>
                            )
                        
                    )}
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
