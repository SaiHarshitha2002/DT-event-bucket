import React from "react";
import { Link, Outlet } from "react-router-dom";
import image10 from "../images/Image1.svg";
import image20 from "../images/Corosulimage2.svg";
import image30 from "../images/Corosulimage3.svg";
import image4 from "../images/livewire.jpg";
import image5 from "../images/nrithya tarag.jpg";
import image6 from "../images/stentorion.jpg";
import image7 from "../images/vjteatro.jpg";
import image1 from "../images/creative arts.jpg";
import image2 from "../images/diurnalis.jpg";
import image3 from "../images/dramatrix.jpg";
import image8 from "../images/turinghut.jpg";
import image9 from "../images/cresendo.jpg";

import { Carousel } from "react-bootstrap";
function Home() {
  return (
    <div>
      <div className="container-md mt-3">
      <div
              className="border border-5  rounded-pill border-primary"
              style={{ borderColor: "red" }}
            >
              <ul className="nav mx-auto justify-content-evenly ">
                <li className="nav-item " style={{color:"green"}}>
                  <Link className="nav-link  " to="all">
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="work">
                    VJ Teatro
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="personal">
                  Live Wire
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="wishlist">
                  Nritya Tarang
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="birthdays">
                  Diurnalis
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="creativeArts">
                    CreativeArts
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="cresendo">
                    Cresendo
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="dramatrix">
                    Dramatrix
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="scintillate">
                    Stentorian
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="turinghut">
                    Turing Hut
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link " to="SpecialEvents">
                    Special Events
                  </Link>
                </li>
              </ul>
            </div>
           
        <div className="row Link">
          <div className="col-sm-4" style={{ minHeight: "400px" }}>
            <Carousel fade>
              <Carousel.Item interval={3000}>
                <img
                  src={image1}
                  alt="#"
                  className="w-100 mt-5 "
                  style={{ minHeight: "350px"}}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image2}
                  alt="#"
                  className="w-100 mt-5 "
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image3}
                  alt="#"
                  className="w-100 mt-5"
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image4}
                  alt="#"
                  className="w-100  mt-5"
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image5}
                  alt="#"
                  className="w-100 mt-5"
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image6}
                  alt="#"
                  className=" mt-5"
                  style={{ minHeight: "350px",width:"400px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image7}
                  alt="#"
                  className="w-100 mt-5"
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image8}
                  alt="#"
                  className=" mt-5"
                  style={{ minHeight: "350px",width:"400px" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  src={image9}
                  alt="#"
                  className="w-100 mt-5"
                  style={{ minHeight: "350px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-sm-8">
          <div>
              <Outlet />
            </div>
          </div>
        </div>
        <div className="display-1"></div>
      </div>
    </div>
  );
}

export default Home;
