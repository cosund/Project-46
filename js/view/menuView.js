function MenuView(props){
    return(
        <div class="menubar">
            <div class="itemStart"><a>start</a></div>
            <div class="dropdown">
                <span onClick={() => window.location.hash="#filter"}>filter by category</span>
                <div class="dropdown-content">
                    <p onClick={() => props.categoryChosen("vodka")}>vodka</p>
                    <p onClick={() => props.categoryChosen("gin")}>gin</p>
                    <p onClick={() => props.categoryChosen("rum")}>rum</p>
                    <p onClick={() => props.categoryChosen("tequila")}>tequila</p>
                    <p onClick={() => props.categoryChosen("triple sec")}>triple sec</p>
                </div>
            </div>
            <div class="itemMyDrinks"><a>my drink page</a></div>
            <div class="itemInput"><input placeholder="search..." type="text"></input></div>
        </div>
    )
}