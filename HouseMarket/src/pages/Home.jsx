
import React, { useEffect} from 'react';
import Products from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import Loader from '../components/Loader';
import Message from '../components/fetchFuilureMessage';

function Home() {



  const {isLoading, products, error} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  
  return (
      <div>
        <Products/>
        {isLoading&&<Loader/>}
        {error&&<Message variant='danger'>{error}</Message>}
       
      </div>
 
   
  );
}

export default Home;
