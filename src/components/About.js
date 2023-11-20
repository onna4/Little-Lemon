import React from 'react'
import ownersA from '../imgicon/images/Mario and Adrian b.jpg'
import ownersB from '../imgicon/images/Mario and Adrian A.jpg'

function About() {
    return (
        <section className="about" id='about' >
            <div>
                <h1 className="title">Little Lemon</h1>
                <h2 className='about-title'>Chicago</h2>
                <p className='about-parag' >A charming neighborhood bistro that  serves simple food and classic cocktails in a lively but casual environment. The restaurant featers a locally-sourced menu with daily specials.</p>
            </div>
            <div className='pics' >
                <img src={ownersB} alt="restaurant's owners" className='pic img-bottom' />
                <img src={ownersA} alt="restaurant's owners" className='pic img-top' />
            </div>
        </section>
    )
}

export default About