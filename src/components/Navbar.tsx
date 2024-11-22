import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // Close menu after clicking
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
          
          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-primary py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('courses')} 
                className="text-gray-700 hover:text-primary py-2"
              >
                All Courses
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-gray-700 hover:text-primary py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-700 hover:text-primary py-2"
              >
                Testimonials
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-gray-700 hover:text-primary py-2">
                  Sign In
                </button>
                <button className="w-full btn-primary mt-2">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;