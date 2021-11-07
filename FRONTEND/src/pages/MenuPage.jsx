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
  actionSetFilterAll,
  getAllFood,
  getCategory,
  getCurrentFilter,
  getCurrentFood,
  getCurrentPage,
  getFilter,
  getTotalPage,
} from "../redux/slice/food.js";
import RPagination from "../components/Pagination.jsx";
import { Container, Row } from "reactstrap";
import EModal from "../components/EModal.jsx";

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
  const content = " Mọi hạnh phúc trên đời đều xuất phát từ một bữa sáng nhàn nhã.. ";
  const author = "-Tiến Bắc";
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const totalPage = useSelector(getTotalPage);
  const category = useSelector(getCategory);
  const listFood = useSelector(getAllFood);
  const currentFood = useSelector(getCurrentFood);
  const currentFilter = useSelector(getCurrentFilter);
  const filter = useSelector(getFilter);

  const handleClickPagination = (data) => {
    const page = (data < 1 && 1) || (data > totalPage && totalPage) || data;
    dispatch(actionSetCurrentPage({ page, currentFilter }));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearch((prev) => {
      dispatch(actionSearch(prev));
      return prev;
    });
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    const newFilter = { ...filter, [name]: value };
    dispatch(actionSetFilterAll(newFilter));
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
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
      <Banner img={bannerImg.menu} content={"Thực đơn đặc biệt"} author={""} center={true} />
      <MenuBox filter={category.slice(0, 4)} foods={listFood} handleOpenModal={handleOpenModal}>
        <div className='row py-3'>
          <div className='col col-6 search'>
            <input type='text' placeholder='Nhập để tìm kiếm' value={search} onChange={handleSearch} />
            {/* <i className='fa fa-search icon'></i> */}
          </div>
          <div className='col col-6 filter'>
            <div className='d-inline-flex justify-content-end w-100'>
              <select name='price' value={filter?.price} onChange={handleChange}>
                <option value=''>Giá tiền</option>
                <option value='asc'>Từ thấp - cao</option>
                <option value='desc'>Từ cao - thấp</option>
              </select>
            </div>
          </div>
        </div>
      </MenuBox>

      {totalPage > 1 && (
        <Container>
          <Row>
            <RPagination currentPage={currentPage} totalPage={totalPage} handleClick={handleClickPagination} />
          </Row>
        </Container>
      )}
      <Banner img={bannerImg.home} content={content} author={author} />
      <Contact />

      <EModal open={open} handleClose={handleCloseModal} food={currentFood} />
    </CommonLayout>
  );
}
