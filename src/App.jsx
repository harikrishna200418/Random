import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Brain,
  ScanLine,
  Heart,
  BarChart3,
  Users,
  MessageSquare,
  LayoutDashboard,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
  Copy,
  Check,
  Calendar,
  Briefcase,
  Award,
  FileText,
  ArrowUpRight,
  Download,
  Sparkles,
  Lock
} from 'lucide-react';

// Common Glassmorphism Inline Style for fallback compatibility
const glassStyle = {
  background: 'rgba(255, 255, 255, 0.07)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
};

function App() {
  const { scrollYProgress } = useScroll();
  const [activeTab, setActiveTab] = useState('personal'); // 'personal' | 'client'
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Copy email callback
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kummeralikhitha@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Section scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'projects', 'experience', 'contact'];
      let currentSection = 'hero';
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    "Python", "Flask", "Streamlit", "SQL", "ML", "NLP",
    "AWS", "Docker", "PostgreSQL", "MongoDB", "Matplotlib", "Pandas",
    // Double for continuous marquee loop
    "Python", "Flask", "Streamlit", "SQL", "ML", "NLP",
    "AWS", "Docker", "PostgreSQL", "MongoDB", "Matplotlib", "Pandas"
  ];

  const personalProjects = [
    {
      id: "01",
      title: "Defect Detection in PCBs",
      tech: "YOLOv8, Python",
      description: "Advanced object detection model designed to identify and classify structural defects in printed circuit boards with high precision and recall rate.",
      tags: ["Computer Vision", "YOLO", "Python"],
      icon: ScanLine,
    },
    {
      id: "02",
      title: "AI-Powered Health Assistant",
      tech: "Flask, MySQL, NLTK, SpaCy",
      description: "An intelligent healthcare assistant analyzing raw medical and physiological metrics from wearables using automated NLP query systems.",
      tags: ["NLP", "Flask", "MySQL", "REST API"],
      icon: Heart,
    },
    {
      id: "03",
      title: "Student Performance Dashboard",
      tech: "Pandas, NumPy, Streamlit",
      description: "Interactive data visualization dashboard that processes student academic metrics to deliver actionable cohort performance insights.",
      tags: ["Data Viz", "Streamlit", "Analytics"],
      icon: BarChart3,
    }
  ];

  const clientTasks = [
    {
      title: "Customer Segmentation Model",
      stack: "Python, K-Means, Scikit-learn, Pandas, Matplotlib, Jupyter",
      outcome: "Classified customers into high-value, frequent buyers, and low-engagement groups to focus marketing spend.",
      role: "Full Ownership",
      icon: Users,
      borderStyle: { borderLeft: '5px solid #8B5CF6' } // Violet
    },
    {
      title: "AI Chatbot System",
      stack: "Python, NLTK, Flask, NLP",
      outcome: "Automated standard customer support interactions with efficient, keyword-based NLP query resolution.",
      role: "End-to-End Dev",
      icon: MessageSquare,
      borderStyle: { borderLeft: '5px solid #00F5FF' } // Cyan
    },
    {
      title: "Data Visualization Dashboard",
      stack: "Python, Plotly, Streamlit, Pandas, Matplotlib",
      outcome: "Interactive business dashboard tracking regional sales, transaction rates, and visual performance indicators.",
      role: "Design + Dev",
      icon: LayoutDashboard,
      borderStyle: { borderLeft: '5px solid #10B981' } // Emerald
    },
    {
      title: "Predictive Modeling Analytics",
      stack: "Python, Scikit-learn, Regression Models, Pandas",
      outcome: "Forecasted quarter-on-quarter demand fluctuations using historical transactional data patterns.",
      role: "ML Engineer",
      icon: TrendingUp,
      borderStyle: { borderLeft: '5px solid #F43F5E' } // Rose
    }
  ];

  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      icon: Code2
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
      icon: Database
    },
    {
      title: "Frameworks & Tools",
      skills: ["Flask", "Streamlit", "Git", "MS Excel", "Docker"],
      icon: Wrench
    },
    {
      title: "AI & Analytics",
      skills: ["ML Fundamentals", "NLP", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
      icon: Brain
    }
  ];

  const experiences = [
    {
      role: "Python Developer — Freelance",
      date: "June 2024 – Present",
      active: true,
      bullets: [
        "Deploying Flask + Docker microservices on AWS EC2 nodes to handle high-throughput client data pipelines.",
        "Automating legacy data extraction and analysis processes reducing spreadsheet crunching time by 70%.",
        "Participating in agile standups, designing clean REST API schemas, and reviewing pipeline pull requests."
      ]
    },
    {
      role: "Project Intern — Bharat Dynamics Limited",
      date: "April 2023 – July 2023",
      active: false,
      bullets: [
        "Assisted senior engineers with mechanical-electrical assembly operations and alignment testing.",
        "Created systematic quality assurance reports and standardized pipeline testing documentation.",
        "Coordinated with safety teams to audit hardware validation workspace environments."
      ]
    },
    {
      role: "AWS Solutions Architecture — Forage",
      date: "July 2025",
      active: false,
      bullets: [
        "Architected highly-scalable client application stacks leveraging AWS Elastic Beanstalk configurations.",
        "Designed mock VPC architectures incorporating auto-scaling groups, application load balancers, and multi-AZ deployments.",
        "Integrated AWS RDS read replicas to sustain high-intensity analytics workloads without latency spikes."
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen text-[#F0F4FF] overflow-x-hidden selection:bg-[#00F5FF]/30 selection:text-[#00F5FF] font-plus-jakarta pb-20">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#00F5FF] z-[100] origin-left shadow-[0_0_8px_#00F5FF]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Sticky Glass Pill Navbar */}
      <div className="w-full px-4 fixed top-6 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl pointer-events-auto text-xs md:text-sm font-semibold tracking-wide"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
        >
          <a
            href="#hero"
            className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${activeSection === 'hero' ? 'text-[#00F5FF] bg-white/5' : 'text-white/60 hover:text-white'}`}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${activeSection === 'skills' ? 'text-[#00F5FF] bg-white/5' : 'text-white/60 hover:text-white'}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${activeSection === 'projects' ? 'text-[#00F5FF] bg-white/5' : 'text-white/60 hover:text-white'}`}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${activeSection === 'experience' ? 'text-[#00F5FF] bg-white/5' : 'text-white/60 hover:text-white'}`}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${activeSection === 'contact' ? 'text-[#00F5FF] bg-white/5' : 'text-white/60 hover:text-white'}`}
          >
            Contact
          </a>
        </motion.nav>
      </div>

      {/* Floating Animated Orbs in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.12)_0%,rgba(0,245,255,0)_70%)] blur-[80px] animate-float-1" />
        <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0)_70%)] blur-[90px] animate-float-2" />
        <div className="absolute top-[70%] left-[5%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.08)_0%,rgba(0,245,255,0)_70%)] blur-[80px] animate-float-3" />
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-12 px-6 z-10 max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center">
          {/* Greeting glass pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={glassStyle}
            className="px-4 py-1.5 rounded-full text-[#00F5FF] font-mono text-xs uppercase tracking-widest mb-6 select-none shadow-[0_2px_12px_rgba(0,0,0,0.15)] flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>&lt; Python Developer &amp; Data Analyst /&gt;</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 text-shimmer leading-none select-none cursor-default py-2">
              Likhitha Kummera
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 font-light text-base sm:text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed"
          >
            Building intelligent systems, robust analytical architectures, and data-driven client experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full text-[#00F5FF] font-semibold text-sm transition-all duration-300 relative group overflow-hidden"
              style={glassStyle}
            >
              <div className="absolute inset-0 bg-[#00F5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                View Projects <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-white/90 border border-white/10 hover:border-white/30 hover:text-white font-semibold text-sm transition-all duration-300 bg-transparent flex items-center gap-2 hover:bg-white/5"
            >
              Get In Touch <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          <div
            style={glassStyle}
            className="p-6 rounded-2xl flex items-center gap-5 glass-card-glow-cyan transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF]">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#00F5FF] font-syne">7.3</div>
              <div className="text-white/50 text-sm mt-0.5">CGPA Academic Record</div>
            </div>
          </div>

          <div
            style={glassStyle}
            className="p-6 rounded-2xl flex items-center gap-5 glass-card-glow-cyan transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
              <Briefcase className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#8B5CF6] font-syne">4+</div>
              <div className="text-white/50 text-sm mt-0.5">Client &amp; Personal Projects</div>
            </div>
          </div>

          <div
            style={glassStyle}
            className="p-6 rounded-2xl flex items-center gap-5 glass-card-glow-cyan transition-all duration-300"
          >
            <div className="p-3.5 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF]">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#00F5FF] font-syne">3</div>
              <div className="text-white/50 text-sm mt-0.5">Professional Credentials</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Marquee Ticker */}
        <div className="w-screen overflow-hidden absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2 py-4 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="animate-marquee flex gap-12 text-sm font-semibold tracking-wider text-white/30 uppercase select-none whitespace-nowrap">
            {techStack.map((tech, i) => (
              <span key={i} className="flex items-center gap-2 hover:text-[#00F5FF] transition-colors duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]/40" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
              Technical Arsenal
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full mx-auto" />
            <p className="text-white/50 mt-4 text-base font-light">Categorized stack showing operational proficiency &amp; analytics tools.</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {skillsData.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  style={glassStyle}
                  className="p-8 rounded-2xl glass-card-glow-cyan hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white/[0.04] text-[#00F5FF] border border-white/5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase font-mono text-white/30 tracking-widest">Skill Module 0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold font-syne mb-5 text-white/90">{category.title}</h3>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/10 hover:border-[#00F5FF]/30 hover:text-[#00F5FF] transition-all duration-200 cursor-default"
                        style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              My Work
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full mx-auto mb-10" />

            {/* Tab Selector */}
            <div
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
              className="inline-flex p-1 rounded-full relative"
            >
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider relative transition-colors duration-300 z-10 ${activeTab === 'personal' ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
              >
                {activeTab === 'personal' && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute inset-0 bg-white/10 border border-white/15 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Personal Projects
              </button>
              <button
                onClick={() => setActiveTab('client')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider relative transition-colors duration-300 z-10 ${activeTab === 'client' ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
              >
                {activeTab === 'client' && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute inset-0 bg-white/10 border border-white/15 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Client Tasks
              </button>
            </div>
          </div>

          {/* TAB CONTENTS */}
          <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait">
              {activeTab === 'personal' ? (
                <motion.div
                  key="personal-tab"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  {personalProjects.map((project, index) => {
                    const ProjectIcon = project.icon;
                    return (
                      <div
                        key={index}
                        style={glassStyle}
                        className="p-8 rounded-2xl glass-card-glow-cyan hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden group"
                      >
                        {/* Project Top badge */}
                        <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00F5FF]/10 text-[#00F5FF] text-[10px] font-mono tracking-widest uppercase rounded-bl-xl border-l border-b border-[#00F5FF]/20 select-none">
                          Project {project.id}
                        </div>

                        {/* Visual Placeholder Block with Icon */}
                        <div className="w-16 h-16 shrink-0 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00F5FF] group-hover:text-white group-hover:bg-[#00F5FF]/10 transition-all duration-300">
                          <ProjectIcon className="w-8 h-8" />
                        </div>

                        <div className="flex-grow">
                          <span className="text-xs uppercase font-mono text-[#00F5FF] tracking-wider font-semibold">{project.tech}</span>
                          <h3 className="text-xl sm:text-2xl font-bold font-syne mt-1 mb-2 text-white/95">{project.title}</h3>
                          <p className="text-white/60 text-sm font-light leading-relaxed max-w-3xl mb-4">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-white/40 text-[11px] font-mono">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Arrow CTA */}
                        <div className="shrink-0 flex self-end md:self-center">
                          <button className="px-5 py-2.5 rounded-full border border-white/10 group-hover:border-[#00F5FF]/30 text-white/70 group-hover:text-[#00F5FF] text-xs font-semibold transition-all duration-300 flex items-center gap-2 bg-white/[0.01]">
                            View Details <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="client-tab"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  {/* Outer Frame with agency showcase board title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <h3 className="font-syne text-lg md:text-xl font-bold text-white/90">
                        Client Project Showcase — AndReach
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10 text-[10px] font-mono font-semibold flex items-center gap-1 select-none">
                        <Lock className="w-2.5 h-2.5" /> CONFIDENTIAL
                      </span>
                    </div>
                    <span className="text-xs font-mono text-white/30 tracking-wider">PROJECT MODULES: 04</span>
                  </div>

                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {clientTasks.map((client, index) => {
                      const ClientIcon = client.icon;
                      return (
                        <div
                          key={index}
                          style={{ ...glassStyle, ...client.borderStyle }}
                          className="p-8 rounded-2xl glass-card-glow-violet transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="p-3.5 rounded-xl bg-white/[0.04] text-white/80 border border-white/5">
                                <ClientIcon className="w-6 h-6" />
                              </div>
                              <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/50 text-[10px] uppercase font-semibold font-mono">
                                {client.role}
                              </span>
                            </div>

                            <h4 className="text-xl font-bold font-syne mb-2 text-white/95">{client.title}</h4>
                            <span className="text-xs font-mono text-white/40 block mb-4">{client.stack}</span>
                            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                              <strong className="text-white/80 font-medium">Outcome:</strong> {client.outcome}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-white/40 text-xs font-mono">
                            <span>AndReach Inc.</span>
                            <span>Task-0{index + 1}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionVariants}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="font-syne text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
              Career Timeline
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00F5FF] to-[#8B5CF6] rounded-full mx-auto" />
            <p className="text-white/50 mt-4 text-base font-light">Chronological path showcasing professional assignments and internships.</p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative w-full max-w-4xl px-4 md:px-0">
            {/* Pulsing Vertical Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[21px] md:left-1/2 w-[2px] bg-gradient-to-b from-[#00F5FF] via-[#8B5CF6] to-[#0a0f2c] shadow-[0_0_10px_rgba(0,245,255,0.2)]" />

            {/* Timeline Entries */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-[13px] md:left-1/2 top-6 md:-translate-x-1/2 z-20 flex items-center justify-center">
                      <div className={`w-[18px] h-[18px] rounded-full border-2 border-[#0a0f2c] ${exp.active ? 'bg-[#00F5FF] animate-pulse-cyan' : 'bg-[#8B5CF6]'}`} />
                    </div>

                    {/* Timeline Card */}
                    <div className="w-full md:w-[46%] pl-10 md:pl-0 flex">
                      <div
                        style={{
                          ...glassStyle,
                          borderLeft: exp.active ? '4px solid #00F5FF' : '4px solid #8B5CF6'
                        }}
                        className={`p-6 rounded-2xl flex-grow ${exp.active ? 'glass-card-glow-cyan' : 'glass-card-glow-violet'} transition-all duration-300`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono font-bold tracking-wider text-white/40">{exp.date}</span>
                          {exp.active && (
                            <span className="px-2 py-0.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 text-[9px] font-mono tracking-widest font-semibold uppercase">
                              Active
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl font-bold font-syne text-white/90 mb-4">{exp.role}</h3>

                        <ul className="space-y-2.5 text-white/60 text-xs md:text-sm font-light leading-relaxed">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Empty Space spacer for large screens */}
                    <div className="hidden md:block w-[46%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionVariants}
          className="w-full max-w-5xl mx-auto"
        >
          <div
            style={glassStyle}
            className="p-8 md:p-14 rounded-3xl relative overflow-hidden text-center flex flex-col items-center"
          >
            {/* Section heading */}
            <h2 className="font-syne text-4xl sm:text-6xl font-black tracking-tight text-shimmer mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-white/60 font-light text-base sm:text-lg max-w-lg mb-12">
              Currently open to Software Engineer &amp; Data Analyst roles. Let&apos;s build intelligent systems together.
            </p>

            {/* Interactive Contact Pill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
              {/* Email Link Card — opens mail client on click, copy icon preserved */}
              <a
                href="mailto:kummeralikhitha@gmail.com"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                className="p-6 rounded-2xl hover:border-[#00F5FF]/40 hover:bg-[#00F5FF]/5 transition-all duration-300 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/30">EMAIL ME</div>
                    <div className="text-sm md:text-base font-semibold text-white/90 mt-0.5">kummeralikhitha@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
                  className="shrink-0 text-white/40 hover:text-white transition-colors duration-200"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5 group-hover:text-[#00F5FF]" />
                  )}
                </button>
              </a>

              {/* Phone Link Card */}
              <a
                href="tel:+918919722134"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                className="p-6 rounded-2xl hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/5 transition-all duration-300 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/30">CALL ME</div>
                    <div className="text-sm md:text-base font-semibold text-white/90 mt-0.5">+91 8919722134</div>
                  </div>
                </div>
                <div className="shrink-0 text-white/40 group-hover:text-[#8B5CF6] transition-colors duration-200">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/kummera-likhitha-707440205"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
              className="w-full max-w-2xl p-6 rounded-2xl hover:border-[#00F5FF]/40 hover:bg-[#00F5FF]/5 transition-all duration-300 flex items-center justify-between text-left group mb-12"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/30">CONNECT ON LINKEDIN</div>
                  <div className="text-sm md:text-base font-semibold text-white/90 mt-0.5">linkedin.com/in/kummera-likhitha-707440205</div>
                </div>
              </div>
              <div className="shrink-0 text-white/40 group-hover:text-[#00F5FF] transition-colors duration-200">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>

            {/* More Projects strip */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-light text-white/40">Want to explore more detailed repositories?</span>
              <a
                href="https://github.com/Likhithakummera"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-white/80 hover:text-white font-semibold text-xs transition-all duration-300 bg-transparent flex items-center gap-2 hover:bg-white/5"
              >
                View All Work <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Clipboard Copy Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl border border-emerald-500/20 bg-emerald-950/80 backdrop-blur-lg shadow-2xl flex items-center gap-2 text-emerald-400 text-xs md:text-sm font-semibold tracking-wider font-mono uppercase"
          >
            <Check className="w-4 h-4" />
            <span>Email Copied! ✓</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer strip */}
      <footer className="mt-16 w-full text-center border-t border-white/5 pt-8 px-6">
        <p className="text-xs md:text-sm text-white/30 font-light select-none tracking-wide">
          &copy; 2026 Likhitha Kummera &middot; Built with Python &amp; Passion
        </p>
      </footer>
    </div>
  );
}

export default App;
