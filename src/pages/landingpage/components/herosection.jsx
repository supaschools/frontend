import React, { useEffect, useRef } from "react";
import heroimg from "../../../assets/heroimg.png";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../../ui/button";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = 2.5;
        this.opacity = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(25, 95, 255, ${1 * this.opacity})`;
        ctx.fill();
      }
    }

    const particles = Array(100)
      .fill()
      .map(() => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const textElement = document.querySelector(".text-gray-600");
      const textBounds = textElement?.getBoundingClientRect();

      particles.forEach((particle) => {
        particle.update();

        const inTextArea =
          textBounds &&
          particle.x >= textBounds.left - 20 &&
          particle.x <= textBounds.right + 20 &&
          particle.y >= textBounds.top - 20 &&
          particle.y <= textBounds.bottom + 20;

        if (inTextArea) {
          particle.opacity = Math.max(0, particle.opacity - 0.1);
        } else {
          particle.opacity = Math.min(1, particle.opacity + 0.1);
        }

        if (particle.opacity > 0) {
          particle.draw();
        }
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineOpacity = Math.min(p1.opacity, p2.opacity);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(25, 95, 255, ${
              0.3 * (1 - distance / 150) * lineOpacity
            })`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-[#000207] min-h-screen w-full overflow-hidden -mt-10">
      {/* Navbar light source */}
      <div
        className="absolute top-0 left-0 w-full h-[40vh] opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 0%, rgba(64, 123, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(64, 123, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 0%, rgba(64, 123, 255, 0.3) 0%, transparent 50%)
          `,
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* Center light source */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(64, 123, 255, 0.15) 0%, transparent 50%)
          `,
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.7, zIndex: 2 }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-20"
        style={{ zIndex: 3 }}
      >
        <div className="w-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white"
            style={{ lineHeight: "1.2" }}
          >
            Personalize Learning <br />
            In Your School With AI
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-400 font-sans mx-auto max-w-full sm:max-w-2xl"
            style={{ lineHeight: "1.6" }}
          >
            <span className="sm:whitespace-nowrap">
              With 30+ students per class, teachers struggle to provide
              individual attention.
            </span>
            <br className="hidden sm:block" />
            &nbsp;Our AI solution offers personalized learning for students,
            based on their strenghts and weaknesses
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 lg:mt-8">
            <Link
              to="/signup"
              id="hero-get-started"
              className={`${buttonVariants({ variant: "solid", size: "fsix" })}
                w-full sm:w-auto bg-[#407BFF] hover:bg-blue-600 transition-colors duration-300 
                px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3.5 text-sm sm:text-base lg:text-lg font-semibold`}
            >
              SCHEDULE DEMO
            </Link>
            <Link
              to="/login"
              className={`${buttonVariants({ variant: "light", size: "fsix" })}
                w-full sm:w-auto bg-white hover:bg-gray-100 transition-colors duration-300 
                px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3.5 text-sm sm:text-base lg:text-lg font-semibold`}
            >
              <div className="text-gray-900 flex items-center justify-center gap-2">
                WATCH VIDEO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
