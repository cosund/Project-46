function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){
   return  (
        <div>
             <SearchView model={props.model}  />
             <RenderTest />
         </div>
    );
}
