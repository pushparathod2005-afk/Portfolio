import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar-wrapper glass"
    >
      <div className="navbar-logo">
        PUSHPA<span>.</span>
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="btn-hire">
        Hire Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
