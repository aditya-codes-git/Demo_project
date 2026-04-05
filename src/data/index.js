export const portfolioData = {
    profile: {
        name: "Aditya",
        title: "Full-Stack Engineer",
        tagline: "CS student who ships.",
        bio: "I've built an AI test case generator, a cognitive load tracker, and an ATS-optimized resume builder — all from scratch. I work across the stack with React, Node, Supabase, and AI APIs to solve problems that actually matter.",
        resumeLink: "/Aditya_Resume.pdf"
    },
    skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"] },
        { category: "Backend / Tools", items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Git", "REST APIs"] }
    ],
    projects: [
        {
            title: "TestPilot AI",
            description: "An AI engine that transforms plain-text feature requirements into structured, exportable QA test suites — replacing hours of manual test writing with a single prompt.",
            techStack: ["React 19", "Framer Motion", "Tailwind CSS", "Groq AI (Llama 3.3)"],
            repoLink: "https://github.com/aditya-codes-git/ai-testcase-generator",
            demoLink: "https://ai-testcase-generator-nullpointer.vercel.app/",
            image: "/projects/ai-testcase.jpg",
            caseStudy: "Generates boundary-value, negative, and edge-case test scenarios from natural language input. Built with Groq's Llama 3.3 for sub-second inference."
        },
        {
            title: "ContextSwitch",
            description: "A neuro-productivity tool that captures your work state — tabs, notes, timestamps — so you can resume deep work without the mental overhead of context switching.",
            techStack: ["React", "Supabase", "GSAP", "Tailwind CSS", "Gemini AI"],
            repoLink: "https://github.com/aditya-codes-git/Aditya-NeuroStack",
            demoLink: "https://contextswitch2.vercel.app/",
            image: "/projects/neurostack.jpg",
            caseStudy: "Implements session snapshots with AI-generated resume briefs using Gemini. Automatically extracts YouTube timestamps for video-based learning sessions."
        },
        {
            title: "Skillentia",
            description: "An AI-powered resume builder that scores your resume against job descriptions for ATS compatibility, then gives you specific fixes — not generic advice.",
            techStack: ["Next.js 14", "Gemini AI", "PostgreSQL", "Prisma"],
            repoLink: "https://github.com/aditya-codes-git/Skillentia",
            demoLink: "https://skillentia.vercel.app/",
            image: "/projects/skillentia.jpg",
            caseStudy: "Uses Gemini Flash for real-time keyword density analysis and skill-gap detection. Outputs ATS-optimized resumes with section-by-section scoring."
        }
    ],

    education: [
        { degree: "B.S. Computer Science", institution: "Your University", year: "2026" }
    ],
    socialLinks: {
        email: "adityapharande.dev@gmail.com",
        github: "https://github.com/aditya-codes-git",
        linkedin: "https://www.linkedin.com/in/aditya-pharande-24720822a/",
    }
};
