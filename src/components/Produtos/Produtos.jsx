import React , {useEffect, useContext} from "react";
import "./Produtos.css";
import fetchProducts from "../../api/fetchProducts";
import CarrinhoProdutos from "../CarrinhoProdutos/CarrinhoProdutos";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";


function Produtos() {
  
  const { products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(()=>{

    fetchProducts("iphone").then((response)=>{

      setProducts(response);
      console.log(products);
      setLoading(false);

    });

  }, []); 


  return ( (loading && <Loading/>) || (<section className="products container">
    {
      products.map((product)=> <CarrinhoProdutos key={product.id} data={product} /> ) 
    }
  
  </section>)
    
  );
}

export default Produtos;
