import "./Herocss.css";
import { useState } from "react";
import profileImage from "../../assets/Lors-no-bg.png";
import { AnimationHint } from "../../components/AnimationHint/AnimationHint";
const myName = "LAURENCE";
const letterDelay = 0.13;
const delay = 1;

export const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasTapped, setTapped] = useState(true);
   const [imageLoaded, setImageLoaded] = useState(false);
  const handleClick = () => {
    setTapped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="hero-wrapper">
      <div className="hero-tagline-container">
        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">
            {myName.split("").map((letter, index) => (
              <span
                key={index}
                className="bouncing-letter"
                style={{
                  animationDelay: `${index * letterDelay}s`,
                  animationDuration: `${myName.length * letterDelay + delay}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="hero-role">FRONT-END DEVELOPER</span>
        </h1>
      </div>

      <div
        className={`flip-container ${isFlipped ? "is-flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flip-inner" onClick={handleClick}>
          <div className="flip-front">
            <div className="hero-back-container">
              <div className="hero-content-container">
                {!imageLoaded && <div className="image-skeleton" />}

                <img
                  src={profileImage}
                  className={`hero-profile-img ${imageLoaded ? "loaded" : ""}`}
                  alt="Lors"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              </div>

              {hasTapped && (
                <div className="animation-container-hero">
                  <AnimationHint
                    size="2rem"
                    animation={["pulse", "ripple"]}
                    color="white"
                    opacity="0.7"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flip-back">
            <div className="hero-container-back">
              <span className="about-info">
                <span className="greeting">
                  Hi, I'm <br />{" "}
                  <span className="name">Mark Laurence S. Seron!</span>
                </span>
                <br />
                <hr className="about-hr" />I am a{" "}
                <span className="degree">Computer Science graduate</span> from
                the
                <span className="university">
                  {" "}
                  Technological University of the Philippines
                </span>{" "}
                (TUP). My passion is{" "}
                <span className="passion">
                  translating complex data into elegant, intuitive user
                  interfaces
                </span>
                . When I’m not <span className="action">debugging layouts</span>
                , I am usually immersed in the strategic worlds of
                <span className="hobby">Animes</span>,{" "}
                <span className="hobby">RPG games</span>,
                <span className="hobby">Wild Rift</span>, and{" "}
                <span className="hobby">Mobile Legends</span>.
                <hr className="about-hr" />
                For me, whether it is{" "}
                <span className="strategy">optimizing a loadout</span> or
                <span className="strategy"> optimizing code</span>, it’s all
                about the
                <span className="highlight-bold">
                  {" "}
                  perfect strategy and execution
                </span>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
