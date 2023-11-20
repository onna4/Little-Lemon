import React, { useState } from 'react'
import restSmall from '../imgicon/images/rest.webp'
import { Link } from 'react-router-dom'

export default function Reservations() {
  const [reservationData, setReservationData] = useState({
    noPeople: 0,
    date: "",
    time: "",
    table: "",
  });

  function handleChange(e) {
    setReservationData((prevReservationData) => {
      return {
        ...prevReservationData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <img src={restSmall} alt="restaurant image" className="hero-img" />
      <div className="reservations">
        <h1>Reserve a table</h1>
        <ol className="reserv-title">
          <li>Find a table</li>
          <li>Your details</li>
        </ol>
        <form className="form-data">
          <div className='form-flex'>
          <label htmlFor="noPeople">
            No. of people
          </label>
          <select
              id="noPeople"
              name="noPeople"
              onChange={handleChange}
              value={reservationData.noPeople}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
            </div>
            <div className='form-flex'>
          <label htmlFor="date">Select date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={reservationData.date}
            min={new Date().toISOString().split("T")[0]}
          />
          </div>
          <div className='form-flex'>
          <label htmlFor="time">Select time</label>
          <select id="time" name="time" onChange={handleChange}>
            <option>9: 00</option>
            <option>9: 30</option>
            <option>10: 00</option>
          </select>
          </div>
            <article className='form-flex' >
            <legend>Select table</legend>
            <input
              type="radio"
              name="table"
              id="inside"
              value="inside"
              onChange={handleChange}
              checked={reservationData.table === "inside"}
            />
            <label 
              htmlFor="inside"
              className='radio-btn'
            >Inside</label>
            <input
              type="radio"
              name="table"
              id="outside"
              value="outside"
              onChange={handleChange}
              checked={reservationData.table === "outside"}
            />
            <label 
              htmlFor="outside"
              className='radio-btn'
            >Outside</label>
            </article>
        </form>
      </div>
      <Link className='btn-container' to="/guest-info">
          <button className='btn-center' >Find a table</button>
      </Link>
    </div>
  );
}
