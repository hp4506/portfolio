import React from "react";

export const Features = (props) => {
  return (
    <div id="project1" className="text-center section-padding">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{props.data ? props.data.title : "Loading..."}</h2>
          <p>{props.data ? props.data.description : "Loading..."}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.features.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                <div className="feature-item glass-card reveal">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

