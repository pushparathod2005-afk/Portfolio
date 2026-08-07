import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['Python (Advanced)', 'C (Basic)', 'JavaScript/ES6+'] },
  { category: 'AI & ML', items: ['TensorFlow/Keras', 'OpenCV', 'Scikit-Learn', 'Deep Learning', 'NLP', 'CNNs'] },
  { category: 'Web & Tools', items: ['React', 'Streamlit', 'Git', 'GitHub', 'Google Colab'] }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="text-center">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with.</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="skill-card glass"
          >
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <div className="skill-dot" />
                  <span className="skill-name">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
