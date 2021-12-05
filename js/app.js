function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){
   return  (
        <div class="flexparent">
          <div class="menubar"><MenuView categoryChosen={category => console.log(category)}/></div>
          <div class="mainContent"><ShowPresenter hash="#filter">
                                   <FilterView filterResults={props.model}/>
                                   </ShowPresenter>

                                   <ShowPresenter hash="#details">
                                   <DetailsView model={props.model}/>
                                   </ShowPresenter>
          </div>
         </div>
    );
}