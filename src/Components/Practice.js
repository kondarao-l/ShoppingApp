// import React, { useState, useEffect } from 'react';


// function Practice() {
//   const [data, setData] = useState([]);
//   const [search,setSearch] = useState()
  

//   const categories = [
//     { id: 1, type: 'electronics' },
//     { id: 2, type: 'jewelery' },
//     { id: 3, type: "men's clothing" },
//     { id: 4, type: "women's clothing" },
//   ];

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };
// const [isLoading, setIsloading] = useState(false)
//   const handleCategoryClick = (category) => {
//     // eneble loader
//     setIsloading(true)

//     fetch(`https://fakestoreapi.com/products/category/${category}`)
//             .then(res=>{
//               if(res.status === 200){
//                 // disable loader
//                 setIsloading(false)
//               }
//               return res.json()}
//               )
//             .then(data=>{
              
//               setData(data)
//             }
//               )

//   };


//   return (
//     <div>
//       <h1>Shopping Zone</h1>
//       <input type='text' onChange={handleSearchChange} />
//       <div>
//         {categories.map(category => (
//           <button
//             key={category.id}
//             className='cate-button'
//             onClick={() => handleCategoryClick(category.type.toLowerCase())}
//           >
//             {category.type}
//           </button>
//         ))}
//       </div>
// {isLoading ? <h1>Loading...</h1>: 
//       <div className='bg-container'>
//         {data?.map((item) => (
//           <div className='card-container' key={item.id}>
//             <h1>{item.id}</h1>
//             <h2 style={{ fontSize: '20px' }}>{item.title}</h2>
//             <img className='image-element' src={item.image} alt='img' /> <br />
//             <p>{item.description}</p>
//             <p>{item.price}</p>
//             <button style={{ backgroundColor: 'darkorange' }}>add cart</button>
//           </div>
//         ))}
//       </div>
// }
//     </div>
//   );
// }

// export default Practice;