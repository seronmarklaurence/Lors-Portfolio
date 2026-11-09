import "./HrDotcss.css";

export const HrDot = ({textContent,fontSize}) => {
  return (
    <div className="section-header-container">
      <div className="gradient-line line-left">
        <span className="glow-dot dot-left"></span>
      </div>


      <div className="header-text-block">
        <h2 className="tech-stack-title"  style={{ fontSize: fontSize }}>{textContent}</h2>
      </div>


      <div className="gradient-line line-right">
        <span className="glow-dot dot-right"></span>
      </div>
    </div>
  );
};
