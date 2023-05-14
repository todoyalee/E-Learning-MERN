import React, { Component } from "react";
import Swiper from "react-id-swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      renderPagenation: () => <div className="swiper-pagination" />
    };
    let data = [
      {
        testimonialImage: "3.jpg",
        testimonialName: "Alaaeddine abouda",
        testimonialDesignation: "Founder",
        testimonialText:
          "The product that wins is the one that bridges customers to the future, not the one that requires a giant leap."
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Mohamed Ali BELKOURI",
        testimonialDesignation: "Engineer",
        testimonialText:
          " As engineers, we were going to be in a position to change the world – not just study it"
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Asma reghimi ",
        testimonialDesignation: "Founder",
        testimonialText:
          "User experience is everything. It always has been, but it’s still undervalued and under-invested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole company on board."
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        
        <div className="swiper-slide testimonial-slider__single-slide" key={i}>
          <div className="author">
            <div className="author__image">
              <img
                src={`assets/img/testimonial/${val.testimonialImage}`}
                alt=""
              />
            </div>
            <div className="author__details">
              <h4 className="name">{val.testimonialName}</h4>
              <div className="designation">{val.testimonialDesignation}</div>
            </div>
          </div>
          <div className="content">{val.testimonialText}</div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <Swiper {...params}>{DataList}</Swiper>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
