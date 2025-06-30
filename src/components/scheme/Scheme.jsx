"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Scheme.css";
import Modal from "../modal/Pb/Pb" // Import the CSS

const schemesData = [
  {
    title: "RGSA",
    color: "#32B400", // green
    items: ["Panchayat Bhavan", "DPRC"],
  },
  {
    title: "SOR",
    color: "#FF8A00", // orange
    items: ["Basic Grants", "Performance Grants"],
  },
  {
    title: "FC GRANTS",
    color: "#32B400", // green
    items: ["Tied Funds", "Untied Funds"],
  },
];

const Scheme = () => {

  const [showPBModal, setShowPBModal] = useState(false);

  const handleItemClick = (item) => {
    if (item === "Panchayat Bhavan", "DRPC") {
      setShowPBModal(true);
    } else {
      console.log("Clicked item:", item);
    }
  };

 
  return (
    <section className="schemes-section">
      <div className="scheme-overlay-left" />

      <div className="scheme-overlay-right" />
      <motion.h2
        className="schemes-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        SCHEMES
      </motion.h2>

      <motion.p
        className="schemes-description"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Government schemes in India are initiatives designed to address various
        social and economic issues, offering benefits to specific target groups.
        <br />
        These schemes can be central, state-specific, or a combination of both,
        and cover a wide range of areas including social security, healthcare,
        education, and
        <br />
        financial inclusion.
      </motion.p>

      <div className="schemes-cards">
        {schemesData.map((scheme, index) => (
          <motion.div
            className="scheme-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: index * 0.2, // 🔥 Stagger effect
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div
              className="scheme-header"
              style={{ backgroundColor: scheme.color }}
            >
              {scheme.title}
            </div>

            <ul className="scheme-list">
              {scheme.items.map((item, i) => (
                <li key={i} className="scheme-item">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevent default anchor navigation
                      handleItemClick(item);
                    }}
                    className="scheme-link"
                  >
                    <span>{item}</span>
                    <span className="arrow">›</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <Modal isOpen={showPBModal} onClose={() => setShowPBModal(false)} />
      </div>
    </section>
  );
};

export default Scheme;
