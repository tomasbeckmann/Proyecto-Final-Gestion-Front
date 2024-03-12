import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 about-text d-flex justify-content-center">
            {" "}
            <img src="img/about.jpg" className="img-fluid" alt="" />{" "}
          </div>
          <div className="col-xs-12 fs-3 col-md-6">
            <div className="about-text text-center">
              <h2>Acerca de nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
