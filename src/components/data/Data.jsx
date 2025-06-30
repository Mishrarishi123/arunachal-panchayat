"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Data.css"; //

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Parent container animation (for stagger)
const cardGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Each card animation
const cardItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function LiveData() {
  return (
    <section className="data-section">
      <div className="data-overlay-left" />
      <div className="data-overlay-right" />

      <div className="data-overlay-left" />

      <div className="data-overlay-right" />

      <div className="live-data-container">
        <motion.div
          className="live-data-heading"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="live-data-title">LIVE DATA</h2>
          <p className="live-data-description">
            Government schemes in India are initiatives designed to address
            various social and economic issues, offering benefits to specific
            target
            <br />
            groups. These schemes can be central, state-specific, or a
            combination of both, and cover a wide range of areas including
            social
            <br />
            security, healthcare, education, and financial inclusion.
          </p>
        </motion.div>

        <motion.div
          className="live-data-grid"
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div className="live-data-card" variants={cardItemVariants}>
            <Image
              src="/images/scheme.svg"
              alt="Schemes Live"
              layout="fill"
              objectFit="cover"
              className="card-image"
            />
            <div className="card-overlay-teal" />
            <div className="card-content">
              <h3 className="card-number">50+</h3>
              <p className="card-label">Schemes Live</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="live-data-card" variants={cardItemVariants}>
            <Image
              src="/images/villages.svg"
              alt="Villages Added"
              layout="fill"
              objectFit="cover"
              className="card-image"
            />
            <div className="card-overlay-cyan" />
            <div className="card-content">
              <h3 className="card-number-2">2700/3500</h3>
              <p className="card-label-2">
                Villages Added
                <br />
                So Far
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
