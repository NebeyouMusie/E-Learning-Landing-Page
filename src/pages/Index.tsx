import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Development Student",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content: "The courses are well-structured and the instructors are very knowledgeable. I've learned so much in such a short time!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Professional",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    content: "The practical approach to learning and hands-on projects have helped me advance my career in data science significantly."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-secondary py-20 sm:py-32">
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
      <CourseSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-secondary py-20">
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
      <section id="testimonials" className="py-20">
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

      <Footer />
    </div>
  );
};

export default Index;