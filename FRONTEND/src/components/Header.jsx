import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoImg } from "../asset";
import { getNumberCart } from "../redux/slice/food";

export default function Header() {
  const numberCart = useSelector(getNumberCart);
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
                <a className='nav-link' href='about.html'>
                  Chi tiết
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className='icon__group'>
            <Link to='/menu'>
              <i className='fa fa-search'></i>
            </Link>
            <div id={"cart"}>
              <i className='fa fa-shopping-cart'></i>
              {numberCart !== 0 && <span>{numberCart}</span>}
            </div>
            <i className='fa fa-user'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
