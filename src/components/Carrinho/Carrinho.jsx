import React, {useContext} from "react";

import "./Carrinho.css";  
//import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";
import AppContext from "../../context/AppContext";

function Carrinho() {
  const { cartItems } = useContext(AppContext);
  
  return ( 
    <section className="cart">
      <div className="cart-items">
        { cartItems.map((ItemCarrinho)=><ItemCarrinho key={ItemCarrinho.id} data={ItemCarrinho} />) }
        
      </div>

      <div className="cart-resume">total</div>
    </section>
  );
}

export default Carrinho;
