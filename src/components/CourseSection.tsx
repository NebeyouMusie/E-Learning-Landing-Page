import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const coursesByCategory = {
  "All Courses": [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      price: 99.99,
      rating: 4.8,
      students: 1234,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      price: 89.99,
      rating: 4.7,
      students: 987,
    },
    {
      id: 3,
      title: "Business Strategy Masterclass",
      instructor: "Emma Williams",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      price: 129.99,
      rating: 4.9,
      students: 2341,
    },
  ],
  "Development": [
    {
      id: 4,
      title: "Advanced React Development",
      instructor: "John Smith",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      price: 129.99,
      rating: 4.9,
      students: 856,
    },
    {
      id: 5,
      title: "Full Stack JavaScript",
      instructor: "Emily Brown",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      price: 149.99,
      rating: 4.8,
      students: 1023,
    },
  ],
  "Data Science": [
    {
      id: 6,
      title: "Python for Data Science",
      instructor: "David Wilson",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      price: 89.99,
      rating: 4.7,
      students: 1432,
    },
    {
      id: 7,
      title: "Machine Learning Basics",
      instructor: "Sophie Chen",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      price: 119.99,
      rating: 4.8,
      students: 967,
    },
  ],
  "Business": [
    {
      id: 8,
      title: "Business Strategy 101",
      instructor: "Michael Brown",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      price: 79.99,
      rating: 4.6,
      students: 789,
    },
  ],
  "Finance": [
    {
      id: 9,
      title: "Investment Fundamentals",
      instructor: "Robert Johnson",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      price: 99.99,
      rating: 4.7,
      students: 654,
    },
  ],
};

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const categories = Object.keys(coursesByCategory);

  return (
    <section id="courses" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="section-title">All Courses of EduLe</h2>
          <p className="section-subtitle">Choose from our wide range of courses</p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coursesByCategory[activeCategory as keyof typeof coursesByCategory].map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="course-card"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">${course.price}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{course.rating}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({course.students})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CourseSection;
