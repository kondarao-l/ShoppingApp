import React from 'react'
import '../StyleSheets/HomePage.css'
import Header from './Header'
import image1 from './Images/pexels-photo-3772506.jpeg'
import { Link } from 'react-router-dom'



function HomePage() {
    
    return (
        <div className='bg-container'>
            <div className='header'>
                <div className='card-container'>
                    <h1 className='card-heading'>Cloths That Get You  </h1>
                    <h1 className='card-heading2'> Noticed </h1>
                    <p className='card-description' >Fashion is the part of daily air and it does not quite help that it changes all time.
                        Clothing describes the material and the technical garment, devoid of any social meaning or
                        connections; costume has come to mean fancy dress or masquerade wear. Fashion, by contrast,
                        describes the social and tempora system that influences and "activates" dress as a social signifier in a certain time and context.
                    </p>
                    <Link to='/products'>
                        <button className='shopping-button'>Shop Now</button>   
                    </Link>
                    
                </div>
                <div>
                    <img className='wallpaper' src={image1} alt='wallpaper' />

                </div>
            </div>




        </div>
    )
}

export default HomePage