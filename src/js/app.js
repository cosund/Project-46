function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){
     return  (
          <div className="flexparent">
            <div className="mainContent"><ShowPresenter hash="#filter">
                                        <FilterPresenter model={props.model}/>
                                        </ShowPresenter>
            </div>
          </div>
     );
}
  
function defaultRoute(){
     const knownRoutes = ["#search", "#myDrink", "#details", "#filter"]
     if(!knownRoutes.includes(window.location.hash)) {
        window.location.hash="#search";
     }
}
defaultRoute(); // when the application loads, set the default route!
  
window.addEventListener("hashchange", defaultRoute);
