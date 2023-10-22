import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      { iconName: "flaticon-002-welding", tabMenuName: "Haircare" },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Nail Care"
      },
      { iconName: "flaticon-015-cart", tabMenuName: "Tools and Accessories" },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Organic/Natural" }
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "Haircare.jpg",
        contentTitle: "Haircare",
        contentDesc:
          "Shampoos, conditioners, styling products, and hair treatments.",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "NailCare.jpg",
        contentTitle: "Nail Care",
        contentDesc:
          "Nail polish, nail treatments, and manicure/pedicure tools",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "TA.jpg",
        contentTitle: "Tools and Accessories",
        contentDesc:
          "Makeup brushes, skincare tools, mirrors, and applicators",
        serviceLink: "service-details-left-sidebar"
      },
      {
        bgUrl: "ON.jpg",
        contentTitle: "Organic/Natural",
        contentDesc:
          "Products made from natural or organic ingredients.",
        serviceLink: "service-details-left-sidebar"
      }
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Focus <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
