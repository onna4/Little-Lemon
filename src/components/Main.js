import React from "react";
import Testimonials from "./Testimonials";
import About from "./About";
import resFood from '../imgicon/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

const dishes = [
   {
    getImgSrc: () => require('../imgicon/images/greek salad.jpg'),
    price: '12.55',
    name: 'Greek salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
},
{
    getImgSrc: () => require('../imgicon/images/bruchetta.jpeg'),
    price: '5.75',
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
},
{
    getImgSrc: () => require('../imgicon/images/lemon dessert.jpg'),
    price: '7.34',
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
},
{
    getImgSrc: () => require('../imgicon/1.jpeg'),
    price: '12.34',
    name: 'Grilled fish',
    description: 'grilled fish, a culinary masterpiece. Tender, flaky fillets adorned with charred grill marks, exuding an inviting aroma. A symphony of flavors, combining zesty lemon notes with a hint of smokiness. '
},
{
    getImgSrc: () => require('../imgicon/3.jpeg'),
    price: '10.34',
    name: 'Mediterranean Pasta',
    description: 'a harmonious blend of cultures on a plate. Al dente pasta intertwined with sun-drenched tomatoes, olives, and capers, creating a vibrant color palette.'
},
{
    getImgSrc: () => require('../imgicon/2.jpeg'),
    price: '17.34',
    name: 'steak',
    description: 'Mediterranean steak, a carnivore’s delight infused with coastal flair. Juicy, seared steak adorned with rosemary and oregano, transporting the senses to azure shores. '
}
]

const dishesList = dishes.map((dish) => (
  <article className="dishInfo" key={dish.name} >
    <img src={dish.getImgSrc()} />
    <div className="dish-flex">
      <h2>{dish.name}</h2>
      <p>${dish.price}</p>
      <p>{dish.description}</p>
      <h3>Order a delivery</h3>
    </div>
  </article>
));

function Main() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="main-title">Chicago</h2>
          <p className="main-parag">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button>Reserve a table</button>
          </Link>
        </div>
        <img src={resFood} className="main-img" alt="restaurant food" />
      </section>
      <section className="menu-specials" id='menu'>
        <div className="specials-flex">
          <h1>This week’s specials!</h1>
          <button>Online menu</button>
        </div>
        <div className="dishes">{dishesList}</div>
      </section>
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
