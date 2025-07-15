"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import "./DistrictReportCard.css";

export default function DistrictReportCard() {
  return (
    <div className="district-report-wrapper">
      <div className="district-card-map">
        {/* Header */}
        <div className="district-card-header">
          <h2 className="district-title">District: Papum Pare</h2>
          <p className="district-score">Score: 87/100 | Rank: 3rd</p>
          <p className="district-top-criteria">Top Criteria: UC, GeoTag, SHG</p>
        </div>

        {/* Content */}
        <div className="district-card-content">
          <div className="section-block">
            <h3 className="section-title">Scheme Summary</h3>
            <div className="section-text">
              <p>Total Schemes: 44</p>
              <div className="icon-row">
                <Loader2 className="icon-spinner" />
                <p>Completed: 11</p>
              </div>
              <p>Ongoing: 33</p>
              <div className="color-indicator green">
                <p>Total Budget (Completed): ₹23.5 Cr</p>
              </div>
              <div className="color-indicator red">
                <p>Total Budget (Ongoing): ₹23.5 Cr</p>
              </div>
            </div>
          </div>

          <div className="section-block">
            <p className="section-tags">
              Tags: <span className="tag purple">Infra</span>
              <span className="tag green">Green</span>
              <span className="tag red">Livelihood</span>
            </p>
          </div>

          <div className="section-block">
            <h3 className="section-title">Asset & Infra Summary</h3>
            <p className="section-text">Panchayat Bhawans: 5</p>
            <p className="section-text">Assets: 9 Revenue: ₹5.2L</p>
          </div>
        </div>

        {/* Footer */}
        <div className="district-footer">
          <p className="last-updated">Last Updated: 12 July 2025</p>
          <Button className="view-report-btn">
            [View Full District Report]
          </Button>
        </div>
      </div>
    </div>
  );
}
