import React,{useState} from 'react'
import '../StyleSheets/Header.css'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
function Header() {
  const [cartCount,setCartCount] = useState()
 const count = useSelector(state=> state.addToCart.counter)
 
  return (
    <div>
     <div className='header'>
                <div className='heading-container'>
                    <h1 className='main-heading'>Shop <span className='main-heading2'>Trendz</span> </h1>
                   
                </div>
                <div className='page-titles'>
                  <Link to='/homePage'> <p className='page-title' >Home</p> </Link> 
                  <Link to='/products'> <p className='page-title' >Products</p> </Link> 
                  <Link to = '/cartPage'> <p className='page-title' >Cart <button className='count-value'>{count}</button></p> </Link> 
                  <Link to = '/'><button className='logout-button'>Logout</button> </Link>
                </div>
            </div>
            <hr className='border-line' />
        </div>
  )
}

export default Header
// 