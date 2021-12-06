function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){
   return  (
        <div >
            <p>working</p>
         </div>
    );
}

function defaultRoute(){
  const knownRoutes = ["#search", "#myDrink", "#details"]
    if(!knownRoutes.includes(window.location.hash)) {
      window.location.hash="#search";
  }
}
defaultRoute(); // when the application loads, set the default route!

window.addEventListener("hashchange", defaultRoute);
