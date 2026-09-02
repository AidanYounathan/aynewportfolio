export type Project = {
    title: string
    image: string | null
    year: string
    blurb: string
    tagline: string
    github?: string
    site?: string
}

// Work page + featured list (design section #4a / #3a)
export const work: Project[] = [
    {
        title: "CVYG Check-In",
        image: "/images/cvygCheck.png",
        year: "2026",
        blurb: "Full-stack event check-in platform built solo, from problem definition through production — rolling out across two parishes serving ~200 youth members. Single-use, time-limited QR codes with rotating server-side tokens, GPS geofencing, device fingerprinting, an admin analytics dashboard, and a no-code form builder. Vitest coverage on token rotation and geofence validation.",
        tagline: "Next.js 15 · TypeScript · PostgreSQL · Vitest · Recharts",
        github: "github.com/AidanYounathan/cvygcheck",
        site: "cvygcheck.vercel.app",
    },
    {
        title: "Sound Canvas",
        image: null,
        year: "2026",
        blurb: "Interactive museum exhibit installed and running at the MOCHIMU children's museum. Built the player-tracking pipeline — an Orbbec Femto Mega depth camera streaming real-time motion data over OSC — and the gesture-recognition logic translating body movement into expressive visual and audio output. 8-person DigitalNEST team.",
        tagline: "Depth camera · OSC · TouchDesigner · C#",
    },
    {
        title: "SoundReel",
        image: null,
        year: "2026",
        blurb: "Full-stack audio streaming app built solo. Async FastAPI backend with HTTP Range support for seek-while-streaming playback; typed React Native (Expo) client with Zustand state management, background playback, and lock-screen media controls.",
        tagline: "Python · FastAPI · React Native · Expo · Zustand",
    },
    {
        title: "Brown Issues",
        image: "/images/brownIssues.png",
        year: "2025",
        blurb: "WordPress site for a Bay Area digital news publication. Custom auto-scrolling marquee, reusable page templates, and an accessibility and SEO overhaul — ARIA labels, semantic HTML, systematic image optimization — contributing to 85–90+ performance scores.",
        tagline: "WordPress · Accessibility · SEO",
        site: "brownissuestv.org",
    },
    {
        title: "DigitalNEST Impact Page",
        image: null,
        year: "2025",
        blurb: "Built and animated a responsive page section shipped to production with a 6-person team — cross-browser consistency, mobile layout fidelity, and accessibility standards across contributed components.",
        tagline: "React · TypeScript",
        site: "digitalnest.org/our-impact",
    },
    {
        title: "Caddy Track",
        image: null,
        year: "2024",
        blurb: "Golf performance tracker built by a 3-person Agile team I led at CodeStack Academy — authentication, persistent profiles, responsive dashboards, interactive performance charts, and a real-time live chat system.",
        tagline: "Next.js · TypeScript · C#/.NET · SQL",
    },
]

export const featuredProjects = work.slice(0, 4)

// Home marquee (design section #3a)
export const marqueeSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "C#/.NET",
    "Python",
    "PostgreSQL",
    "React Native",
    "Accessibility",
    "Real-time systems",
]

// Stack layers — terminal `stack` command + resume sidebar
export const stackLayers = [
    { mark: "01", label: "Application", items: ["TypeScript", "React", "Next.js", "React Native / Expo", "WCAG 2.2 AA · ARIA"] },
    { mark: "02", label: "Services", items: ["Node.js", "C#/.NET (ASP.NET Core)", "FastAPI (Python)", "PHP", "REST API design"] },
    { mark: "03", label: "Data", items: ["PostgreSQL", "SQLite", "Relational schema design", "SQL"] },
    { mark: "04", label: "Interactive systems", items: ["Depth camera integration", "Real-time motion tracking", "Gesture recognition", "OSC pipelines", "TouchDesigner"] },
    { mark: "05", label: "Practice", items: ["Git/GitHub · CI/CD", "Vitest testing", "Code reviews · Agile/Scrum", "Claude Code · Cursor · Copilot"] },
]

// Experience — about page + resume page
export const experience = [
    {
        dates: "August 2026 – Present",
        title: "Senior Software Engineering Associate",
        company: "DigitalNEST",
        tags: ["Team lead", "Client management", "React", "Next.js", "Node.js"],
        bullets: [
            "Lead a team of 3 engineers, owning technical direction, sprint planning, code review, and delivery across concurrent client projects.",
            "Serve as primary client point of contact: run requirements meetings, scope technical solutions, and manage deadlines and delivery expectations directly with stakeholders.",
            "Own client projects end to end, from initial requirements and architecture through implementation, deployment, and post-launch support.",
            "Advise engineering teams across additional DigitalNEST locations on technical approach and standards.",
        ],
    },
    {
        dates: "September 2025 – August 2026",
        title: "Software Engineer",
        company: "DigitalNEST",
        tags: ["React", "Next.js", "TypeScript", "WordPress", "Computer vision"],
        bullets: [
            "Engineered the depth-camera tracking and gesture-recognition pipeline for Sound Canvas, an interactive exhibit now installed and running at the MOCHIMU children's museum.",
            "Shipped client-facing features across React, Next.js, Node.js, TypeScript, and WordPress, including animated page sections, reusable component libraries, and responsive layouts deployed across multiple client sites.",
            "Developed accessible production interfaces using ARIA standards and semantic HTML, raising Lighthouse scores into the 85–90+ range across client projects.",
            "Led SEO initiatives including systematic image optimization, alt text coverage, and structured content improvements.",
            "Researched and evaluated AI development tooling, driving team adoption of Cursor, Claude Code, and Google Antigravity into daily engineering workflows.",
        ],
    },
    {
        dates: "June 2024 – December 2024",
        title: "Software Engineer",
        company: "Trinchero Family Estates",
        tags: ["WCAG 2.2 AA", "WordPress", "PHP", "JavaScript"],
        bullets: [
            "Led a WCAG 2.2 AA accessibility upgrade across a production e-commerce platform generating $1.8M+ annually, raising compliance by 30 percent and contributing to a 10 percent increase in sales conversion.",
            "Refactored and modernized legacy WordPress, PHP, and JavaScript codebases across business-critical ordering and checkout flows.",
            "Debugged production defects end to end, from initial report through root-cause analysis to verified resolution, coordinating fixes with engineering and QA.",
            "Built reusable UI components and API integrations across 600+ hours of hands-on development.",
        ],
    },
    {
        dates: "September 2023 – September 2024",
        title: "Apprentice Software Engineer",
        company: "CodeStack Academy",
        tags: ["C#/.NET", "Next.js", "SQL", "Agile"],
        bullets: [
            "Completed 1,100+ hours of full-time software engineering training covering data structures, algorithms, object-oriented design, REST APIs, relational databases, cloud deployment, and peer code review.",
            "Led a 3-person Agile team building a full-stack application with a C#/.NET (ASP.NET Core) backend, SQL database, and Next.js frontend, owning architecture decisions, PR management, sprint planning, standups, and conflict resolution.",
            "Delivered 8 solo web applications end to end, from requirements and design through deployment and technical documentation.",
            "Received Congressional Recognition on program completion.",
        ],
    },
]

// About page photo carousels (design section #4b)
export const shootPhotos = [
    { src: "/images/halfDome.jpg", alt: "Half Dome" },
    { src: "/images/hikingGranite.jpg", alt: "Hiking granite" },
    { src: "/images/yosemiteValley.jpg", alt: "Yosemite valley" },
    { src: "/images/E6E7A27B-AA2D-4A6C-9DFB-AA94C812AEA4_1_105_c.jpeg", alt: "Yosemite panoramic" },
]

export const naturePhotos = [
    { src: "/images/EC867AEB-7134-484C-B686-3A0E6259B7E3_1_105_c.jpeg", alt: "Misty beach" },
    { src: "/images/5F7D56C0-6683-46F3-9403-ECF5405EA876_1_105_c.jpeg", alt: "Ocean bay" },
    { src: "/images/EE18136C-234A-4C55-A90D-76B7DF230340_1_105_c.jpeg", alt: "Golden Gate Bridge" },
    { src: "/images/9312424D-400B-41B1-9A0E-505DBEA27117_1_105_c.jpeg", alt: "Golden Gate structure" },
    { src: "/images/F9CC4FFE-7AA6-4999-8DBD-280FD2A9C89C_1_105_c.jpeg", alt: "Mission district mural" },
]
