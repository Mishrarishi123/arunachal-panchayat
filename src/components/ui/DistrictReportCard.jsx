// "use client";

// import React, { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import "./DistrictReportCard.css"



// export default function DistrictReportCard({districtData ,onClose }) {
//   // Lock scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = ""; // Cleanup on unmount
//     };
//   }, []);

//   return (
//     // <div className="district-report-wrapper">
//     // </div>
//     <div className="district-card-map">
//       <button className="closeIcon" onClick={onClose} aria-label="Close">
//         ✕
//       </button>

//       {/* Header */}
//       <div className="district-card-header">
//         <h2 className="district-title">District: Papum Pare</h2>
//         <p className="district-score">Score: 87/100 | Rank: 3rd</p>
//         <p className="district-top-criteria">Top Criteria: UC, GeoTag, SHG</p>
//       </div>

//       {/* Content */}
//       <div className="district-card-content">
//         <div className="section-block">
//           <h3 className="section-title">Scheme Summary</h3>
//           <div className="section-text">
//             <p>Total Schemes: 44</p>
//             <div className="icon-row">
//               <Loader2 className="icon-spinner" />
//               <p>Completed: 11</p>
//             </div>
//             <p>Ongoing: 33</p>
//             <div className="color-indicator green">
//               <p>Total Budget (Completed): ₹23.5 Cr</p>
//             </div>
//             <div className="color-indicator red">
//               <p>Total Budget (Ongoing): ₹23.5 Cr</p>
//             </div>
//           </div>
//         </div>

//         <div className="section-block">
//           <p className="section-tags">
//             Tags:
//             <span className="tag purple">Infra</span>
//             <span className="tag green">Green</span>
//             <span className="tag red">Livelihood</span>
//           </p>
//         </div>

//         <div className="section-block">
//           <h3 className="section-title">Asset & Infra Summary</h3>
//           <p className="section-text">Panchayat Bhawans: 5</p>
//           <p className="section-text">Assets: 9 Revenue: ₹5.2L</p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="district-footer">
//         <p className="last-updated">Last Updated: 12 July 2025</p>
//         <Button className="view-report-btn">[View Full District Report]</Button>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import "./DistrictReportCard.css";

export default function DistrictReportCard({ districtData, onClose }) {
  if (!districtData) return null;

  const {
    name,
    score,
    rank,
    topCriteria,
    totalSchemes,
    completedSchemes,
    ongoingSchemes,
    completedBudget,
    ongoingBudget,
    tags,
    panchayatBhawans,
    assets,
    revenue,
    lastUpdated,
  } = districtData;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="district-card-map">
      <button className="closeIcon" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <div className="district-card-header">
        <h2 className="district-title">District: {name}</h2>
        <p className="district-score">
          Score: {score}/25 | Rank: {rank}
        </p>
        <p className="district-top-criteria">Top Criteria: {topCriteria}</p>
      </div>

      <div className="district-card-content">
        <div className="section-block">
          <h3 className="section-title">Scheme Summary</h3>
          <p>Total Schemes: {totalSchemes}</p>
          <div className="icon-row">
            <Loader2 className="icon-spinner" />
            <p>Completed: {completedSchemes}</p>
          </div>
          <p>Ongoing: {ongoingSchemes}</p>
          <div className="color-indicator green">
            <p>Total Budget (Completed): {completedBudget}</p>
          </div>
          <div className="color-indicator red">
            <p>Total Budget (Ongoing): {ongoingBudget}</p>
          </div>
        </div>

        <div className="section-block">
          <p className="section-tags">
            Tags:{" "}
            {tags.map((tag, idx) => (
              <span key={idx} className={`tag ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </p>
        </div>

        <div className="section-block">
          <h3 className="section-title">Asset & Infra Summary</h3>
          <p>Panchayat Bhawans: {panchayatBhawans}</p>
          <p>
            Assets: {assets} | Revenue: {revenue}
          </p>
        </div>
      </div>

      <div className="district-footer">
        <p className="last-updated">Last Updated: {lastUpdated}</p>
        <Button className="view-report-btn">[View Full District Report]</Button>
      </div>
    </div>
  );
}

