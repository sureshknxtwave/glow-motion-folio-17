import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 82, color: "bg-green-700" },
        { name: "GraphQL", level: 80, color: "bg-pink-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, color: "bg-orange-500" },
        { name: "Docker", level: 85, color: "bg-blue-400" },
        { name: "AWS", level: 80, color: "bg-orange-400" },
        { name: "Figma", level: 90, color: "bg-purple-500" },
        { name: "Adobe XD", level: 88, color: "bg-purple-600" }
      ]
    }
  ];

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
    <section id="skills" className="py-20 bg-muted/30">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth"
              >
                <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                        duration: 0.6
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.8,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "React", "Vue", "Angular", "Node.js", "Python", "TypeScript", 
                "JavaScript", "HTML5", "CSS3", "SASS", "PostgreSQL", "MongoDB",
                "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Firebase"
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: 1.5 + (index * 0.05),
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="skill-icon px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;