import React from "react";
import CommonLayout from "../layouts/commonLayout.jsx";
import { bannerImg } from "../asset";
import Banner from "../components/Banner.jsx";
import Contact from "../components/Contact.jsx";
import Slider from "../components/Slider.jsx";
import About from "../components/About.jsx";
import { sliderImg } from "../asset";
import { productImg } from "../asset";
import MenuBox from "../components/MenuBox.jsx";

const arrImage = [sliderImg.one, sliderImg.two, sliderImg.three];
const filter = [
  { id: 1, name: "Top seller" },
  { id: 2, name: "Top popular" },
  { id: 3, name: "Top new" },
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
  return (
    <CommonLayout>
      <Slider arrImage={arrImage} />
      <About />
      <Banner img={bannerImg.home} content={content} author={author} />
      <MenuBox filter={filter} foods={dataProduct} />
      <Contact />
    </CommonLayout>
  );
}
