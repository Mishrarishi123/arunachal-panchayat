"use client";
import React from "react";
import "./About.css";
import Image from "next/image";
import { useRef } from "react";
import { Play } from "lucide-react";

// import { motion } from "framer-motion";

const videoData = [
  {
    id: 1,
    title: "Panchayat Bhawan inaugurated",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    thumbnail: "/images/videolink.png",
  },
  {
    id: 2,
    title: "Community Development Program",
    description:
      "New initiatives for rural development and community growth programs.",
    thumbnail: "/images/videolink.png",
  },
  {
    id: 3,
    title: "Digital India Initiative",
    description:
      "Implementing digital solutions for better governance and services.",
    thumbnail: "/images/videolink.png",
  },
  {
    id: 4,
    title: "Healthcare Awareness Campaign",
    description:
      "Promoting health and wellness in rural communities across the region.",
    thumbnail: "/images/videolink.png",
  },
  {
    id: 5,
    title: "Education Reform Program",
    description:
      "Enhancing educational infrastructure and quality in local schools.",
    thumbnail: "/images/videolink.png",
  },
];

const About = () => {

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };
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

      <div className="video-slider-container">
        <div className="video-slider-header">
          <h1 className="video-slider-title">Video Links</h1>
          <div className="video-slider-title-underline"></div>
        </div>

        <div className="slider-wrapper">
          {/* Navigation Buttons */}
          <button
            className="nav-button nav-button-left"
            onClick={scrollLeft}
            aria-label="Previous videos"
          >
            <span className="arrow rotate-left">›</span>
          </button>

          <button
            className="nav-button nav-button-right"
            onClick={scrollRight}
            aria-label="Next videos"
          >
            <span className="arrow subtle">›</span>
          </button>

          {/* Slider Container */}
          <div ref={scrollContainerRef} className="slider-container">
            {videoData.map((video) => (
              <div key={video.id} className="video-card">
                {/* Video Thumbnail */}
                <div className="video-thumbnail">
                  <Image
                    src={video.thumbnail || "/images/videolink.png"}
                    alt={video.title}
                    fill
                    className="video-image"
                  />

                  {/* Play Button Overlay */}
                  <div className="play-overlay">
                    <div className="play-button">
                      <Play className="play-icon" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Video Content */}
                <div className="video-content">
                  <h5 className="video-title">{video.title}</h5>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="videos-container">
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
      </div> */}
    </section>
  );
};

export default About;
