import React, { useEffect, useState } from "react";
import { bannerImg } from "../asset/index.js";
import Banner from "../components/Banner.jsx";
import MenuBox from "../components/MenuBox.jsx";
import Slider from "../components/Slider.jsx";
import { productImg } from "../asset";
import CommonLayout from "../layouts/commonLayout.jsx";
import Contact from "../components/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetCater,
  actionGetFood,
  actionSearch,
  actionSetCurrentPage,
  getAllFood,
  getCategory,
  getCurrentFilter,
  getCurrentPage,
  getTotalPage,
} from "../redux/slice/food.js";
import RPagination from "../components/Pagination.jsx";
import { Container, Row } from "reactstrap";

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
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const totalPage = useSelector(getTotalPage);
  const category = useSelector(getCategory);
  const listFood = useSelector(getAllFood);
  const currentFilter = useSelector(getCurrentFilter);

  const handleClickPagination = (data) => {
    const page = (data < 1 && 1) || (data > totalPage && totalPage) || data;
    dispatch(actionSetCurrentPage(page));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearch((prev) => {
      dispatch(actionSearch(prev));
      return prev;
    });
  };

  useEffect(() => {
    dispatch(actionGetFood(currentPage));
    dispatch(actionGetCater());
  }, []);
  useEffect(() => {
    setSearch("");
  }, [currentFilter]);
  return (
    <CommonLayout>
      <div id='pt-6'></div>
      <Banner img={bannerImg.menu} content={"Special Menu"} author={""} center={true} />
      <MenuBox filter={category.slice(0, 4)} foods={listFood}>
        <div className='row py-3'>
          <div className='col col-6 search'>
            <input type='text' placeholder='Enter to search' value={search} onChange={handleSearch} />
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

      <Container>
        <Row>
          <RPagination currentPage={currentPage} totalPage={totalPage} handleClick={handleClickPagination} />
        </Row>
      </Container>

      <Banner img={bannerImg.home} content={content} author={author} />
      <Contact />
    </CommonLayout>
  );
}
