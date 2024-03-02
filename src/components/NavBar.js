import React, { useState, useEffect } from "react";

const navItems = ["About", "News", "Services", "Our Team", "Make Enquiry"];

const headerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "97.2%",
  height: 101,
  padding: "30px",
  margin: "20px",
  backgroundColor: "white",
};

const navStyles = {
  display: "flex",
  listStyle: "none",
  paddingLeft: 0,
  margin: 0,
  alignItems: "center",
};

const linkStyles = {
  margin: "0 10px",
  textDecoration: "none",
  color: "#000000",
  fontSize: "14px",
};

const buttonStyles = {
  padding: "8px 16px",
  border: "1px solid #000000",
  backgroundColor: "white",
  color: "#000000",
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

const mobileHeaderStyle = {
  ...headerStyle,
  justifyContent: "flex-end",
};

const mobileNavStyles = {
  ...navStyles,
  flexDirection: "column",
  position: "absolute",
  top: "101px",
  right: 0,
  backgroundColor: "white",
  display: "none",
  width: "100%",
  alignItems: "flex-start",
};

const HamburgerIcon = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      right: "20px",
    }}
  >
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  </div>
);

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={isMobile ? mobileHeaderStyle : headerStyle}>
      {isMobile && <HamburgerIcon onClick={toggleMenu} />}
      <nav
        style={
          isMobile
            ? menuOpen
              ? { ...mobileNavStyles, display: "flex" }
              : mobileNavStyles
            : navStyles
        }
      >
        {navItems.map((item, index) => (
          <a key={index} href="#" style={linkStyles}>
            {item}
          </a>
        ))}
      </nav>
      {!isMobile && (
        <button style={buttonStyles}>
          Contact us
          <span
            style={{ marginLeft: "8px" }}
            dangerouslySetInnerHTML={{ __html: ArrowIcon }}
          />
        </button>
      )}
    </header>
  );
};

const ArrowIcon = `
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 8L1 8M19 8L12.25 15M19 8L12.25 1" stroke="#221F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export default Navbar;
