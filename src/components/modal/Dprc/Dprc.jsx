"use client";

import { useState } from "react";
import "./Dprc.css";
import Image from "next/image";

/**
 * DRPC Modal Component
 * @param {{ isOpen: boolean, onClose: function }} props
 */
const Dprc = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample DRPC data - replace with your actual data
  const drpcImages = [
    {
      id: 1,
      src: "/images/drpc1.png",
      alt: "DRPC 1",
    },
    {
      id: 2,
      src: "/images/drpc2.png",
      alt: "DRPC 2",
    },
    {
      id: 3,
      src: "/images/drpc3.png",
      alt: "DRPC 3",
    },
    {
      id: 4,
      src: "/images/drpc4.png",
      alt: "DRPC 4",
    },
  ];

  const districts = [
    "Central District",
    "Northern District",
    "Southern District",
    "Eastern District",
    "Western District",
    "Metropolitan District",
    "Suburban District",
    "Coastal District",
  ];

  const drpcInfo = {
    name: "District Resource Person Cluster",
    status: "Active",
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  const [selectedDistrict, setSelectedDistrict] = useState("District Name");

  return (
    <div className="dprc-overlay">
      <div className="dprc-content">
        <div className="image-grid">
          <button className="pb-close" onClick={onClose}>
            ✕
          </button>
          <div className="content-dprc">
            <div>
              <h1 className="pb-title">RGSA</h1>
              <div className="dprc-horizontal-line"></div>
              <h2 className="pb-subtitle">
                DISTRICT PANCHAYAT RESOURCE CENTER
              </h2>
              <p className="pb-description">
                Here you can see the images of Panchayat
                <br /> Bhawan of your district
              </p>
            </div>

            <div className="district-dropdown w-full max-w-sm">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="district-cont w-full justify-between h-12 px-4 text-left font-normal bg-transparent"
                  >
                    <h1 className="text-lg font-medium text-gray-900">
                      {selectedDistrict}
                    </h1>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)]">
                  {districts.map((district) => (
                    <DropdownMenuItem
                      key={district}
                      onClick={() => setSelectedDistrict(district)}
                      className="cursor-pointer"
                    >
                      {district}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="cont-img">
              {drpcImages.map((image) => (
                <div
                  key={image.id}
                  className="image-card"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={250}
                    height={50}
                    className="image-thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dprc;
