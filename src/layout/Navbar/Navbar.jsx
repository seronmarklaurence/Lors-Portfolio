import { useState } from "react";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle.jsx";
import "./Navbar.css";
import { CloseBtn } from "../../components/CloseBtn/CloseBtn.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";
import {
  PiUser,
  PiBriefcaseLight,
  PiLightningLight,
  PiEnvelopeLight,
} from "react-icons/pi";

const navlinks = [
  { href: "#about", label: "About", icon: <PiUser /> },
  { href: "#skills", label: "Skills", icon: <PiLightningLight /> },
  { href: "#projects", label: "Projects", icon: <PiBriefcaseLight /> },
  { href: "#contact", label: "Contact", icon: <PiEnvelopeLight /> },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="logo-container">
          {" "}
          <Logo />{" "}
        </div>
        <input
          type="checkbox"
          id="checkbox-id"
          checked={isOpen}
          onChange={toggleMenu}
        />
        {/* menu icon */}
        <label htmlFor="checkbox-id" className="menu-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </label>
        {/* overlay */}
        <label htmlFor="checkbox-id" className="overlay"></label>
        <ul className="links-container">
          {/* close icon */}
          <label htmlFor="checkbox-id" className="close-icon">
            <CloseBtn />
          </label>

          {navlinks.map((item, index) => (
            /* The KEY goes on the outer LI */
            <li key={index}>
              <a href={item.href} className="links" onClick={closeMenu}>
                <span className="inner">
                  <span className="links-icons">{item.icon}</span>
                  <span className="links-label">{item.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
       <div className="theme-wrapper">
          <ThemeToggle />
       </div>
      </nav>
    </header>
  );
};
