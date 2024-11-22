import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All Courses", "Development", "Data Science", "Business", "Finance"];

const courses = [
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
];

const testimonials = [
  {
    id: 1,
    name: "Rose Alexander",
    role: "Web Developer",
    content: "The courses here completely transformed my career path. The instructors are amazing and the content is top-notch.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 2,
    name: "Melissa Roberts",
    role: "Data Analyst",
    content: "I've taken multiple courses and each one has been worth every penny. The practical projects really help cement the learning.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 sm:py-32">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Now learning from anywhere, and build your bright career
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Start your favorite course today and unlock your potential with our expert-led online courses
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="btn-primary">Start A Course</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-title">All Courses of EduLe</h2>
            <p className="section-subtitle">Choose from our wide range of courses</p>
          </div>

          {/* Categories */}
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

          {/* Course Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
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
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="section-title">How It Works?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Find Your Course",
                description: "Browse our wide selection of courses and choose your path",
                icon: "🔍",
              },
              {
                title: "Book A Seat",
                description: "Secure your spot in the course that interests you",
                icon: "📚",
              },
              {
                title: "Get Certificate",
                description: "Complete the course and earn your certification",
                icon: "🎓",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-white">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="section-title">Feedback From Students</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title text-white">Ready to start?</h2>
            <p className="section-subtitle text-white/80">
              Download our mobile app for easy to start your course
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-lg bg-white px-6 py-3 text-primary transition-all duration-300 hover:bg-gray-100">
                Google Play
              </button>
              <button className="rounded-lg bg-white px-6 py-3 text-primary transition-all duration-300 hover:bg-gray-100">
                App Store
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;