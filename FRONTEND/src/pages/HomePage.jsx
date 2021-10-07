import React from "react";
import CommonLayout from "../layouts/commonLayout.jsx";
import { bannerImg } from "../asset";
import Banner from "../components/Banner.jsx";
import Contact from "../components/Contact.jsx";
import Slider from "../components/Slider.jsx";
import About from "../components/About.jsx";
import { sliderImg } from "../asset";
import MenuBox from "../components/MenuBox.jsx";

const arrImage = [sliderImg.one, sliderImg.two, sliderImg.three];

export default function HomePage() {
  const content = " If you're not the one cooking, stay out of the way and compliment the chef. ";
  const author = "Michael Strahan";
  return (
    <CommonLayout>
      <Slider arrImage={arrImage} />
      <About />
      <Banner img={bannerImg.home} content={content} author={author} />
      <MenuBox />
      <Contact />
    </CommonLayout>
  );
}
