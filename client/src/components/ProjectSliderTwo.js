import React, { Component } from "react";
import Swiper from "react-id-swiper";

class ServiceGridSlider extends Component {
  render() {
    const params = {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1000
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        767: {
          slidesPerView: 1
        },

        575: {
          slidesPerView: 1
        }
      }
    };
    let data = [
      {
        img: "la.jpeg",
        serviceTitle: "risk management",
        serviceExcerpt:
          "Risk management is the process of identifying, assessing, and prioritizing risks and then taking measures to minimize, monitor, and control those risks. It is a critical part of project management, business operations, and overall organizational strategy. ",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img: "A.jpg",
        serviceTitle: "automated managements of the risks",
        serviceExcerpt:
          "Automation management of risks is the process of identifying and assessing the risks associated with automating business processes, systems, or applications, and then implementing strategies to minimize those risks. Automation has the potential to bring significant benefits to organizations, including increased efficiency, accuracy, and consistency. ",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img: "am3.png",
        serviceTitle: "Automated Protection",
        serviceExcerpt:
          "“You’re either the one that creates the automation or you’re getting automated.Automated protection in programming refers to the use of automated tools and techniques to identify and mitigate potential security vulnerabilities in software applications.",
        serviceUrl: "service-details-left-sidebar"
      },
      {
        img: "service1.jpg",
        serviceTitle: "cypress",
        serviceExcerpt:
          "Cypress is an open-source end-to-end testing framework for web applications. It is a JavaScript-based testing tool that enables developers to write tests in a simple and understandable way. Cypress is designed to be easy to use and offers many useful features such as real-time reloading, automatic waiting, and debugging tools.",
        serviceUrl: "service-details-left-sidebar"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  <img
                    src={`assets/img/service/${val.img}`}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceExcerpt}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  project grid slider area ====================*/}
        <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title mb-0">
                    Latest Tutorials <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-grid-slider-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-slider">
                  <div className="service-slider__container service-slider__container--style2">
                    <Swiper {...params}>{DataList}</Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of project grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;
