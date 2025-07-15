"use client";
import { useState, useEffect } from "react";
import "./GrantContent.css";
import DataTable from "../../ui/table/DataTable"
import DistrictDataTable from "../../ui/table/DistrictDataTable";
const GrantContent = ({ isOpen, onClose, type }) => {
const [showDistrictPopup, setShowDistrictPopup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districtData = {
    "District-1": {},
    "District-2": {},
    "District-3": {},
    "District-4": {},
    "District-5": {},
    "District-6": {},
    "District-7": {},
    "District-8": {},
    "District-9": {},
    "District-10": {},
    "District-11": {},
    "District-12": {},
    "District-13": {},
    "District-14": {},
    "District-15": {},
  };

  const getGrantData = () => {
    const normalizedType = type?.toLowerCase();
    if (normalizedType === "basic grants") {
      return {
        title: "SOR",
        subtitle: "BASIC GRANTS",
        images: [
          { id: 1, src: "/images/drpc1.png", alt: "Basic Grant Allocation 1" },
          {
            id: 2,
            src: "/images/drpc2.png",
            alt: "Basic Grant Distribution 2",
          },
          { id: 3, src: "/images/drpc3.png", alt: "Basic Grant Report 3" },
          { id: 4, src: "/images/drpc4.png", alt: "Basic Grant Summary 4" },
        ],
        info: {
          name: "Basic Grants Program",
          status: "Active",
        },
      };
    } else if (normalizedType === "performance grants") {
      return {
        title: "SOR",
        subtitle: "TOP 15 DISTRICTS",
        images: [
          {
            id: 1,
            alt: "Performance Grant Metrics 1",
          },
          {
            id: 2,
            alt: "Performance Grant Results 2",
          },
          {
            id: 3,
            alt: "Performance Grant Analysis 3",
          },
          {
            id: 4,
            alt: "Performance Grant Dashboard 4",
          },
        ],
        info: {
          name: "Performance Grants Program",
          status: "Active",
        },
      };
    }

    return null;
  };

  const grantData = getGrantData();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
    setDropdownOpen(false);
    setShowDistrictPopup(true); // show the popup
  };

  if (!isOpen || !grantData) return null;

  return (
    <div className="grant-overlay">
      <div className="grant-content">
        <div className="image-grid">
          <button className="grant-close" onClick={onClose}>
            ✕
          </button>
          <div className="content-grant">
            <div>
              <h1 className="grant-title">{grantData.title}</h1>
              <div className="grant-horizontal-line"></div>
              <h2 className="grant-subtitle">{grantData.subtitle}</h2>
            </div>

            <div className="pb-dropdown">
              <div className="district-name" onClick={toggleDropdown}>
                <h1>{selectedDistrict || "Select District"}</h1>
                <img src="/images/dropdown.svg" alt="dropdown arrow" />
              </div>
              {dropdownOpen && (
                <ul className="dropdown-list">
                  {Object.keys(districtData).map((district) => (
                    <li
                      key={district}
                      onClick={() => handleSelectDistrict(district)}
                    >
                      {district}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {showDistrictPopup && (
              <div className="district-popup">
                <div className="district-popup-content popup-table">
                  {/* <button
                    className="close-btn"
                    onClick={() => setShowDistrictPopup(false)}
                  >
                    ✕
                  </button> */}
                  <DataTable />
                  <DistrictDataTable />
                </div>
              </div>
            )}

            {/* <div className="cont-img">
              {grantData.images.map((image) => (
                <div
                  key={image.id}
                  className="image-card"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={250}
                    height={150}
                    className="image-thumbnail"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantContent;
