import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import restaurantTable from '../imgicon/images/restaurant.jpg'
import calIcon from '../imgicon/icons_assets/calendar-icon.png'
import clockIcon from '../imgicon/icons_assets/clock-icon.png'
import personIcon from '../imgicon/icons_assets/person-icon.png'

export default function GuestForm() {
  
  const[guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '', 
    request: '',
    occasion: ''
  })

  function handleChange(e) {
    setGuestInfo(prevGuestInfo => {
      return {
        ...prevGuestInfo ,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="guest-info">
      {/* <div className='flex-container'> */}
        <h1 className="guest-title">You’re almost done!</h1>
        <div className="flex-container">
          <img
            src={restaurantTable}
            alt="restaurant table and its view"
            className="restaurant-table"
          />
          <article>
            <h1>Reserve a table</h1>
            <p>
              <img src={calIcon} alt="calendar icon" className="infoIcon" />{" "}
              dd/mm
            </p>
            <p>
              <img src={clockIcon} alt="time icon" className="infoIcon" /> 10:00
            </p>
            <p>
              <img src={personIcon} alt="person icon" className="infoIcon" /> 2
              people
            </p>
          </article>
        </div>
      {/* </div> */}
      <ol className="reserv-title">
        <li>Find a table</li>
        <li>Your details</li>
      </ol>
      <form className="form-data">
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={guestInfo.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={guestInfo.lastName}
        />
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          placeholder="Phone Number"
          value={guestInfo.phone}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={guestInfo.email}
        />
        <textarea
          placeholder="Add a special request (optional)"
          onChange={handleChange}
          name="request"
          value={guestInfo.request}
        />
        <select
          name="occasion"
          value={guestInfo.occasion}
          onChange={handleChange}
        >
          <option value="">-- Occasion --</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </form>
      <Link className="btn-container" to="/confirm-rating">
        <button className="btn-center">Confirm reservation</button>
      </Link>
    </div>
  );
}
