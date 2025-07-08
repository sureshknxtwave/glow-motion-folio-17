const WorkExperienceSection = () => {
  const workExperience = [
    {
      id: 1,
      title: "Web Developer Intern",
      organization: "Webxinfinity",
      location: "Remote",
      duration: "January 2025 – April 2025",
      description: "Developed and maintained production-grade web apps using the MERN stack and PostgreSQL.",
      highlights: [
        "📘 LearnSphere – AI-powered course platform built using MERN, Stripe, Clerk, and AWS.",
        "🏗 United Build Pro – Construction business website using Medusa.js and PostgreSQL.",
        "💬 Chatty – Real-time chat app using Socket.io, Tailwind CSS, MongoDB, and Express.",
        "📚 Online Course Registration System – React, Bootstrap, MongoDB, Stripe integration for course enrollment.",
        "Implemented multi-tiered distributed storage and query systems with fault tolerance.",
        "Followed Agile practices, participated in code reviews, and maintained Git workflows.",
        "Presented trade-offs and system design decisions to stakeholders regularly."
      ],
      technologies: [
        "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Convex", "Stripe", "Clerk", "Git"
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Freelance Developer",
      organization: "Personal Projects & Clients",
      location: "Remote",
      duration: "2023 – Present",
      description: "Delivered custom full-stack applications and dashboards.",
      highlights: [
        "Built AI chatbot, course platform, and admin panels.",
        "Used GraphQL, AWS, Docker, and WebSockets.",
        "Collaborated remotely with international clients."
      ],
      technologies: [
        "React", "Next.js", "MongoDB", "Express", "Stripe", "Clerk", "AWS", "Medusa.js", "GraphQL", "Socket.io", "TanStack Query", "Tailwind CSS"
      ],
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My experience at tech companies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-0.5"></div>

          {/* Work Experience Cards */}
          {workExperience.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8 mb-12`}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

              <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`inline-block px-4 py-2 ${item.color} text-white rounded-full text-sm font-semibold mb-4`}>
                    {item.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.organization}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.location}</p>

                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-2 text-left w-full">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {item.technologies && (
                    <div className="mt-4 w-full">
                      <h5 className="font-semibold mb-2 text-gray-800 dark:text-white">Technologies Used:</h5>
                      <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                        {item.technologies.map((tech, idx) => (
                          <li key={idx} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
