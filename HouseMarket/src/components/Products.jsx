import React, {useEffect} from 'react'
import Product from './product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';



function Products() {
  const {isLoading, products, error} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch])
 

 
   

  return (
    <div>
       <section>
          <div className='mt-3 md-3'><h1 className='ms-5'>Products</h1></div>
          
          <div className="row Product-row">
            {
                products && products.map((product)=>{
                    return <Product key={product.id} product={product}/>
                })
            }
          </div>
       </section>
    </div>
  )
}

export default Products
