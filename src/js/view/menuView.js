import './style.css'

function MenuView(props){
    return(
        
        <div className="menubar">
            <div className="itemStart"><a>start</a></div>
            <div className="dropdown">
                <span onClick={() => window.location.hash="#filter"}>filter by category</span>
                <div className="dropdown-content">
                    {props.options?.map( (arg) =>
                            (
                            <p key={arg} onClick={() => props.categoryChosen(arg)}>{arg}</p>
                            )
                        
                    )}
                    <button onClick={ ()=> props.onSearch() }>
                        Search
                    </button>
                </div>
            </div>
            <div className="itemMyDrinks"><a href="myDrink" onClick={event =>{
              event.preventDefault();
              window.location.hash="#myDrink";
            }}>my drink page</a></div>
            <div className="itemInput"><input onChange={ e=> props.onText(e.target.value) } placeholder="search..." type="text"></input>
            <button onClick={ (event)=> {props.onSearch(); window.location.hash="#search";}}>
                Search
            </button>
            </div>
        </div>
    );
}

export default MenuView;
