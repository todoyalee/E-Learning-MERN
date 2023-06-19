import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class ServiceDetailsLeftSidebar extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Service Details</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Services</a></li>
                                        <li>Service Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">
                                {/* service gallery */}
                                <ServiceGallery/>

                                <div className="content section-space--top--30">
                                <div className="row">
                                    <div className="col-12">
                                    <h2>Test Types</h2>
                                    <p>Test types refer to the different approaches or methods used to test a product or system to ensure it meets the intended requirements, specifications, or user needs. Each test type has a specific purpose and is designed to identify different types of issues or defects that may exist in the system.

There are many test types, such as unit testing, functional testing, performance testing, security testing, usability testing, and more. Each test type typically involves a different set of activities, techniques, tools, and measures to assess the system's quality attributes, such as functionality, performance, reliability, maintainability, and usability.</p>
                                    <p>By using different test types, software developers, testers, and quality assurance professionals can systematically verify and validate the software product or system under test, and ensure that it meets the desired quality standards and user expectations.




</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Unit Testing</h3>
                                    <p>This is a type of testing where individual units or components of a software application are tested in isolation to ensure they are functioning as intended.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Functional Testing</h3>
                                    <p>This type of testing involves testing the functionality of the software application against specified requirements or user stories.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Performance Testing</h3>
                                    <p>This is a type of testing that measures how well a software application performs under specific conditions, such as high traffic or load.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Static Testing</h3>
                                    <p>This type of testing involves reviewing the software code or documentation without actually executing it to identify potential issues or defects.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Static Testing</h3>
                                    <p>This type of testing involves reviewing the software code or documentation without actually executing it to identify potential issues or defects.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Security Testing</h3>
                                    <p>This type of testing involves assessing the security of the software application, including identifying vulnerabilities and testing for potential attacks.</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>API Testing</h3>
                                    <p>This is a type of testing that involves testing the application programming interfaces (APIs) that allow different software components to communicate with each other, to ensure they are working correctly and returning the expected results.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-12 order-2 order-lg-1">
                                <Sidebar />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*Service section end*/}
                    </div>

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default ServiceDetailsLeftSidebar;