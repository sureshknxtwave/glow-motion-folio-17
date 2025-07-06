import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "California, USA",
      duration: "2020 - 2022",
      cgpa: "3.9/4.0",
      achievements: [
        "Specialized in Machine Learning and AI",
        "Research Assistant in Computer Vision Lab",
        "Published 2 research papers in top-tier conferences"
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Engineering",
      institution: "MIT",
      location: "Massachusetts, USA",
      duration: "2016 - 2020",
      cgpa: "3.8/4.0",
      achievements: [
        "Summa Cum Laude graduate",
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2019"
      ],
      color: "bg-purple-500"
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "Lincoln High School",
      location: "Boston, USA",
      duration: "2014 - 2016",
      cgpa: "4.0/4.0",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "AP Computer Science Award"
      ],
      color: "bg-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-hero-gradient">
              Education
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and the foundations that shaped my expertise
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-hero-gradient transform md:-translate-x-0.5"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-hero-gradient rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                  {/* Education Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth"
                    >
                      {/* Duration Badge */}
                      <div className={`inline-block px-4 py-2 ${item.color} text-white rounded-full text-sm font-semibold mb-4`}>
                        {item.duration}
                      </div>

                      {/* Degree Info */}
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {item.degree}
                      </h3>
                      
                      <h4 className="text-xl font-semibold text-primary mb-1">
                        {item.institution}
                      </h4>
                      
                      <p className="text-muted-foreground mb-3">{item.location}</p>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-sm font-medium text-muted-foreground">CGPA:</span>
                        <span className="text-lg font-bold text-accent">{item.cgpa}</span>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.5 + (index * 0.2) + (achIndex * 0.1) }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-hero-gradient rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space for Other Side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Certifications */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications & Additional Learning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "AWS Certified Solutions Architect",
                "Google Cloud Professional Developer",
                "Certified Kubernetes Administrator",
                "MongoDB Certified Developer",
                "Scrum Master Certification",
                "Docker Certified Associate"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: 1.5 + (index * 0.1),
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="glass rounded-xl p-6 text-center hover:shadow-elegant transition-smooth"
                >
                  <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <p className="font-semibold text-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;