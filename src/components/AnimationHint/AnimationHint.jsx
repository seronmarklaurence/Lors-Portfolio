import "./AnimationHintcss.css";
import { LuPointer } from "react-icons/lu";

export const AnimationHint = ({
  size = "1.5rem",
  animation = "",
  color = "white",
  opacity = 0.7,
}) => {
  const classNames = Array.isArray(animation) ? animation.join(" ") : animation;

  return (
    <div className=" animation-wrapper">
      <div style={{ fontSize: size, color: color, opacity: opacity}} className={classNames}>
        <LuPointer />
      </div>
    </div>
  );
};
