import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuBox({ filter, foods, children }) {
  const [currentFilter, setCurrentFilter] = useState(0);
  return (
    <div className='menu-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='heading-title text-center'>
              <h2>Special Menu</h2>
              <p>Please choose type of food that you want </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='special-menu text-center'>
              <div className='button-group filter-button-group'>
                {filter &&
                  filter?.map((item) => (
                    <button key={item.id} className={currentFilter === item.id ? "active" : ""}>
                      {item?.categoryName}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {children}

        <div className='row '>
          {foods &&
            foods?.map((e, index) => (
              <div className='col-lg-4 col-md-6 special-grid lunch' key={index}>
                <div className='gallery-single fix'>
                  <img
                    src={e.image}
                    className='img-fluid'
                    alt='Image'
                    style={{ height: "251px", objectFit: "cover" }}
                  />
                  <div className='why-text'>
                    <h4 id='text__flow'>{e.foodName}</h4>
                    <h5 style={{ color: "#e48c19", fontSize: "25px" }}>
                      {e?.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h5>
                  </div>
                </div>
                <div className='icon__cart'>
                  <i className='fa fa-shopping-cart'></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
