import React,{useContext} from 'react'
import { productContext } from '../Hooks/useContext/productContext'
import Product from './product';




function Products() {
    const products = useContext(productContext);
   

  return (
    <div>
       <section className='container'>
          <div className='mt-3 md-3'><h1>Products</h1></div>
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
