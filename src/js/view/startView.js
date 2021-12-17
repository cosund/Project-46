import './style.css';

function StartView(props){
    return(
        <div className="start">
            <h1 className="rubrik">Welcome to this cocktail page</h1>
            <div>
                <p className="text">This webpage was made by Joar&#128511;, Adam&#128511;, Alva&#128511; and Cornelia&#128511;.
                Explore the world of cocktails and save your favorites you find along the way. </p>
            </div>
            <div className="viewButton">
            <button className="startButton" onClick={() => window.location.hash="#search"}>Get started</button>
            </div>
        </div>
    );
}

export default StartView;