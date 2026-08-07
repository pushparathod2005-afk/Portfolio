import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-card glass"
      >
        <div className="about-blob" />
        
        <h2 className="section-title center">About Me</h2>
        
        <div className="about-grid">
          <div className="about-column">
            <h3 className="about-heading text-gradient">Education & Goals</h3>
            <div className="about-item">
              <div className="about-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h4 className="about-item-title">Don Bosco Institute of Technology</h4>
                <p className="about-item-desc">B.E. Computer Science (2023 - 2027)</p>
                <p className="about-item-highlight">CGPA: ~8.21</p>
              </div>
            </div>
            
            <div className="about-item">
              <div className="about-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="about-item-title">Location</h4>
                <p className="about-item-desc">Karnataka, India</p>
              </div>
            </div>
            
            <div className="about-item">
              <div className="about-icon">
                <FaCode />
              </div>
              <div>
                <h4 className="about-item-title">Objective</h4>
                <p className="about-text">
                  Secure internships and software/AI engineering roles while building a strong portfolio.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-column">
            <h3 className="about-heading text-gradient">Areas of Interest</h3>
            <p className="about-text">
              I am highly passionate about modern technology and its applications. My core interests lie in:
            </p>
            <div className="tags-container">
              {['Artificial Intelligence', 'Computer Vision', 'Data Science', 'NLP', 'Cloud Computing'].map((interest, idx) => (
                <span key={idx} className="tag">
                  {interest}
                </span>
              ))}
            </div>
            <div className="learning-focus">
              <h4>Current Learning Focus</h4>
              <ul>
                <li>Convolutional Neural Networks (CNNs)</li>
                <li>Model Training on Kaggle Datasets</li>
                <li>GitHub Workflow & Portfolio Development</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
