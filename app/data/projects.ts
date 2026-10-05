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
// Content mirrors Resume_Facts_Record.md (Oct 3, 2026). Change the record first, then this file.
export const work: Project[] = [
    {
        title: "CVYG Check-In",
        image: "/images/cvygCheck.png",
        year: "2026",
        blurb: "Event check-in platform built solo after youth members were getting conference credit for attendance they didn't have. Deployed across two parishes for a youth community of about 200. Server-enforced controls: single-use QR tokens that expire after two minutes, GPS geofencing, and a limit of one check-in per device per day. Admin dashboard with arrival, parish, and all-time charts, plus a no-code form builder so organizers add fields without code changes. Vitest unit tests on token and geofence logic.",
        tagline: "Next.js 16 · TypeScript · PostgreSQL · Prisma · Vitest · Recharts",
        github: "github.com/AidanYounathan/cvygcheck",
        site: "cvygcheck.vercel.app",
    },
    {
        title: "Sound Canvas",
        image: null,
        year: "2026",
        blurb: "Interactive exhibit installed and running at the Modesto Children's Museum, built by an 8-person DigitalNEST team. I built the tracking pipeline (an Orbbec Femto Mega depth camera over ethernet, streaming real-time motion data via OSC into TouchDesigner) and the gesture recognition that drives the visuals, iterating through feedback rounds with museum staff.",
        tagline: "Depth camera · OSC · TouchDesigner",
    },
    {
        title: "Brown Issues",
        image: "/images/brownIssues.png",
        year: "2025",
        blurb: "WordPress site for a DigitalNEST client, built with a 4+ person team. I built the auto-scrolling marquee carousel and reusable page templates, and owned the accessibility and SEO work (ARIA labels, semantic HTML, image optimization), bringing Lighthouse Accessibility and SEO scores to 85–90+.",
        tagline: "WordPress · Accessibility · SEO",
        site: "brownissuestv.org",
    },
    {
        title: "DigitalNEST Impact Page",
        image: null,
        year: "2025",
        blurb: "Built and animated a responsive section of DigitalNEST's Impact Page with a 6-person team, with semantic markup and ARIA on my components, shipped to production through reviewed pull requests.",
        tagline: "React · TypeScript",
        site: "digitalnest.org/our-impact",
    },
    {
        title: "SoundReel",
        image: null,
        year: "2026",
        blurb: "Personal mobile app. Async FastAPI backend that offloads blocking work to a worker thread and serves audio through FileResponse, which handles HTTP Range requests so playback can seek. Typed React Native (Expo) client with Zustand state, background playback, and remote media controls.",
        tagline: "Python · FastAPI · React Native · Expo · Zustand",
    },
    {
        title: "Caddy Track",
        image: null,
        year: "2024",
        blurb: "CodeStack Academy team project. I led the 3-person team and built the entire frontend, including user profiles, dashboards, and charts; teammates built the C#/.NET backend, authentication, and live chat.",
        tagline: "Next.js · TypeScript",
    },
]

export const featuredProjects = work.slice(0, 4)

// Home marquee (design section #3a)
export const marqueeSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "PostgreSQL",
    "React Native",
    "Accessibility",
    "Real-time systems",
]

// Stack layers — terminal `stack` command + resume sidebar
export const stackLayers = [
    { mark: "01", label: "Application", items: ["TypeScript", "React", "Next.js", "Vite", "React Native / Expo", "WCAG 2.2 AA · ARIA"] },
    { mark: "02", label: "Services", items: ["Next.js route handlers", "FastAPI (Python)", "PHP", "Cloudflare Workers"] },
    { mark: "03", label: "Data", items: ["PostgreSQL", "Prisma", "SQLite", "Cloudflare D1", "SQL"] },
    { mark: "04", label: "Interactive systems", items: ["Depth camera integration", "Real-time motion tracking", "Gesture recognition", "OSC pipelines", "TouchDesigner"] },
    { mark: "05", label: "Practice", items: ["Git/GitHub", "Vitest testing", "Claude Code · Cursor"] },
]

// Experience — about page + resume page. CodeStack is unpaid training and stays labeled as a program.
export const experience = [
    {
        dates: "August 2026 – Present",
        title: "Senior Software Engineering Associate",
        company: "DigitalNEST · Stockton, CA",
        tags: ["Team lead", "Client management", "React", "Next.js", "Accessibility"],
        bullets: [
            "Lead a team of 3 engineers and serve as primary client contact on two concurrent client projects, owning each from requirements and scoping through delivery, working with DigitalNEST's designers.",
            "Took over as lead on Seledon with the promotion; integrating Google Apps Script so the client can edit the main-page chart's data from a Google Sheet.",
            "Advise engineering teams at other DigitalNEST locations on technical approach.",
        ],
    },
    {
        dates: "September 2025 – August 2026",
        title: "Software Engineer",
        company: "DigitalNEST · Modesto, CA",
        tags: ["React", "Vite", "TypeScript", "WordPress", "Computer vision"],
        bullets: [
            "Built the depth-camera tracking pipeline and gesture recognition for Sound Canvas, an interactive exhibit installed and running at the Modesto Children's Museum (8-person team).",
            "Built most of the landing page and the About page for Seledon (Vite, React).",
            "Owned accessibility and SEO work on two client sites, Seledon and Brown Issues, bringing Lighthouse Accessibility and SEO scores to 85–90+.",
            "Researched and evaluated AI development tooling, driving team adoption of Cursor, Claude Code, and Google Antigravity.",
        ],
    },
    {
        dates: "June 2024 – December 2024",
        title: "Software Engineer",
        company: "Trinchero Family Estates · Napa, CA (Hybrid)",
        tags: ["WCAG 2.2 AA", "WordPress", "PHP", "JavaScript"],
        bullets: [
            "Delivered a solo WCAG 2.2 AA accessibility upgrade on a seven-figure WordPress, PHP, and JavaScript e-commerce platform: site-wide external audit score from about 65 to 90, Lighthouse Accessibility from about 72 to 97; contributed to a team-reported 10% conversion lift.",
            "Raised Lighthouse SEO from about 65 to 95 through alt text and image optimization, meta tags, and heading structure.",
            "Refactored legacy WordPress, PHP, and JavaScript in the ordering and checkout flows.",
        ],
    },
    {
        dates: "September 2023 – September 2024",
        title: "Certified Software Engineer (training program)",
        company: "CodeStack Academy",
        tags: ["Training", "Next.js", "TypeScript"],
        bullets: [
            "Year-long software engineering program, 1,100+ hours; Congressional Recognition.",
            "Built 8 solo web applications.",
            "Led a 3-person team on Caddy Track and built its entire frontend.",
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
