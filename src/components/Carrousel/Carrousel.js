import React from "react";
import "./carrousel.css";

export const Carrousel = () => {
    return (
        <div className="container" >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active d-flex justify-content-between">
              <iframe src="https://www.youtube.com/embed/DHEchgj9y0M" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/PgCdVWFkVfk" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/lPsnEleNc40" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/Z-ZE3cnmcMc" frameborder="0"></iframe>
            </div>
            <div className="carousel-item d-flex justifiy-content-between">
              <iframe src="https://www.youtube.com/embed/bftLben94go" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/xwEt2hgpMO8" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/htXEEVkiIJ0" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/go1DNIw78jU" frameborder="0"></iframe>
            </div>
            <div className="carousel-item d-flex justifiy-content-between">
              <iframe src="https://www.youtube.com/embed/aLh8jlYYvZA" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/2-uu9yrVaDE" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/Ye9ckbN_lqc" frameborder="0"></iframe>
              <iframe src="https://www.youtube.com/embed/SKsJFBks0Xw" frameborder="0"></iframe>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        </div>
        )
    }