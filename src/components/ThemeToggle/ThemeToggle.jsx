import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import "./ThemeTogglecss.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  return (
    <button
      className={`theme-toggle ${dark ? "active" : ""}`}
      onClick={() => setDark(!dark)}
    >
      <span className="toggle-track">

        <span className="toggle-thumb">
          {dark ? <BsSunFill /> : <BsMoonStarsFill />}
        </span>
      </span>

      {/* <div className="toggle-wrapper">
        <div className="toggle-rotate">
          <BsSunFill className="toggle-icon-sun" />
          <BsMoonStarsFill className="toggle-icon-moon" />
        </div>
      </div> */}
    </button>
  );
}
