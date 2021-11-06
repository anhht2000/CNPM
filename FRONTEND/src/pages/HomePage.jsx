import React, { useEffect } from "react";
import CommonLayout from "../layouts/commonLayout.jsx";
import { bannerImg } from "../asset";
import Banner from "../components/Banner.jsx";
import Contact from "../components/Contact.jsx";
import Slider from "../components/Slider.jsx";
import About from "../components/About.jsx";
import { sliderImg } from "../asset";
import { productImg } from "../asset";
import MenuBox from "../components/MenuBox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { actionGetTop, getFoodShow } from "../redux/slice/home.js";

const arrImage = [sliderImg.one, sliderImg.two, sliderImg.three];
const filter = [
  { id: 1, categoryName: "Nổi bật", label: "bestseller" },
  { id: 2, categoryName: "Mới nhất", label: "new" },
  { id: 3, categoryName: "Phổ biến", label: "popular" },
];
const dataProduct = [
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
  { img: productImg.product_one, name: "Special Lunch 1", price: "$15.79" },
];

export default function HomePage() {
  const content = " If you're not the one cooking, stay out of the way and compliment the chef. ";
  const author = "Michael Strahan";
  const dispatch = useDispatch();
  const listFood = useSelector(getFoodShow);
  useEffect(() => {
    dispatch(actionGetTop());
  }, []);

  return (
    <CommonLayout>
      <Slider arrImage={arrImage} />
      <About />
      <Banner img={bannerImg.home} content={content} author={author} />
      <MenuBox homeFil={filter} foods={listFood} />
      <Contact />
    </CommonLayout>
  );
}
