import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import Header from './Header';
import LoginPage from './LoginPage';

function MainFile() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
         <Route
            path='/*'
            element={
              <>
                <Header />
                <Routes>
                  <Route path='/homePage' element={<HomePage />} />
                  <Route path='/products' element={<ProductsPage />} />
                  <Route path='/cartPage' element={<CartPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainFile;







// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from './HomePage'
// import ProductsPage from './ProductsPage'
// import CartPage from './CartPage'
// import Header from './Header'
// import LoginPage from './LoginPage'

// function MainFile() {
  
//   return (
//     <div>
//       <BrowserRouter>

//         <Header />
//         <Routes>
//         <Route path='/' element={<LoginPage />}></Route>
//           <Route path='/homePage' element={<HomePage />} ></Route>
//           <Route path='/products' element={<ProductsPage />}></Route>
//           <Route path='/cartPage' element={<CartPage />}></Route>
//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// export default MainFile

//