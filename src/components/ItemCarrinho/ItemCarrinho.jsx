import React from "react";
import propTypes from "prop-types";
import {BsCartDashFill} from "react-icons/bs";

import "./ItemCarrinho.css";
import formatCurrency from "../../utils/formatCurrency";

function ItemCarrinho({ data }) {
  
  const {thumbnail, title, price} = data;

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="" 
        className="cart-item-image"/>

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>

        <button
          type="button"
          className="button__remove-item"
        >
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default ItemCarrinho;

ItemCarrinho.propTypes = {
  data: propTypes.object
}.isRequired;
