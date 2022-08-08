import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <div className='bg-container'>
            <img src="../../../img/componentes/fondoHero.png" alt="" className='img-bg'/>
        </div>
        <div className='text-container'>
            <div>
                <h2>Temporada de Primavera</h2>
                <h3>Se viene la primavera y no podes dejar pasar nuestras ofertas!</h3>
                <h4>Ver novedades</h4>
            <div className='button-container'>
                <button>
                    ir a las ofertas
                </button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Hero