import './style.css';

function StartView(props){
    return(
        <div className="start">
            <h1>Welcome to this cocktail page</h1>
            <button onClick={() => window.location.hash="#search"}>Get started</button>
        </div>
    );
}

export default StartView;