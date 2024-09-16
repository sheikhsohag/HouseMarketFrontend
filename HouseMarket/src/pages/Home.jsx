import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { productContext } from '../Hooks/useContext/productContext';
import Products from '../components/Products';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('/api/products/');  // Use response here
        setProducts(response.data);  // Set the fetched products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);  

 

  return (
    <productContext.Provider value={products}>
      <Products/>
    </productContext.Provider>
  );
}

export default Home;
