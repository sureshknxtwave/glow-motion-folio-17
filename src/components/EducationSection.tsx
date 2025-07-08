

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "KL University",
      location: "Vijayawada, India",
      duration: "July 2023 – May 2026",
      cgpa: "9.5/10.0",
      achievements: [
        "Specialization in AI and Intelligent Process Automation",
        "Consistently maintained a high academic performance",
        "Engaged in practical and real-world project development"
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      degree: "Industry Ready Certification in Full Stack Development",
      institution: "Nxtwave Disruptive Technologies",
      location: "India",
      duration: "September 2022 – October 2026",
      cgpa: null,
      achievements: [
        "Completed multiple real-world projects using MERN stack",
        "Solved 400+ DSA problems on LeetCode & Nxtwave platform",
        "Gained hands-on experience with Stripe, Clerk, AWS, Convex, and GraphQL"
      ],
      color: "bg-yellow-500"
    },
    {
      id: 3,
      degree: "Diploma in Computer Science Engineering",
      institution: "M.B.T.S Govt Polytechnic",
      location: "Guntur, India",
      duration: "July 2020 – May 2023",
      cgpa: "86%",
      achievements: [
        "Strong foundation in core computer engineering subjects",
        "Scored distinction across all semesters",
        "Actively participated in coding and technical events"
      ],
      color: "bg-green-500"
    }
  ];

  const certifications = [
    "AI Associate — Salesforce",
    "React Essentials — Nxtwave",
    "Node.js Essentials — Nxtwave",
    "Python Essentials — Nxtwave",
    "JavaScript & Databases — Nxtwave",
    "Developer Foundations — Nxtwave"
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and the foundations that shaped my expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
  <div
    key={item.id}
    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
  >
    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

    <div
      className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center md:items-start text-center md:text-left">
        <div
          className={`inline-block px-4 py-2 ${item.color} text-white rounded-full text-sm font-semibold mb-4`}
        >
          {item.duration}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {item.degree}
        </h3>
        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
          {item.institution}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{item.location}</p>

        {item.cgpa && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-gray-500">CGPA:</span>
            <span className="text-lg font-bold text-green-600">{item.cgpa}</span>
          </div>
        )}

        <div className="w-full">
          <h5 className="font-semibold mb-3 text-gray-800 dark:text-white">
            Key Achievements:
          </h5>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5 text-left">
            {item.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="hidden md:block w-5/12"></div>
  </div>
))}

          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Achievements & Certifications
          </h3>

          {/* Achievements */}
          <div className="mb-10 space-y-6 max-w-4xl mx-auto text-left text-sm md:text-base">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">🏆 Achievements & Awards</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Top Intern</strong> at Webxinfinity for delivering 30% performance improvements across key product features ahead of schedule.</li>
                <li><strong>1st Place</strong> – College Hackathon: Led a 4-member team to build a scalable AI-driven solution, outperforming 50+ teams at KL University.</li>
                <li><strong>₹1L Academic Scholarship</strong> awarded by KL University based on merit.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="font-semibold text-gray-800 dark:text-white">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
