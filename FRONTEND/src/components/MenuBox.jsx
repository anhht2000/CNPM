import React from "react";
import { productImg } from "../asset";

const dataProduct = [
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
];

export default function MenuBox() {
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
                <button className='active' data-filter='*'>
                  All
                </button>
                <button className=''>Drinks</button>
                <button className=''>Lunch</button>
                <button>Dinner</button>
              </div>
            </div>
          </div>
        </div>

        <div className='row '>
          {dataProduct.map((e, index) => (
            <div className='col-lg-4 col-md-6 special-grid lunch'>
              <div className='gallery-single fix'>
                <img src={e.img} className='img-fluid' alt='Image' />
                <div className='why-text'>
                  <h4>{e.name}</h4>
                  <h5>{e.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
