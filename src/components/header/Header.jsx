"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import "../../styles/variables.css";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuActive ? "active" : ""}`}
        onClick={closeMenu}
      />

      <header className="navbar">
        <div className="header-logo">
          <div className="header-logo-img">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={50} />
          </div>
          <div className="location">
            <img className="mt-1" src="/images/MapPin.svg" alt="Pin" />
            <p>
              Vallabh Bhavan-2, Itanagar,
              <br />
              AP 790104
            </p>
          </div>
        </div>

        <div className="heading">
          <h1>
            PANCHAYAT RAAJ <br />
            REVENUE
          </h1>
        </div>

        {/* Your "navbar-toggle" class toggle button */}
        <button
          className={`navbar-toggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu that opens/closes */}
        <nav className={`navlist ${menuActive ? "active" : ""}`}>
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/scheme">Scheme</Link>
            </li>
            <li onClick={closeMenu}>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
