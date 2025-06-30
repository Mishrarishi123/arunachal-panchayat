"use client";
import React from "react";
import "./About.css";
import Image from "next/image";
// import { motion } from "framer-motion";

const Scheme = () => {
  return (
    <section className="about-section">
      <div className="about-overlay-left" />
      <div className="about-overlay-right" />
      <div className="about-container">
        <div className="heading-content">
          <h1>KNOW YOUR PANCHAYAT</h1>
          <p>
            Government schemes in India are initiatives designed to address
            various social and economic issues, offering benefits to specific
            <br />
            target groups. These schemes can be central, state-specific, or a
            combination of both, and cover a wide range of areas including
            <br />
            social security, healthcare, education, and financial inclusion. 
          </p>
        </div>
      </div>

      <div className="videos-container">
        <div className="containers">
          <div className="container-1">
            <div className="video-link">
              <h1>Video links</h1>
            </div>
            <div className="discription-videos">
              <div className="playvideo">
                {" "}
                <div className="video-panchayat">
                  {" "}
                  <img src="/images/videolink.png" alt="" />
                  <div className="playbutton">
                    <img src="/images/playbutton.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="inner-content">
                <h5>Panchayat Bhawan imaugurated</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>
              </div>
              <div className="playvideo">
                {" "}
                <div className="video-panchayat">
                  {" "}
                  <img src="/images/videolink.png" alt="" />
                  <div className="playbutton">
                    <img src="/images/playbutton.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containers">
          <div className="container-2">
            <div className="panchayati-raaj">
              <h1>Videos of Panchayati Raaj</h1>
            </div>

            <div className="video-raaj">
              <div className="video-card">
                <div className="thumbnail">
                  <img src="/images/panchayati.png" alt="Thumbnail" />
                  <div className="play-icon">
                    <img src="/images/playbutton.svg" alt="Play" />
                  </div>
                </div>
                <div className="video-info">
                  <h4>Panchayat Bhavan inaugurated</h4>
                  <p>
                    Lorem Ipsum is simply dummy
                    <br /> text of the printing and
                    <br />
                    typesetting.
                  </p>
                </div>
              </div>

              <div className="video-card">
                <div className="thumbnail">
                  <img src="/images/panchayati.png" alt="Thumbnail" />
                  <div className="play-icon">
                    <img src="/images/playbutton.svg" alt="Play" />
                  </div>
                </div>
                <div className="video-info">
                  <h4>Panchayat Bhavan inaugurated</h4>
                  <p>
                    Lorem Ipsum is simply dummy
                    <br /> text of the printing and
                    <br />
                    typesetting.
                  </p>
                </div>
              </div>

              <div className="video-card">
                <div className="thumbnail">
                  <img src="/images/panchbhawan.png" alt="Thumbnail" />
                  <div className="play-icon">
                    <img src="/images/playbutton.svg" alt="Play" />
                  </div>
                </div>
                <div className="video-info">
                  <h4>Panchayat Bhavan inaugurated</h4>
                  <p>
                    Lorem Ipsum is simply dummy
                    <br /> text of the printing and
                    <br />
                    typesetting.
                  </p>
                </div>
              </div>

              <div className="video-card">
                <div className="thumbnail">
                  <img src="/images/panchbhawan.png" alt="Thumbnail" />
                  <div className="play-icon">
                    <img src="/images/playbutton.svg" alt="Play" />
                  </div>
                </div>
                <div className="video-info">
                  <h4>Panchayat Bhavan inaugurated</h4>
                  <p>
                    Lorem Ipsum is simply dummy
                    <br /> text of the printing and
                    <br />
                    typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containers">
          <div className="container-3">
            <div className="orders">
              <h1>Orders-circulars</h1>
            </div>

            <div className="content-3">
              <div className="inner-content-3">
                <h5>Atma nirbhar Krishi Yojna</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>

                <button className="read-more">
                  <p>Read More</p>
                  <img src="/images/arrow.svg" alt="" />
                </button>
                <div className="horizontal-line"></div>
              </div>

              <div className="inner-content-3">
                <h5>Atma nirbhar Krishi Yojna</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>
                <button className="read-more">
                  <p>Read More</p>
                  <img src="/images/arrow.svg" alt="" />
                </button>
                <div className="horizontal-line"></div>
              </div>

              <div className="inner-content-3">
                <h5>Atma nirbhar Krishi Yojna</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>
                <button className="read-more">
                  <p>Read More</p>
                  <img src="/images/arrow.svg" alt="" />
                </button>
                <div className="horizontal-line"></div>
              </div>

              <div className="inner-content-3">
                <h5>Atma nirbhar Krishi Yojna</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>
                <button className="read-more">
                  <p>Read More</p>
                  <img src="/images/arrow.svg" alt="" />
                </button>
                <div className="horizontal-line"></div>
              </div>

              <div className="inner-content-3">
                <h5>Atma nirbhar Krishi Yojna</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  <br /> and typesetting.
                </p>
                <button className="read-more">
                  <p>Read More</p>
                  <img src="/images/arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheme;
