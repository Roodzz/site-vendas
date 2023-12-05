import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import "./BotaoCarrinho.css";

function BotaoCarrinho() {
  return ( 
    <button type="button" className="cart__button">
      <AiOutlineShoppingCart/>
      <span className="cart__status">9+</span>
    </button>
  );
}

export default BotaoCarrinho;
