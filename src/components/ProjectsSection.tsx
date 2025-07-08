import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "Chat & Video Calling App",
      description: "Built real-time messaging with typing indicators and emoji reactions, boosting user engagement by 20%. Used Socket.io and WebRTC for real-time communication over TCP/IP. Added group video calling to support social learning, increasing user retention by 35%. Implemented TanStack Query for efficient data fetching and caching, improving load times by 60%. Integrated Stream for scalable, reliable messaging, achieving 99% uptime across all sessions.",
      image: project1,
      technologies: [ "React", "Express", "MongoDB", "Tailwind CSS", "Tanstack Query", "Socket.io"],
      liveUrl: "https://streamify-video-calls-nise.onrender.com/",
      githubUrl: "https://github.com/sureshknxtwave/streamify-video-calls",
      featured: true
    },
    {
      id: 2,
      title: "Remote Interview Platform",
      description: "Built a real-time interview platform with Stream, enabling seamless video calls, screen sharing, and recording.Designed a modern UI with Tailwind CSS & Shadcn, increasing user engagement by 40%.Integrated Clerk for authentication & Convex for data storage, enhancing security and scalability.Optimized server actions & server components, improving performance by 30% and reducing load times.",
      image: project2,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Stream", "Convex", "Clerk"],
      liveUrl: "https://skcodesync.vercel.app/",
      githubUrl: "https://github.com/sureshknxtwave/Remote_Interview_Platform",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Fitness Assistant Web App",
      description: "Developed a conversational fitness assistant using Vapi and Gemini AI to provide real-time, personalized fitness and nutrition plans based on user input like goals, injuries, and dietary preferences.Integrated Clerk for secure, seamless authentication via GitHub, Google, and email/password.Used Convex for real-time state management, enabling instant plan updates and interactions across sessions.Built a responsive, accessible UI with Tailwind CSS and Shadcn UI, ensuring smooth UX across all devices and user needs.",
      image: project3,
      technologies: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Vapi", "Gemini AI", "Clerk", "Convex"],
      liveUrl: "https://code-flex-orpin.vercel.app/",
      githubUrl: "https://github.com/sureshknxtwave/CodeFlex",
      featured: true
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
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-hero-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing some of my recent work and the technologies I've mastered
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group portfolio-card glass rounded-2xl overflow-hidden shadow-elegant"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-hero-gradient/0 group-hover:bg-hero-gradient/20 transition-smooth"></div>
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-hero-gradient text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;