import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Code, Layout, Database, ChevronDown, Menu, X } from 'lucide-react';
const GithubIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 3.8 5 4.2 5 4.2a5.5 5.5 0 0 0-.2 3.8A5.5 5.5 0 0 0 3.3 12c0 5.5 3 6.7 6 7.1a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

// --- Data ---
const PROJECTS = [
  {
    id: 1,
    title: 'More Art Website Portfolio',
    description: 'Responsive portfolio website for an art direction team, ensuring a visually appealing layout aligned with the client\'s branding. Built with PHP, Laravel, and TailwindCSS.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    link: 'https://more-art-project.vercel.app/',
    tags: ['PHP', 'Laravel', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'Furnishop',
    description: 'A modern and responsive furniture e-commerce landing page with a clean UI, showcasing product catalogs and seamless navigation.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    link: 'https://furnishop-five.vercel.app/',
    tags: ['React.js', 'TailwindCSS', 'UI/UX']
  },
  {
    id: 3,
    title: 'Recipe Management',
    description: 'A dynamic Single Page Application (SPA) to discover and manage food recipes. Features include state management and external REST API integration.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop',
    link: 'https://resep-makanan-mu.vercel.app/',
    tags: ['React.js', 'API', 'TailwindCSS']
  },
  {
    id: 4,
    title: 'To-Do Dashboard',
    description: 'A functional task management dashboard application focusing on component modularity, clean code architecture, and interactive UI.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop',
    link: 'https://todo-dashboard-adv2.vercel.app/',
    tags: ['React.js', 'Hooks', 'State Management']
  }
];

const SKILLS = ['JavaScript', 'React.js', 'Node.js', 'PHP', 'Laravel', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'PostgreSQL', 'HTML/CSS'];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-blue-600 flex items-center justify-center text-sm">FS</span>
          Ferdyawan.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">Ferdyawan Setiadi</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Informatics Engineering student specializing in <strong className="text-gray-200">Front-End Web Development</strong>. Building responsive, seamless user experiences with React.js, Tailwind CSS, and PHP.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            View My Work <ChevronDown size={18} />
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am an Informatics Engineering student at Universitas Pamulang with a strong passion for Front-End Web Development. I am skilled in building responsive, user-friendly web interfaces using JavaScript (React.js), HTML, CSS, and PHP.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I am experienced in translating design concepts into functional code using modern frameworks like Tailwind CSS and Bootstrap. I love creating seamless user experiences and continuously learning through bootcamps like Lumoshive Academy (React.js) and Sanbercode (Laravel).
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <div className="flex items-center gap-4 mb-4 text-blue-400">
                <Code size={24} />
                <h3 className="text-xl font-semibold text-white">React.js & Front-End</h3>
              </div>
              <p className="text-gray-400 text-sm">Lumoshive Bootcamp (Dec 2025 - March 2026)</p>
              <p className="text-gray-500 text-sm mt-2">Built dynamic Single Page Applications (SPA) utilizing Hooks, external REST APIs, and modern CSS Grid/Flexbox layouts.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <div className="flex items-center gap-4 mb-4 text-red-400">
                <Database size={24} />
                <h3 className="text-xl font-semibold text-white">Laravel Web Development</h3>
              </div>
              <p className="text-gray-400 text-sm">Sanbercode Bootcamp (Jun - Jul 2024)</p>
              <p className="text-gray-500 text-sm mt-2">Mastered MVC concepts, Blade templating, and full-stack development integration using PHP and Laravel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A showcase of websites and applications I have designed and developed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl bg-gray-900 aspect-video outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 max-w-md">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-2 text-blue-400 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  Visit Website <ExternalLink size={16} />
                </div>
              </div>
              
              {/* Persistent gradient at bottom for legibility if needed, but per requirement it's full dark overlay on hover */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-gray-400 mb-12 text-lg">
          I'm currently looking for new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <a href="mailto:ferdy19ndy@gmail.com" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <Mail className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-gray-300 font-medium text-sm">ferdy19ndy@gmail.com</span>
          </a>
          
          <a href="tel:089513997126" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <Phone className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-gray-300 font-medium text-sm">0895-1399-7126</span>
          </a>

          <a href="https://github.com/Ferdyawan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <GithubIcon className="text-white mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-gray-300 font-medium text-sm">github.com/Ferdyawan</span>
          </a>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="text-purple-400 mb-4" size={32} />
            <span className="text-gray-300 font-medium text-sm">Tangerang, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm bg-[#050505]">
      <p>&copy; {new Date().getFullYear()} Ferdyawan Setiadi. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0505] via-[#050505] to-[#05051a] font-sans selection:bg-red-500/30 selection:text-white scroll-smooth text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}