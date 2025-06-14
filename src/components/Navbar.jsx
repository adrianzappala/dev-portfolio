import { FaLinkedinIn, FaGithub, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/adrian-zappala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.github.com/adrianzappala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:avz_f@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://drive.google.com/file/d/1gZGafRnwGNuqDqU04LhHLRtNkpY4yAP9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Diploma"
        >
          <FaGraduationCap />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
