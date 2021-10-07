import React from "react";

export default function Contact() {
  return (
    <div className='contact-imfo-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <i className='fa fa-volume-control-phone'></i>
            <div className='overflow-hidden'>
              <h4>Phone</h4>
              <p className='lead'>+84 985 789 577</p>
            </div>
          </div>
          <div className='col-md-4'>
            <i className='fa fa-envelope'></i>
            <div className='overflow-hidden'>
              <h4>Email</h4>
              <p className='lead'>tuananhcx2000@admin.com</p>
            </div>
          </div>
          <div className='col-md-4'>
            <i className='fa fa-map-marker'></i>
            <div className='overflow-hidden'>
              <h4>Location</h4>
              <p className='lead'>3 Cau Giay Street, HongKong Tower, HaNoi City, VietNam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
