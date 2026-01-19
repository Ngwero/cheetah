"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const NewsSlider = () => {
  return (
    <Slider
      {...sliderProps.newsCarouselActive}
      className="news-carousel-active"
    >
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              CheetahNet Team
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (12)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              Understanding Internet Speed: Mbps vs Real-World Performance
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("/assets/img/news/03.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              CheetahNet Team
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (08)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              The Benefits of Upgrading to Fiber Optic Internet
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("https://www.mgahinganationalpark.org/wp-content/uploads/2023/12/Kampala-City-2.jpg")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              CheetahNet Team
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (15)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              Streaming Services: How Much Internet Speed Do You Really Need?
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="news-card-items">
        <div
          className="news-image bg-cover"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop")' }}
        />
        <div className="news-content">
          <ul className="post-area">
            <li>
              <i className="far fa-user-circle" />
              CheetahNet Team
            </li>
            <li>
              <i className="fal fa-comments" />
              Comments (09)
            </li>
          </ul>
          <h5>
            <Link href="news-details">
              Business Internet Solutions: Choosing the Right Plan for Your Company
            </Link>
          </h5>
          <Link href="news-details" className="link-btn">
            <span>read more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </Slider>
  );
};
export default NewsSlider;
