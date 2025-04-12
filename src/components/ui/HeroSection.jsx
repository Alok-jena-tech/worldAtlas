import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
  return (
   <>
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World , one country at a time.
          </h1>
          <p className="paragraph">
            Discover the history,culture, and beauty of every nation.Sort,
            search,and filter through countries to find the deatils you need.
          </p>
         <NavLink to="/about"> <button className="btn btn-darken btn-inline bg-white-box">
            start Exploring <FaArrowCircleRight />
          </button></NavLink>
        </div>
        <div className="hero-image">
          <img src="/images/worldImage.jpeg" alt="worldBeauty" />
        </div>
      </div>
    </main>
    </>
  )
}


