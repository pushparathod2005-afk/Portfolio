import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background gradients */}
      <div className="bg-blob-orange" />
      <div className="bg-blob-red" />

      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h2 className="hero-subtitle">Aspiring AI Engineer</h2>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Pushpa Rathod</span>
          </h1>
          <p className="hero-desc">
            Computer Science student focusing on Artificial Intelligence, Deep Learning, and building modern software solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="glass btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-container glass">
            <img 
              src="/WhatsApp Image 2026-08-07 at 12.52.52 PM.jpeg" 
              alt="Pushpa Rathod" 
              className="hero-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
