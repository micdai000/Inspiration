// your single source of truth

const profile = {
  basics: {
    fullName: "Michael Bryan Davila-Montoya",
    role: "Information Systems Student & MTC Instructor",
    location: "Provo, Utah",
    bio: `
      I’m a first-generation college student studying Information Systems at Brigham Young University, 
      with a growing focus on project management. With a foundation in software development, data analysis, 
      and cross-cultural leadership, I’m passionate about using technology to solve real-world problems—especially 
      in under-resourced or high-impact environments.

      My journey started with a desire to help people—whether that was teaching Spanish at the MTC, 
      serving in communities across Montreal, Canada, or building tools to make daily life easier. 
      Along the way, I’ve learned that strong systems, good data, and clear communication can make a big difference.

      Fluent in English, Spanish, and proficient in Mandarin, I bring a global mindset, curiosity, and a drive to learn.

      🔐 Currently seeking internships or projects in project management and data analytics where I can 
      apply my technical and interpersonal skills to build safer systems and make a meaningful impact.
    `
  },

  strengths: [
    "Clear communicator and educator",
    "Strong problem-solving mindset",
    "Able to bridge technical and non-technical audiences",
    "Leadership through service and mentoring",
    "Rapid learner with strong systems thinking"
  ],

  hobbies: [
    "Teaching and mentoring",
    "Language learning (Spanish & Mandarin)",
    "Sports: Pickleball, Soccer, Iceskating, Weight Lifting",
    "Music: Indie, 2000s/2010s throwbacks, Reggaeton, Latin pop",
    "Spontaneous Activities: Cave exploring, Hot Springs, Hiking, Photography",
  ],

  projects: [
    {
      name: "Ella Rises Analytics Platform & Presentation (AKA: INTEX)",
      description:
        "communicating complex statistical results in simple, persuasive terms and recommending operational strategies to improve program retention and student engagement",
      technologies: ["Python", "Pandas", "Tableau", "AWS", "Canva"],
      status: "Completed"
    },

    {
      name: "Inspiration (Personal Professional Website)",
      description:
        "A cloud-deployed personal website featuring an AI-powered assistant that answers questions about my background, skills, and projects.",
      technologies: ["Node.js", "Express", "EJS", "AWS Elastic Beanstalk"],
      status: "In Progress"
    },

    {
      name: "EY Consulting Case Study (2025)",
      description:
        "Evaluated penetration test results and corporate network diagrams, identifying and ranking 6+ vulnerabilities; proposed segmentation and firewall fixes that reduced breach risk 40% (Penetration Testing, Network Analysis)",
      status: "Completed"
    },

    {
      name: "E-Commerce Data Analysis (2025) ",
      description:
        "Performed EDA on 51K-row dataset using Python (Pandas, Seaborn, SciPy, Stats models) to identify profit drivers across segments; used correlation, ANOVA, Tukey tests to reveal statistically significant performance patterns",
      technologies: ["Pandas", "Python", "Google Colab", "PowerPoint"],
        status: "Completed"
    }

  ],

  birthday: {
    year: 2003,
    month: 4, // April
    day: 1  
  }
};

module.exports = profile;
