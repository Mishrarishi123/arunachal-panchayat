"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Scheme.css";
import Modal from "../modal/Pb/Pb";
import Dprc from "../modal/Dprc/Dprc";
import GrantContent from "../modal/Basic-grants/Grant-content";
import TiedContent from "../modal/Tied-grants/Tied-content";
import { Button } from "@/components/ui/button";

const schemesData = [
  {
    title: "RGSA",
    color: "#32B400",
    itemColor: "#E8F5E8", // Light green for items
    items: ["Panchayat Bhavan", "DRPC"],
  },
  {
    title: "SOR",
    color: "#FF8A00",
    itemColor: "#FFF2E8", // Light orange for items
    items: ["Basic Grants", "Performance Grants"],
  },
  {
    title: "FC GRANTS",
    color: "#32B400",
    itemColor: "#E8F5E8", // Light green for items
    items: ["Tied Funds", "Untied Funds"],
  },
];

const Scheme = () => {
  const [showPBModal, setShowPBModal] = useState(false);
  const [showDRPCModal, setShowDRPCModal] = useState(false);
  const [selectedGrant, setSelectedGrant] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleDropdownToggle = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleItemClick = (item) => {
    if (item === "Panchayat Bhavan") setShowPBModal(true);
    else if (item === "DRPC") setShowDRPCModal(true);
    else if (
      item === "Basic Grants" ||
      item === "Performance Grants" ||
      item === "Tied Funds" ||
      item === "Untied Funds"
    )
      setSelectedGrant(item);
    setOpenDropdowns({});
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
        {schemesData.map((scheme, index) => {
          const isSOR = scheme.title === "SOR";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className={`dropdown-container ${
                  openDropdowns[index] ? "expanded" : ""
                }`}
                style={{
                  backgroundColor: "#fff",
                  minHeight: openDropdowns[index]
                    ? `${60 + scheme.items.length * 50}px`
                    : "60px",
                }}
              >
                {/* Dropdown Button */}
                <Button
                  variant="outline"
                  className="dropdown-button"
                  onClick={() => handleDropdownToggle(index)}
                  style={{
                    backgroundColor: scheme.color,
                    color: "#fff",
                  }}
                >
                  {scheme.title}
                  <span
                    className={`arrow ${openDropdowns[index] ? "rotate" : ""}`}
                    style={{ color: "#fff" }}
                  >
                    ›
                  </span>
                </Button>

                {/* Dropdown Items */}
                <div
                  className={`dropdown-content-inline ${
                    openDropdowns[index] ? "open" : ""
                  }`}
                >
                  {scheme.items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleItemClick(item)}
                      className="dropdown-item-inline"
                      style={{
                        backgroundColor: isSOR ? "#fff" : "#fff", // Light orange only for SOR
                        borderTop: `1px solid ${scheme.color}20`,
                      }}
                    >
                      <span style={{ color: scheme.color }}>{item}</span>
                      <span
                        className="arrow subtle"
                        style={{ color: scheme.color }}
                      >
                        ›
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Modal isOpen={showPBModal} onClose={() => setShowPBModal(false)} />
      <Dprc isOpen={showDRPCModal} onClose={() => setShowDRPCModal(false)} />
      <GrantContent
        isOpen={!!selectedGrant}
        onClose={() => setSelectedGrant(null)}
        type={selectedGrant}
      />
      <TiedContent
        isOpen={!!selectedGrant}
        onClose={() => setSelectedGrant(null)}
        type={selectedGrant}
      />
    </section>
  );
};

export default Scheme;
