import React, {useState, useEffect} from 'react'
import './ProductPage.css'
import { CiShoppingCart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const {key} = useParams();
    console.log('params.key:', key);

  useEffect(() => {
    
    fetchData(key);
  },);

  const fetchData = async (key) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${key}`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
        <Navbar/>
    <div className="ProductPage-container">
        <div className="product-conatiner">
            <div className="product-image-conatiner">
                 <div className="main-image">
                    <img src={products?.thumbnail} alt="" />
                 </div>
                 <div className="other-images">
                      {products?.images?.map((imageUrl, i) => (
                        <div className="other-image">
                        <img key={i} src={imageUrl} alt={`Images ${i + 1}`} />
                        </div>
                      ))} 
                </div>

            </div>
            <div className="discribtion-conatiner">
                     <h1>{products?.title}</h1>
                     <div className="price">
                       <p> MRP:
                               {Math.floor(products?.price/(1-(products?.discountPercentage/100)))}
                        /-</p> 
                       <p>
                               {products?.discountPercentage}
                        % off</p>
                       <p>Buy:
                        {products?.price}
                        /-</p>
                     </div>
                     <button>Add to Cart</button>
                     <button>Buy Now</button>
                     <button className='wishist-button'style={{}}><CiShoppingCart /></button>
                     <p>Add to Wishlist</p>
                     <hr />
                     <h3>Description</h3>
                     <p style={{width:'100%', textAlign:'center'}}>{products?.description}</p>
            </div>
        </div>
             {/* ))} */}
    </div>
    </>
  )
}
