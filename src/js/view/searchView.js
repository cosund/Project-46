function SearchFormView(props){
  return(
  <div>
  <input onChange={ e=> props.onText(e.target.value) } placeholder="Search..."/>
  <select onChange={ e=> props.onDishType(e.target.value) }>
      <option>Choose:</option>
      {props.options.map((opt) => (<option key={opt} >{opt}</option>))}
</select>
<button onClick={ (event)=> props.onSearch() }
>
Search
</button>
</div>
);
}
