import React from 'react'
import zahran from '../imgicon/images/zahran.jpg'
import bruce from '../imgicon/images/bruce.jpg'
import anita from '../imgicon/images/anita.jpg'
import sophy from '../imgicon/images/sophy.jpg'

const reviewsArr = [
    {
        stars: 4,
        getImgSrc: () => require('../imgicon/images/zahran.jpg'),
        name: 'Zahran',
        review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation and wonderful dessert.'

    },
    {
        stars: 4,
        getImgSrc: () => require('../imgicon/images/anita.jpg'),
        name: 'Anita',
        review: 'It’s a great experience. The ambiance is very welcoming and charming. Amazing food and service. The staff are very welcoming and I would definetly recommend it to my friends.'

    },
    {
        stars: 4,
        getImgSrc: () => require('../imgicon/images/sophy.jpg'),
        name: 'Sophy',
        review: 'I have to say, I enjoyed every single bite of the meal in Little Lemon. Considering the quality, the price is reasonable. Ideal for those who want a friendly night out.'

    },
    {
        stars: 4,
        getImgSrc: () => require('../imgicon/images/bruce.jpg'),
        name: 'Bruce',
        review: 'This is my absolute favorite restaurant in Chicago. The food is always fantastic and no matter what I order I am always delighted with my meal!'
    }
]

const reviews = reviewsArr.map(review =>
    <article className='review' key={review.name}>
        <h2 className='review-title'>Rating</h2>
        <div className='flex'>
            <img className='user-img' src={review.getImgSrc()} alt='user image' />
            <h3>{review.name}</h3>
        </div>
        <p className='review-text'>{review.review}</p>
    </article>
)

function Testimonials() {
    return (
        <section className="testimonials">
            <h1 className='test-title'>Testimonials</h1>
            <div className='review-container'>
                {reviews}
            </div>
        </section>
    )
}

export default Testimonials