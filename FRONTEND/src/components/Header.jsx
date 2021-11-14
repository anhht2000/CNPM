import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { logoImg } from "../asset";
import { actionSetNumberCart, getNumberCart } from "../redux/slice/food";
import { actionSetLogin, checkLogin } from "../redux/slice/home";

export default function Header() {
  const numberCart = useSelector(getNumberCart);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector(checkLogin);
  const handleLogout = () => {
    dispatch(actionSetLogin(false));
    history.push("/login");
  };
  useEffect(() => {
    const number = JSON.parse(localStorage.getItem("numberFood")) || 0;
    dispatch(actionSetNumberCart(number));
  }, [numberCart]);
  return (
    <header className='top-navbar'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <img src={logoImg.logo} alt='' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbars-rs-food'
            aria-controls='navbars-rs-food'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbars-rs-food'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item '>
                <NavLink to='/' activeClassName='link--active' exact className='nav-link'>
                  Trang chủ
                </NavLink>
              </li>
              <li className='nav-item '>
                <NavLink to='/menu' activeClassName='link--active' className='nav-link'>
                  Thực đơn
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/add-to-cart' activeClassName='link--active' className='nav-link'>
                  Chi tiết hóa đơn
                </NavLink>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className='icon__group d-lg-flex align-items-center d-none'>
            <Link to='/menu'>
              <i className='fa fa-search'></i>
            </Link>
            <Link to='/add-to-cart'>
              <div id={"cart"}>
                <i className='fa fa-shopping-cart'></i>
                {numberCart !== 0 && <span>{numberCart}</span>}
              </div>
            </Link>
            {isLogin ? (
              <div className='login'>
                <div className='d-flex align-items-center cursor-pointer ms-3'>
                  <img
                    src='https://i.picsum.photos/id/166/200/300.webp?hmac=oQFdz1K0cxOrp0xV0q2_qKTY5JqF-JMzC5pCtUs2He8'
                    alt=''
                    className='avt'
                  />
                  <p style={{ color: "#210101", paddingLeft: "5px", marginBottom: "0" }}>
                    {localStorage.getItem("name")}
                  </p>
                </div>
                <ul className='sub__avt'>
                  <li
                    className='sub__avt-item'
                    onClick={() => {
                      history.push("/history-receipt");
                    }}
                  >
                    Đơn hàng đã mua
                  </li>
                  <li className='sub__avt-item' onClick={handleLogout}>
                    Đăng xuất
                  </li>
                </ul>
              </div>
            ) : (
              <i className='fa fa-user' onClick={() => history.push("/login")}></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
