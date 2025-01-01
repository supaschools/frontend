import Navbar from "./navbar";

// Create a new Layout component to wrap both sections
const Layout = () => {
  return (
    <main className="relative w-full bg-[#000207]">
      {/* Single gradient for entire page */}
      <div
        className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #407BFF 0%, transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      <HeroSection />
      <Features />
    </main>
  );
};
