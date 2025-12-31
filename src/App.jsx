import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Database,
  Share2,
  ShieldCheck,
  Clock,
  Baby,
  RefreshCw,
  Mail,
  Lock
} from 'lucide-react';
import { policyData } from './policyData';

const iconMap = {
  Database,
  Share2,
  ShieldCheck,
  Clock,
  Baby,
  RefreshCw,
  Mail
};

const Section = ({ data, index }) => {
  const Icon = iconMap[data.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel"
    >
      <div className="card-header">
        <div className="icon-box">
          <Icon size={24} />
        </div>
        <h2 className="card-title">{data.title}</h2>
      </div>
      <div className="card-content">
        {data.content}
      </div>
    </motion.div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Header */}
      <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo">
            <Lock size={20} color="#3b82f6" />
            <span>{policyData.companyName || 'Privacy'}</span>
          </div>
          <nav>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">

        {/* Hero */}
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Atualizado em {policyData.lastUpdated}</span>
            <h1 className="hero-title">Política de Privacidade</h1>
            <p className="hero-subtitle">{policyData.introduction}</p>
          </motion.div>
        </section>

        {/* Sections List */}
        <div className="highlight-grid">
          {policyData.sections.map((section, index) => (
            <Section key={section.id} data={section} index={index} />
          ))}
        </div>

        {/* Contact Block */}
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel contact-section"
        >
          <h3 className="card-title">Ainda tem dúvidas?</h3>
          <p className="hero-subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Nossa equipe está pronta para ajudar.
          </p>
          <a
            href={`mailto:${policyData.contactEmail}`}
            className="btn-primary"
          >
            <Mail size={18} />
            {policyData.contactEmail}
          </a>
        </motion.div>

      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {policyData.companyName}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
