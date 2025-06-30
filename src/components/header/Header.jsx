import Image from "next/image";
import "./Header.css";
import "../../styles/variables.css";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="header-logo">
        <Image
          src="/images/logo.svg"
          alt="Azinicka Forests Logo"
          width={120}
          height={50}
        />
      </div>

      <div className="heading">
        <h1>PANCHAYAT RAAJ<br/>REVENUE</h1>
      </div>

      <div className="location">
        <img src="./images/MapPin.svg" alt="" />
        <p>
          1901 Thornridge Cir. Shiloh,
          <br />
          Hawaii 81063
        </p>
      </div>
    </header>
  );
}
