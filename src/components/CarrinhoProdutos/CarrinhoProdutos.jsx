import React, { useContext } from "react";
import propTypes from "prop-types";
import  "../CarrinhoProdutos/CarrinhoProdutos.css";
import {FaShoppingCart} from "react-icons/fa";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function CarrinhoProdutos({ data }) {

  const {title, thumbnail, price} = data;
  
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = ()=> setCartItems([ ...cartItems, data ]);

  return ( 
    <section className="carrinho-produtos">

      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="imagem-produto" className="carrinho__imagem"/>
      <div className="carrinho__info">
        <h2 className="carrinho__titulo">{title}</h2>
        <h2 className="carrinho__preco"> {formatCurrency(price, "BRL")}</h2>
      </div>

      <button 
        type="button" 
        className="botao__add-carrinho"
        onClick={handleAddCart}
      >
        <FaShoppingCart />
      </button>
    </section>
  );
}

export default CarrinhoProdutos;

CarrinhoProdutos.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
