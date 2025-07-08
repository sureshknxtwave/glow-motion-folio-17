import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-hero-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-hero-gradient rounded-3xl blur opacity-30 group-hover:opacity-50 transition-smooth"></div>
                <div className="relative">
                  <img
                    src={profilePhoto}
                    alt="Suresh K"
                    className="w-full max-w-md mx-auto rounded-3xl shadow-elegant transition-smooth group-hover:shadow-glow"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-border"></div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -top-8 -right-8 glass rounded-2xl p-6 shadow-elegant"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 shadow-elegant"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Hello! I'm Suresh Kandregula
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 1 year of experience 
                  creating digital solutions that make a difference. I love turning complex problems into 
                  simple, beautiful, and intuitive designs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through tech blogs and mentoring junior developers.
                </p>
              </div>

              {/* Tech Highlights */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">What I Do</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Frontend Development", desc: "React, JavaScript, TypeScript" },
                    { title: "Backend Development", desc: "Node.js, Python, PostgreSQL, MongoDB, Convex" },
                    { title: "Fullstack Development", desc: "Next, TypeScript" },
                    { title: "Cloud & DevOps", desc: "AWS, Docker, CI/CD" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.5 + (index * 0.1) }}
                      className="p-4 rounded-xl bg-card border border-border hover:shadow-elegant transition-smooth"
                    >
                      <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Personal Touch */}
              <div className="p-6 rounded-2xl bg-hero-gradient/10 border border-primary/20">
                <h4 className="text-xl font-semibold mb-3 text-primary">My Philosophy</h4>
                <p className="text-muted-foreground italic">
                  "Great design is not just what it looks like and feels like. Great design is how it works. 
                  I believe in creating experiences that are not only beautiful but also functional and accessible to everyone."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;