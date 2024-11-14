import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      await new Promise(resolve => setTimeout(resolve, 700)); 
      setShowName(true);
    };

    sequence();
  }, []);

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-background"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="hero-spacer" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="hero-title"
          initial={{ x: -100, opacity: 0 }} 
          animate={{
            x: showName ? 100 : 0, 
            opacity: showName ? 0 : 1,
            transition: { duration: 1, ease: "easeOut" }
          }}
        >
          <h1>Welcome</h1>
        </motion.div>
        <motion.div
          className="hero-name"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: showName ? 0 : 100, 
            opacity: showName ? 1 : 0, 
            transition: { duration: 1, ease: "easeOut" }
          }}
        >
          <h1>I'm Hiruy Worku</h1>
        </motion.div>
        <p>My early struggles with broken home appliances made me the family's go-to troubleshooter and taught me the importance of tenacity. I built a fully functional backyard gym out of curiosity, but the real career path-shaping event was the discovery of computer science. Programming's object-oriented thinking changed the way I approached problems, 
          converting anxiety into strategizing and perplexity into a teaching opportunity. As a sophomore studying computer science, my goal is to work as a full-stack developer with an increasing emphasis on Backend dev. , AI, and ML. For backend programming, I have practical expertise with Python, Java, C, and SQL. For frontend solutions, I have worked with JavaScript, React.js, CSS, and HTML. 
            If I am not in front of a laptop you might find me speed training, working on some studio arts (Photography, graphic design, prototyping and freehand drawing) or catching up on some anime & animations.</p>
        <div className="hero-icons">
          <a href="https://github.com/HiruyWorku" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hiruyworku/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <Link to="/projects" className="view-projects">View Projects</Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
