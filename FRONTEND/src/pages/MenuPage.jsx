import React, { useEffect } from "react";
import { bannerImg } from "../asset/index.js";
import Banner from "../components/Banner.jsx";
import MenuBox from "../components/MenuBox.jsx";
import Slider from "../components/Slider.jsx";
import { productImg } from "../asset";
import CommonLayout from "../layouts/commonLayout.jsx";
import Contact from "../components/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { actionGetCater, actionGetFood, getAllFood, getCategory, getCurrentPage } from "../redux/slice/food.js";

const category = [
  { id: 1, name: "Chicken" },
  { id: 2, name: "Fish" },
  { id: 3, name: "Beff" },
  { id: 4, name: "Pig" },
];
const dataProduct = [
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
];

export default function MenuPage() {
  const content = " If you're not the one cooking, stay out of the way and compliment the chef. ";
  const author = "Michael Strahan";
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const category = useSelector(getCategory);
  const listFood = useSelector(getAllFood);
  useEffect(() => {
    dispatch(actionGetFood(currentPage));
    dispatch(actionGetCater());
  }, []);
  return (
    <CommonLayout>
      <div id='pt-6'></div>
      <Banner img={bannerImg.menu} content={"Special Menu"} author={""} center={true} />
      <MenuBox filter={category.slice(0, 4)} foods={listFood}>
        <div className='row py-3'>
          <div className='col col-6 search'>
            <input type='text' placeholder='Enter to search' />
            {/* <i className='fa fa-search icon'></i> */}
          </div>
          <div className='col col-6 filter'>
            <div className='d-inline-flex justify-content-end w-100'>
              <select name='price' id=''>
                <option value=''>Price</option>
                <option value='1'>Ascending</option>
                <option value='2'>Descending</option>
              </select>
              <select name='date' id=''>
                <option value=''>New</option>
                <option value='1'>Ascending</option>
                <option value='2'>Descending</option>
              </select>
            </div>
          </div>
        </div>
      </MenuBox>
      <Banner img={bannerImg.home} content={content} author={author} />
      <Contact />
    </CommonLayout>
  );
}
