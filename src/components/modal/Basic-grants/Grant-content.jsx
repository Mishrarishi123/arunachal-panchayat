"use client";

import { useState } from "react";
import "./GrantContent.css";
import DataTable from "../../ui/table/DataTable";
import DistrictDataTable from "../../ui/table/DistrictDataTable";
import DistrictGrid from "@/components/ui/DistrictGrid";

const GrantContent = ({ isOpen, onClose, type }) => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
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
        images: [],
        info: {
          name: "Performance Grants Program",
          status: "Active",
        },
      };
    }

    return null;
  };

  const grantData = getGrantData();
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

            <DistrictGrid
              selectedDistrict={selectedDistrict}
              onSelect={handleSelectDistrict}
              
            />

            {selectedDistrict && (
              <div className="district-popup">
                <h4 className="popup-district-title">
                  Report for {selectedDistrict}
                </h4>
                <div className="district-popup-content popup-table">
                  <DataTable />
                  <DistrictDataTable />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantContent;
