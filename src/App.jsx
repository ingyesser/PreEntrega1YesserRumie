import React from "react";
import "./miestilo.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"} />
    </>
  );
};

export default App;
