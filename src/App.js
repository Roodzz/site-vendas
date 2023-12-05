import React from "react";
import Header from "./components/Header/Header";
import Produtos from "./components/Produtos/Produtos";
import Provider from "./context/Provider";
import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  return (
    <Provider>
      <Header/>
      <Produtos/>
      <Carrinho/>
    </Provider>
  );
}

export default App;
