/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./cards.css";
import API from "../utils/API";

const Card = props => {
  const lat = "33.684566";
  const long = "-117.826508";
  // const favrestaurant = [];

  const [featuredRestaurant, getfeaturedRestaurant] = useState({});

  function handleClick(event) {
    //on button click, ask for user location, then do API call
    event.preventDefault();
    API.getRestaurant(lat, long)
      .then(response => {
        // console.log(response.data.data[0]);

        const randomIndex = Math.floor(
          Math.random() * response.data.data.length
        );
        getfeaturedRestaurant(response.data.data[randomIndex]);

        // ============= Testing to see Data we can get =========
        console.log(randomIndex);
        console.log(response.data.data[0]);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  const priceError =
    "Sorry! This location hasn't set their price range yet, but stay tuned!";
  const cuisineError =
    "Sorry! We don't know exactly what type of cuisine they serve, it might be a mix or a total mystery. Try it out anyway!";
  // const websiteError = "Looks like they haven't set a website yet?";
  const addressError = "What address????";
  // const phoneError = "Looks like something's wron with their phone number";
  const nameError = "We don't know the name of this restaurant either lol.";
  return (
    <div>
      <h1>Restaurant Generator</h1>
      <button
        onClick={handleClick}
        className="btn btn-outline-success random-btn"
      >
        Randomize
      </button>
      <div className="card text-center results">
        <div className="overflow">
          <img
            src={
              featuredRestaurant.photo
                ? featuredRestaurant.photo.images.small.url
                : "https://i.pinimg.com/originals/09/a7/85/09a785fd6f8f926d218c2ef0b18a889c.jpg"
            }
            className="img-fluid cardImg"
            alt="randomized restaurant photo"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title restaurant-name">
            {featuredRestaurant.name ? featuredRestaurant.name : nameError}
          </h4>

          <ul className="list-group list-group-flush">
            <li className="card-text text-secondary list-group-item cuisine">
              {featuredRestaurant.cuisine && featuredRestaurant.cuisine[0]
                ? `Cuisine: ${featuredRestaurant.cuisine[0].name}`
                : cuisineError}
              {/* conditional rendering, if cuisine exists then display it, if not dont display */}
              {/* Res Cuisine */}
            </li>
            <li className="card-text text-secondary list-group-item price">
              {/* Price Level: {featuredRestaurant.price_level} */}
              {featuredRestaurant.price_level
                ? `Price Level: ${featuredRestaurant.price_level}`
                : priceError}
            </li>
            <li className="card-text text-secondary list-group-item address">
              {featuredRestaurant.address
                ? `Address: ${featuredRestaurant.address}`
                : addressError}
              {/* {featuredRestaurant.address} */}
            </li>
          </ul>

          <a
            href={featuredRestaurant.website}
            target="_blank"
            className="btn btn-outline-success website"
          >
            Website
          </a>
          <a href="#" className="btn btn-outline-success call">
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
