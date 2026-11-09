import "./Footercss.css";
import { Logo } from "../../components/Logo/Logo";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <p className="footer-content">
          Building digital experiences with precision and passion.
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} All rights reserved {" "}
          <span className="footer-logo-container"><Logo /></span>
        </p>
      </footer>
    </>
  );
};
