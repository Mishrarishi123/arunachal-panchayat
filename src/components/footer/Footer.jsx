"use client";
import { motion } from "framer-motion";


import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer">
        <motion.div
          className="footer-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div
            className="footer-image"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <img src="./images/footer.svg" alt="" />
            <h1>
              PANCHAYATI RAJ
              <br />
              REVENUE
            </h1>
          </motion.div>

          <div className="footer-content">
            {/** Each content column animated */}
            {["Other Link", "Get in Touch", "Follow Us"].map((title, i) => (
              <motion.div
                key={i}
                className="content"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                {/* Render actual content based on title */}
                {title === "Other Link" && (
                  <>
                    <h1>Other Link</h1>
                    <ul>
                      <li>Feedback</li>
                      <li>Testimonials</li>
                      <li>Forms & Download</li>
                      <li>Employee Corner</li>
                      <li>Hyperlink Policy</li>
                      <li>Terms of Use</li>
                      <li>Privacy Policy</li>
                      <li>Disclaimer</li>
                      <li>Site Map</li>
                    </ul>
                  </>
                )}

                {title === "Get in Touch" && (
                  <>
                    <h1>Get in Touch</h1>
                    <ul>
                      <li className="add">
                        Address:
                        <br />
                        Revenue Department, Arunachal Pradesh
                        <br />
                        Ground Floor,
                        <br />
                        Vallabh Bhavan - 2, Ministry,
                        <br />
                        Area Hills,
                        <br />
                        Arunachal Pradesh - 790104
                      </li>
                      <li>Phone: +91-555-5555555</li>
                      <li>
                        Working Hours:
                        <br />
                        Opens at 10:30 AM - Closes at 5:30 PM
                      </li>
                    </ul>
                  </>
                )}

                {title === "Follow Us" && (
                  <>
                    <h1>Follow Us</h1>
                    <ul className="social-links">
                      {[
                        { href: "https://facebook.com", icon: "facebook" },
                        { href: "https://twitter.com", icon: "x" },
                        { href: "https://linkdIn.com", icon: "linkdIn" },
                        { href: "https://instagram.com", icon: "instagram" },
                        { href: "https://youtube.com", icon: "youtube" },
                      ].map(({ href, icon }, idx) => (
                        <li key={idx}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={`./images/${icon}.svg`} alt={icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
