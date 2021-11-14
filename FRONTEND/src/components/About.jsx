import React from "react";
import { aboutImg } from "../asset";

export default function About() {
  return (
    <div className='about-section-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src={aboutImg.home} alt='' className='img-fluid' />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
            <div className='inner-column'>
              <h1>
                Xin chào đến với hệ thống <span>BHAfood</span>
              </h1>
              <h4>Câu chuyện về cửa hàng</h4>
              <p>
                Thức ăn nhanh hay còn gọi là fast-food được xem là thức ăn giúp tiết kiệm thời gian, loại thức ăn tiện
                lợi có thể ăn ngay, thức ăn được chế biến sẵn hoặc không tốn nhiều nhiều thời gian để chế biến, thức ăn
                được phục vụ nhanh, có thể ngồi tại chỗ ăn ngay hoặc mang đi và đáp ứng những nhu cầu ăn uống cơ bản
                nhất của con người.
              </p>
              <p>
                Chuỗi cửa hàng của chúng tôi ra đời nhằm chứng minh những gì nước ngoài làm được thì người Việt cũng
                hoàn toàn có thể.Chúng tôi luôn đặt chất lượng và thái độ của khách hàng lên hàng đầu. Vì vậy bạn có thể
                hoàn toàn tin tưởng vào chất lượng thực phẩm của chúng tôi.
              </p>
              <a className='btn btn-lg btn-circle btn-outline-new-white' href='#'>
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
