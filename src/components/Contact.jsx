import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-container contact-section">
      <div className="contact-blob" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-card glass"
      >
        <h2 className="section-title">Let's build something <span className="text-gradient">amazing</span></h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <div className="social-links">
          <a href="mailto:pushparathod@example.com" className="social-link">
            <FaEnvelope />
          </a>
          <a href="#" className="social-link">
            <FaLinkedin />
          </a>
          <a href="#" className="social-link">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
