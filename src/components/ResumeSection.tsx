import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, FileText, Eye, Download } from 'lucide-react';

const ResumeSection = () => {
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

  const handleDownloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '/MyResume.pdf'; // You would replace this with actual resume path
    link.download = 'SureshK.pdf';
    link.click();
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/MyResume.pdf', '_blank');
  };

  const resumeStats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Client Satisfaction", value: "100%" }
  ];

  const resumeSections = [
  {
    title: "Professional Experience",
    description: "Full-stack development with real-world project delivery and industry internships",
    items: [
      "Full-Stack Developer Intern at Webxinfinity",
      "Built real-time and scalable applications using React, Node.js, and Convex",
      "Integrated payment and authentication systems using Stripe and Clerk"
    ]
  },
  {
    title: "Technical Skills",
    description: "Comprehensive technical expertise across modern development tools and practices",
    items: [
      "Programming Languages: Python, Java, C++, C, JavaScript, TypeScript",
      "Web Technologies: HTML, CSS, Tailwind CSS, Bootstrap, React, Next, Node, Express",
      "Databases: MySQL, PostgreSQL, MongoDB, Convex (serverless & real-time)",
      "DSA: Solved 400+ problems on Nxtwave & LeetCode – Arrays, Strings, Trees, Graphs, DP, Heaps, Tries, etc.",
      "System Design: Microservices, REST APIs, WebSockets, SQL/NoSQL, Caching, Load Balancing, Distributed Systems",
      "DevOps & Cloud: AWS, CI/CD (basics), Kubernetes (basics)",
      
    ]
  },
  {
    title: "Education & Certifications",
    description: "Strong academic background with continuous learning through certifications and projects",
    items: [
      "B.Tech in Computer Science and Engineering (AI & IPA Specialization)",
      "Diploma in Computer Engineering",
      "Completed multiple real-world projects via NxtWave CCBP 4.0 Academy"
    ]
  }
];


  return (
    <section id="resume" className="py-20 bg-muted/30">
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
              Resume
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume or view it online to learn more about my professional journey
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {resumeStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: 0.5 + (index * 0.1),
                  type: 'spring',
                  stiffness: 200
                }}
              >
                <Card className="p-6 text-center glass hover:shadow-elegant transition-smooth">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume Sections */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Inside</h3>
              
              {resumeSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ delay: 0.8 + (index * 0.2) }}
                >
                  <Card className="p-6 hover:shadow-elegant transition-smooth">
                    <h4 className="text-xl font-semibold text-foreground mb-3">{section.title}</h4>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-hero-gradient rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Preview Card */}
            <motion.div variants={itemVariants} className="relative">
              <Card className="p-8 glass shadow-elegant hover:shadow-glow transition-smooth">
                {/* Mock Resume Preview */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-inner">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Suresh K</h3>
                      <p className="text-gray-600">Full Stack Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
  <div>
    <h4 className="font-semibold border-b border-gray-200 pb-1 mb-2">Experience</h4>
    <div className="text-sm space-y-1">
      <p>Full-Stack Developer Intern at Webxinfinity</p>
      <p>Built scalable apps using React, Node.js, Convex</p>
      <p>Integrated Stripe, Clerk, and Stream.io</p>
    </div>
  </div>

  <div>
    <h4 className="font-semibold border-b border-gray-200 pb-1 mb-2">Skills</h4>
    <div className="text-sm space-y-1">
      <p><strong>Languages:</strong> Python, Java, C++, C, JavaScript, TypeScript</p>
      <p><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, Bootstrap, React, Next.js</p>
      <p><strong>Backend:</strong> Node.js, Express.js</p>
      <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Convex</p>
      <p><strong>Libraries:</strong> Pandas, NumPy, Matplotlib, Seaborn</p>
      <p><strong>System Design:</strong> Microservices, REST APIs, WebSockets, Caching, Auth, Load Balancing</p>
      <p><strong>Distributed Systems:</strong> Docker, Redis, Kafka, Socket.io</p>
      <p><strong>APIs & Tools:</strong> Stripe, Clerk, GraphQL, Git, GitHub, Linux</p>
      <p><strong>Cloud & DevOps:</strong> AWS, CI/CD, Kubernetes</p>
      <p><strong>Soft Skills:</strong> Communication, Teamwork, Technical Documentation</p>
    </div>
  </div>

  <div className="text-center pt-4">
    <div className="text-xs text-gray-400">... and much more</div>
  </div>
                </div>

                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleDownloadResume}
                    size="lg"
                    className="flex-1 bg-hero-gradient hover:opacity-90 text-white font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </Button>
                  
                  <Button
                    onClick={handleViewResume}
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 hover:bg-muted"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Online
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Updated: December 2024 • Available in PDF format
                  </p>
                </div>
              </Card>

              {/* Floating Download Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Latest Version
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If my background aligns with what you're looking for, I'd love to discuss how we can create something amazing together.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-6 text-lg font-semibold bg-hero-gradient hover:opacity-90 text-white"
              >
                Let's Connect
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;