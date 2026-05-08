import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a
                href="#project1"
                className="btn btn-custom btn-lg page-scroll"
              >
                View My Work
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

