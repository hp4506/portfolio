import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="project3" className="text-center section-padding">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Loading..."}</h2>
          <p>{props.data ? props.data.description : "Loading..."}</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.items.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="glass-card reveal" style={{ margin: '15px', padding: '10px' }}>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

