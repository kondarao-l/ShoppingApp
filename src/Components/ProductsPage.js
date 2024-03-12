import React, { useEffect } from 'react'
import { useState } from 'react'
import '../StyleSheets/productsPage.css'
import {  useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/addtoCartActions'

function ProductsPage() {
  const dispatch = useDispatch()
  //const cart = useSelector((state) => state.addToCart.cart)
  const [search, setsearch] = useState('')
  const [data, setData] = useState([])
  const categories = [
    { id: 1, type: 'Electronics' },
    { id: 2, type: 'Jewelery' },
    { id: 3, type: "Men's Clothing" },
    { id: 4, type: "Women's Clothing" },
  ];
  const changeHadler = (e) => {
    setsearch(e.target.value)
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setData(data))

  }, [])

  const categoryButton = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setData(data))
  }

  const cartButton = (cartObject) => {
    // Call increment
    dispatch(addToCart(cartObject))

    // get count from store 
    //console.log("State count>>>>>>>>>>>", cart)

  }

  const [limit, setLimit] = useState(40)

  const handleLimit = () => {
    setLimit(limit + 20)
  }

  
  return (
    <div className='page-container'>
       <div className='search-bg-container'>
        <div className='search-container'>
          <input className='search-bar' placeholder='search...' type='text' onChange={changeHadler} />
          <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <h1 className='products-title'>All Products</h1>
      </div>
    

      <div className='display-container'>

        <div>
          <h1 className='categories-title'>Categories:</h1>
          <div className='categories-container'>
            <div className='categories-container-2'>
              {categories.map(category => (
                <button
                  className='category-button'
                  onClick={() => categoryButton(category.type.toLowerCase())}>
                  {category.type}
                </button>
              ))}
            </div>
          </div>

        </div>


        <div className='product-card-container' >
          {data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item, id) => (
            <div key={id} className='product-card'>
              <h1>{item.category}</h1>
              <img className='product-image' src={item.image} alt='product-img' />
              <p>{item.title.slice(0, limit)}<span onClick={handleLimit}>{item.title.length > limit ? "..." : ""}</span></p>
              <div className='product-price-container'>
                <h2 className='product-price'> Rs:{item.price}</h2>

                <button onClick={() => {
                  const cartObject = {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    category: item.category

                  }
                  cartButton(cartObject)
                }} className='product-cart-button'> Cart </button>

              </div>
            </div>

          ))}
        </div>

      </div>


    </div >
  )
}

export default ProductsPage

/*


 <p>Electronics </p>
        <p>Jewelery' </p>
        <p> Men's clothing </p>
        <p> Women's clothing </p>

        https://temu-com-shopping-api-realtime-api-scrapper-from-temu-com.p.rapidapi.com/details

         <div className='search-bg-container'>
        <div className='search-container'>
          <input className='search-bar' placeholder='search...' type='text' onChange={changeHadler} />
          <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <h1 className='products-title'>All Products</h1>
      </div>

*/