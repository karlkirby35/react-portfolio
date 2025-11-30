import { useEffect, useState } from "react";
import "./css/navbar.css";

export default function Navbar() {
  const sections = ["intro", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="side-navbar">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() =>
            document
              .getElementById(section)
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`nav-button ${
            activeSection === section ? "active" : ""
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}
