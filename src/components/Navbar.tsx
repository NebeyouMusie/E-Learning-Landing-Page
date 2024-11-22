import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">EduLe</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary">Home</button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-primary">All Courses</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-primary">How It Works</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary">Testimonials</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary">Sign In</button>
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;