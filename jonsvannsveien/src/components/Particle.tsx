import { useEffect } from "react";

import "../styles/Particle.css";

const Particle = () => {
  const getRandomColor = () => {
    const colors = [
      "rgb(255, 8, 0)",
      "rgb(255, 136, 0)",
      "rgb(255, 217, 0)",
      "rgb(187, 255, 0)",
      "rgb(64, 255, 0)",
      "rgb(0, 255, 76)",
      "rgb(0, 255, 229)",
      "rgb(0, 191, 255)",
      "rgb(0, 102, 255)",
      "rgb(4, 0, 255)",
      "rgb(119, 0, 255)",
      "rgb(200, 0, 255)",
      "rgb(255, 0, 238)",
      "rgb(255, 0, 170)",
      "rgb(255, 0, 60)",
      "rgb(0, 255, 255)",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createParticles1 = () => {
    let particles = [];
    for (let i = 0; i < 20; i++) {
      const particleId = `particle-${(i % 9) + 1}`;
      const animationTime = 10 + Math.random() * 10;
      const color = getRandomColor();

      const style = {
        left: i * 100 + 200 * Math.random() + "px",
        top: 1000 * Math.random() + "px",
        animation: `${particleId} ${animationTime}s infinite alternate ease-in-out`,
        backgroundColor: `${color}`,
        boxShadow: `0px 0px 15px 4px ${color}`,
      };

      particles.push(
        <div className="particle-top" id={particleId} style={style}></div>
      );
    }
    return particles;
  };

  const createParticles3 = () => {
    let particles = [];
    for (let i = 0; i < 20; i++) {
      const particleId = `particle-${(i % 9) + 1}`;
      const animationTime = 10 + Math.random() * 10;
      const color = getRandomColor();

      const style = {
        left: i * 130 + 200 * Math.random() + "px",
        top: 1000 * Math.random() + "px",
        animation: `${particleId} ${animationTime}s infinite alternate ease-in-out`,
        backgroundColor: `${color}`,
        boxShadow: `0px 0px 10px 2px ${color}`,
        filter: `blur(7px)`,
        opacity: 0.4,
      };

      particles.push(
        <div className="particle-top" id={particleId} style={style}></div>
      );
    }
    return particles;
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="particles-container">{createParticles1()}</div>
      <div className="particles-container">{createParticles1()}</div>
      <div className="particles-container">{createParticles1()}</div>
      <div className="particles-container">{createParticles3()}</div>
      <div className="particles-container">{createParticles3()}</div>
    </div>
  );
};

export default Particle;
