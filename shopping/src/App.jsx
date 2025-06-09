import Header from "./Header";
import './app1.css';
import AddItem from "./AddItem";
import { useState } from "react";
import ListItems from "./ListItems";
function App() {
  const [items,setItems]=useState([]);

  function addItem(newItem){
    setItems((items) => [...items,newItem]);
    console.log(items);
  }
  return( 
  <>
  <Header />
  <AddItem addItem={addItem} />
  <ListItems items={items} />
  </>
  );
}

export default App
