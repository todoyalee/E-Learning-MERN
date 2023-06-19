import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    /* sidebar popular post */

    let popularPostData = [
      {
        postImage: "pi.png",
        postTitle: "PipelineCI/CD",
        postLink: "PipelineCI/CD",
        postDate: "30 October 2019"
      },
      {
        postImage: "r1.jpeg",
        postTitle: "Risks and Problems",
        postLink: "blog-details-left-sidebar",
        postDate: "30 October 2019"
      },
      {
        postImage: "t8.png",
        postTitle: "Service Connections",
        postLink: "blog-details-left-sidebar",
        postDate: "30 October 2019"
      }
    ];

    let popularPostDataList = popularPostData.map((val, i) => {
      return (
        <div className="sidebar-blog" key={i}>
          <a href="blog-details-left-sidebar.html" className="image">
            <img src={`assets/img/blog/${val.postImage}`} alt="" />
          </a>
          <div className="content">
            <h5>
              <a href={`${process.env.PUBLIC_URL}/${val.postLink}`}>
                {val.postTitle}
              </a>
            </h5>
            <span>{val.postDate}</span>
          </div>
        </div>
      );
    });

    /* sidebar tag */

    let tagData = [
      { tagLink: "blog-left-sidebar", tagName: "Operational Risks" },
      { tagLink: "blog-left-sidebar", tagName: "Technical Risks" },
      { tagLink: "blog-left-sidebar", tagName: "Programmatic Risks	      " },
      { tagLink: "blog-left-sidebar", tagName: "Game Development" },
      { tagLink: "blog-left-sidebar", tagName: "Schedule risks" },
      { tagLink: "blog-left-sidebar", tagName: "Budget Risk	      " },
      { tagLink: "blog-left-sidebar", tagName: "Planning Risks	      " }
    ];

    let tagDataList = tagData.map((val, i) => {
      return (
        <li key={i}>
          <a href={`${process.env.PUBLIC_URL}/${val.tagLink}`}>{val.tagName}</a>
        </li>
      );
    });

    return (
      <div>
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3 className="sidebar-title">Popular Post</h3>
            {popularPostDataList}
          </div>
          <div className="sidebar">
            <h3 className="sidebar-title">Risk Types</h3>
            <ul className="sidebar-tag">{tagDataList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
