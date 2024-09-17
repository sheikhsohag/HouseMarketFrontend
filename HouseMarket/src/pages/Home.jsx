
import React, { useEffect} from 'react';
import Products from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

function Home() {

  const {isLoading, products, error} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
 



  return (
      <div>
        {isLoading&&<h3>Products Loading Now...</h3>}
        {error&&<h1>{error}</h1>}
        <Products/>
      </div>
 
   
  );
}

export default Home;
