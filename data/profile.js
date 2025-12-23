// data/profile.js
const profile = {
  basics: {
    fullName: "Michael Bryan Davila-Montoya",
    role: "Information Systems Student & MTC Instructor",
    location: "Provo, Utah",

    intro: `
      I’m a first-generation college student studying Information Systems at
      Brigham Young University with a strong interest in Project Management and Leadership.
    `,

    story: `
      My journey began with a desire to help people—whether that meant teaching Spanish
      at the MTC, serving communities in Montreal, Canada, or building systems that make
      complex processes easier and more accessible.

      Along the way, I’ve learned that strong systems, good data, and clear communication
      can create meaningful impact, especially in under-resourced or high-stakes environments.
    `,

    skillsSummary: `
      With experience in software development, data analysis, and cross-cultural leadership,
      I enjoy working at the intersection of people, process, and technology.
    `,

    languages: ["English", "Spanish", "Mandarin"],

    objective: `
      I am currently seeking internships and opportunities to gain hands-on experience in
      project management, consulting, or analytics-focused roles, as well as opportunities
      to connect with others through tech conferences and professional events.
    `
  },

  strengths: [
    "Clear communicator and educator",
    "Strong project and problem-solving mindset",
    "Able to bridge technical and non-technical audiences",
    "Leadership through teaching, service, and mentoring",
    "Adaptable, curious, and systems-oriented"
  ],

  hobbies: [
    "Teaching and mentoring",
    "Language learning (Spanish & Mandarin)",
    "Pickleball, soccer, ice skating, weight lifting",
    "Music: Indie, 2000s/2010s throwbacks, Reggaeton, Latin pop",
    "Exploring nature, photography, and spontaneous adventures"
  ],

  projects: [
    {
      name: "Ella Rises Analytics Platform & Presentation (INTEX)",
      description:
        "Analyzed program retention and engagement data and presented actionable, data-driven recommendations to nonprofit stakeholders.",
      technologies: ["Python", "Pandas", "Tableau", "AWS", "Canva"],
      status: "Completed"
    },
    {
      name: "Project Inspiration (Personal Professional Website)",
      description:
        "A cloud-deployed personal website featuring an AI-powered assistant that answers questions about my background, skills, and projects.",
      technologies: ["Node.js", "Express", "EJS", "AWS Elastic Beanstalk"],
      status: "In Progress"
    },
    {
        name: "E-Commerce Data Analysis",
        description: 
        "Performed EDA on 51K-row dataset using Python (Pandas, Seaborn, SciPy, Stats models) to identify profit drivers across segments; used correlation, ANOVA, Tukey tests to reveal statistically significant performance patterns",
        technologies: ["Pandas"],
        status: "Completed"
    },
    {
        name: "EY Consulting Case Study",
        description:
        "Evaluated penetration test results and corporate network diagrams, identifying and ranking 6+ vulnerabilities; proposed segmentation and firewall fixes that reduced breach risk 40% (Penetration Testing, Network Analysis)",
        status: "Completed"
    }
  ],

  birthday: {
    year: 2003,
    month: 4,
    day: 1
  }
};

module.exports = profile;
