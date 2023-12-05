import React, { useContext, useState } from "react";
import {BsSearch} from "react-icons/bs";
import "./BarraPesquisa.css";
import fetchProducts from "../../../api/fetchProducts";
import AppContext from "../../../context/AppContext";

function BarraPesquisa() {

  const [produtoV, setProdutoV] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) =>{
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(produtoV);
    setProducts(products);
    setLoading(false);
    setProdutoV("");
  };

  return ( 
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="search" 
        value={produtoV} 
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({target})=>setProdutoV(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch/>  
      </button>
    </form>
  );
}

export default BarraPesquisa;
