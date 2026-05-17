import React from "react";

export const Services = (props) => {
  return (
    <div id="project2" className="text-center section-padding">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Loading..."}</h2>
          <p>{props.data ? props.data.description : "Loading..."}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.features.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="feature-item glass-card reveal">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

