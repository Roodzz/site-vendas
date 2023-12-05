import React from "react";
import BarraPesquisa from "./BarraPesquisa/BarraPesquisa";
import "./Header.css";
import BotaoCarrinho from "../BotaoCarrinho/BotaoCarrinho";


function Header(){
  return(
    <header className="header"  >
      <div className="container">
        <BarraPesquisa/>
        <BotaoCarrinho/>
      </div>
    </header>
  );
}

export default Header;
