import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionSetCurrentFood, actionSetFilter, getCurrentFilter } from "../redux/slice/food";
import { actioneSetHomeFilter, getBestSell, getHomeCurrentFilter, getNew, getPopular } from "../redux/slice/home";

export default function MenuBox({ filter, foods, children, homeFil, handleOpenModal }) {
  const currentFilter = useSelector(getCurrentFilter);
  const homeCurrentFilter = useSelector(getHomeCurrentFilter);
  const listFood = [useSelector(getBestSell), useSelector(getNew), useSelector(getPopular)];
  const dispatch = useDispatch();
  const handleClickFilter = (data) => {
    dispatch(actionSetFilter(data));
  };
  const handleClickHomeFilter = (label, list) => {
    dispatch(actioneSetHomeFilter({ filter: label, food: list }));
  };
  const handleClickCart = (food) => {
    handleOpenModal();
    dispatch(actionSetCurrentFood(food));
  };
  return (
    <div className='menu-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='heading-title text-center'>
              <h2>Thực đơn đặc biệt</h2>
              <p>Hãy chọn loại sản phẩm mà bạn muốn</p>
            </div>
          </div>
        </div>
        {filter?.length > 0 && (
          <div className='row'>
            <div className='col-lg-12'>
              <div className='special-menu text-center'>
                <div className='button-group filter-button-group'>
                  {filter?.map((item, index) => (
                    <button
                      key={index}
                      className={currentFilter === item.categoryName ? "active" : ""}
                      onClick={() => handleClickFilter(item.categoryName)}
                    >
                      {item?.categoryName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {homeFil?.length > 0 && (
          <div className='row'>
            <div className='col-lg-12'>
              <div className='special-menu text-center'>
                <div className='button-group filter-button-group'>
                  {homeFil?.map((item, index) => (
                    <button
                      key={index}
                      className={homeCurrentFilter === item.label ? "active" : ""}
                      onClick={() => handleClickHomeFilter(item.label, listFood[index])}
                    >
                      {item?.categoryName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {children}

        <div className='row '>
          {foods?.length > 0 &&
            foods?.map((e, index) => (
              <div className='col-lg-4 col-md-6 special-grid lunch' key={index}>
                <div className='gallery-single fix'>
                  <img
                    src={e.image}
                    className='img-fluid'
                    alt='Image'
                    style={{ height: "251px", width: "100%", objectFit: "cover" }}
                  />
                  <div className='why-text'>
                    <h4 id='text__flow' style={{ marginTop: "1rem" }}>
                      {e.foodName}
                    </h4>
                    <h5 style={{ color: "#e48c19", fontSize: "25px" }}>
                      {e?.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h5>
                  </div>
                </div>
                <div className='icon__cart' onClick={() => handleClickCart(e)}>
                  <i className='fa fa-shopping-cart'></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
