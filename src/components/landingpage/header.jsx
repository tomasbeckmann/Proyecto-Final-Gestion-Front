import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="position-relative">
      <div className="intro bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-center fadeIn">
              <h1 className="text-black">
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p className="text-black fw-medium mb-5">
                {props.data ? props.data.paragraph : "Loading"}
              </p>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll mb-5"
              >
                Contactanos ahora!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};