import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Healthcare Chatbot',
    desc: 'An AI-driven conversational agent to assist with basic healthcare queries and guidance.',
    tags: ['AI', 'NLP', 'Python']
  },
  {
    title: 'Virtual Try-On System',
    desc: 'A computer vision application allowing users to virtually try on clothing using pose estimation.',
    tags: ['Computer Vision', 'OpenCV', 'Deep Learning']
  },
  {
    title: 'SentinelURL',
    desc: 'Machine learning model designed to detect and block malicious or phishing URLs.',
    tags: ['Machine Learning', 'Security']
  },
  {
    title: 'AI Recruitment Analytics',
    desc: 'A tool for automating candidate screening and analyzing talent metrics using AI.',
    tags: ['Data Science', 'AI']
  },
  {
    title: 'Weather Forecasting',
    desc: 'Predictive modeling application for accurate weather forecasting using historical data.',
    tags: ['Python', 'Data Analytics']
  },
  {
    title: 'Electricity Prediction',
    desc: 'Predicting future electricity consumption trends using machine learning algorithms.',
    tags: ['Machine Learning', 'Regression']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <p className="section-subtitle">A selection of my recent AI and Software Development work.</p>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="project-card glass"
          >
            <div style={{ flex: 1 }}>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
            </div>
            
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="project-links">
              <a href="#" className="project-link">
                <FaGithub /> Source
              </a>
              <a href="#" className="project-link">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
