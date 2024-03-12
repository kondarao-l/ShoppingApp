import {  useState } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../StyleSheets/cartpage.css'
import { postId } from '../store/actions/addtoCartActions';

function CartPage() {
 // const [product, setProduct] = useState([])
 const dispatch = useDispatch()
  const cart = useSelector((state) => state.addToCart.cart)
  const [count,setCount] = useState(1) 

  
  const deleteCartItem = (id)=>{
    dispatch(postId(id))
     //   console.log(id)
    //  const filteredCart =  newCart.filter(item=>item.id !== id)
   //  setNewCart(filteredCart)
     }
 
  const countAddButton = () => {
    setCount(count+1)
    }

  const countLessButton = (id) => {
   if(count===1) {
  console.log('deltete it..',id)
  deleteCartItem(id)
  }
  if(count>1){
 setCount(count - 1)
}
 }

 
  return (

    <div >

      
      {cart.map(eachcartItem =>
        <div className='cart-product-container'>
          <div className='cart-contaier-leftside'>
            <img className='cart-item-image' src={eachcartItem.image} alt='cart-item' />

            <div className='title-category-container'>
              <p className='cart-item-title'>{eachcartItem.title}</p>
              <h1 className='cart-item-category'>{eachcartItem.category}</h1>
            </div>

          </div>
          <div className='cart-buttons-container'>
            <button onClick={()=>{countLessButton(eachcartItem.id)}} className='count-less-button'>-</button>
            <h1 className='cart-add-button'>{count}</h1>
            <button onClick={countAddButton} className='count-add-button'>+</button>
          </div>
          <div className='cart-container-rightside'>
          <h1 className='cart-item-price'>Rs {eachcartItem.price}</h1>
          <svg onClick={() => {deleteCartItem(eachcartItem.id)}} className='cart-item-delete' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
//<h1 className='cart-add-button'><button className='count-add-button'>+</button>1<button className='count-less-button'>-</button></h1>