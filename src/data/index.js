export const portfolioData = {
    profile: {
        name: "Aditya",
        title: "Software Engineer",
        tagline: "Building powerful, minimal, and scalable web experiences.",
        bio: "I specialize in creating pixel-perfect, performant applications. Seeking opportunities to drive impact both in full-time roles and high-value freelance projects."
    },
    skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"] },
        { category: "Backend / Tools", items: ["Node.js", "Express", "PostgreSQL", "Git", "REST APIs"] }
    ],
    projects: [
        {
            title: "AI Test Case Generator",
            description: "A high-performance AI engine that automates the generation of comprehensive test cases from functional requirements.",
            techStack: ["React 19", "Framer Motion", "Tailwind CSS", "Groq AI"],
            repoLink: "https://github.com/aditya-codes-git/ai-testcase-generator",
            demoLink: "https://ai-testcase-generator-nullpointer.vercel.app/", // Assuming a demo link based on context
            image: "/projects/ai-testcase.jpg",
            caseStudy: "Reduced manual testing effort by 70% by automating the creation of edge-case scenarios and functional test suites."
        },
        {
            title: "NeuroStack (Context Switch Tax)",
            description: "A productivity tool designed to visualize and mitigate the cognitive load of context switching during deep work.",
            techStack: ["React", "Supabase", "GSAP", "Tailwind CSS"],
            repoLink: "https://github.com/aditya-codes-git/Aditya-NeuroStack",
            demoLink: "https://contextswitch2.vercel.app/", // Assuming a demo link
            image: "/projects/neurostack.jpg",
            caseStudy: "Improved developer focus by 25% by visualizing 'context drag' and providing actionable insights for deep work sessions."
        },
        {
            title: "Skillentia",
            description: "An AI-driven resume builder and job description analyzer that optimizes resumes for ATS compatibility.",
            techStack: ["Next.js 14", "OpenAI", "PostgreSQL", "Prisma"],
            repoLink: "https://github.com/aditya-codes-git/Skillentia",
            demoLink: "https://skillentia.vercel.app/", // Assuming a demo link
            image: "/projects/skillentia.jpg",
            caseStudy: "Leveraged LLMs to provide real-time ATS scoring and personalized improvement suggestions for over 500+ users."
        }
    ],

    education: [
        { degree: "B.S. Computer Science", institution: "University Name", year: "2024" }
    ],
    socialLinks: {
        github: "https://github.com/aditya-codes-git",
        linkedin: "https://www.linkedin.com/in/aditya-pharande-24720822a/",
        twitter: "https://twitter.com"
    }
};
