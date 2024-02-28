import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className=" text-center">
      <div className="container-fluid">
        <div className=" col-md-10 col-md-offset-1 section-title">
          <h2 className="">Funcionalidades</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3 className="pt-4">{d.title}</h3>
                  <p className="pt-2">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
