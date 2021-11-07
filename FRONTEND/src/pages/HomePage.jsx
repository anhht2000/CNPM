import React, { useEffect, useState } from "react";
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
import { actionSetNumberCart, getCurrentFood } from "../redux/slice/food.js";
import EModal from "../components/EModal.jsx";

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
  const content = " Rẻ như bèo, nghèo cũng có tiền mua. ";
  const author = "-Tuấn Anh";
  const currentFood = useSelector(getCurrentFood);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listFood = useSelector(getFoodShow);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(actionGetTop());
  }, []);

  return (
    <CommonLayout>
      <Slider arrImage={arrImage} />
      <About />
      <Banner img={bannerImg.home} content={content} author={author} />
      <MenuBox homeFil={filter} foods={listFood} handleOpenModal={handleOpenModal} />
      <Contact />

      <EModal open={open} handleClose={handleCloseModal} food={currentFood} />
    </CommonLayout>
  );
}
