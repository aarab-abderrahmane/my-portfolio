
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'PlanPulse',
    shortDescription: 'A modern, glassmorphic todo application focused on customization and fluid UX.',
    problem: 'Traditional task management tools often lack visual customization and fluid interactivity, making productivity feel mundane and rigid.',
    solution: 'Built a highly customizable, glassmorphic productivity application leveraging React 19 for efficient state management and a seamless drag-and-drop user experience.',
    features: ['Dynamic Widget Layouts', 'Local Data Persistence (JSON)', 'Advanced UI Customization'],
    mainImage: './images/planpulse-image-2.png',
    gallery: ['./images/planpulse-image-1.png', './images/planpulse-image-3.png','./images/planpulse-image-4.png','./images/planpulse-image-5.png'],
    tags: ['React 19', 'Tailwind CSS 4', 'Vite', '@dnd-kit', 'Framer Motion'],
    category: 'apd',
    liveUrl : "https://planpulse.vercel.app",
    sourceUrl : "https://github.com/aarab-abderrahmane/PlanPulse",
    techStack: [
      { tech: 'React 19', context: 'Orchestrated complex global state for themes, widgets, and task data using Context API.' },
      { tech: 'Tailwind CSS 4', context: 'Implemented a dynamic theming system using CSS variables to support 9 color schemes and glassmorphism effects.' },
      { tech: '@dnd-kit', context: 'Engineered a dual-mode drag-and-drop system for reordering both individual tasks and entire widget sections.' }
    ],
    accentClass:'rose-200'
  },
  {
    id: 'p2',
    name: 'Tahsil - Smart Bac Calculator',
    shortDescription: 'AI-powered academic analyzer and grade calculator for Moroccan Baccalaureate students.',
    problem: 'Students struggle with complex grading weightage and lack personalized guidance for university selection based on their academic performance.',
    solution: 'A bilingual (AR/FR) platform that automates calculation across all Bac modes and leverages Google Gemini AI to provide performance analysis and study roadmaps.',
    features: [
      'AI Performance Analysis',
      'University Recommendation Engine',
      'Bilingual (Arabic/French) Interface',
      'Study Roadmap Generator'
    ],
    mainImage: '/images/tahsil-image-1.png', // Thematic image: Education/Calculations
    gallery: [
      'images/tahsil-image-2.png',
      'images/tahsil-image-3.png',
      'images/tahsil-image-7.png',
      'images/tahsil-image-4.png',
      'images/tahsil-image-5.png',
      'images/tahsil-image-6.png'


    ],
    tags: ['React', 'Node.js', 'Gemini AI', 'Tailwind'],
    category: 'logic',
    techStack: [
      { tech: 'Google Gemini AI', context: 'Integrated to process grade maps and generate personalized strategic study plans.' },
      { tech: 'Recharts', context: 'Used for visualizing performance data and subject-level simulation trends.' },
      { tech: 'Express & Node.js', context: 'Secure backend architecture featuring device fingerprinting and rate-limiting for API protection.' }
    ],
    liveUrl: "https://tahsil.vercel.app/", // Adjust based on your actual deployment
    sourceUrl: "https://github.com/aarab-abderrahmane/TAHSIL-",
    accentClass:'[#ffd60a]'

  },
  {
    id: 'p3',
    name: 'ChatForge Terminal',
    shortDescription: 'A retro-inspired, CRT-styled terminal interface for immersive AI conversations.',
    problem: 'Modern AI chat interfaces often feel sterile and corporate, lacking the personality and nostalgic aesthetic of classic computing environments.',
    solution: 'Developed a high-fidelity terminal UI featuring CRT scan lines and neon glow effects, integrated with OpenRouter for real-time AI streaming and secure session management.',
    features: ['Retro CRT Aesthetics', 'OpenRouter AI Integration', 'Secure MongoDB Key Vault', 'Syntax Highlighted Code Output'],
    mainImage: '/images/chatforge-image-1.png', // Placeholder for project banner
    gallery: [
      'images/chatforge-image-2.png', 
      'images/chatforge-image-3.png', 
      'images/chatforge-image-4.png'


    ],
    tags: ['React 19', 'Tailwind CSS 4', 'Node.js', 'MongoDB', 'Motion'],
    category: 'api',
    liveUrl: "https://chatforge-ui.vercel.app/", // Adjust based on your actual deployment
    sourceUrl: "https://github.com/aarab-abderrahmane/ChatForge",
    techStack: [
      { tech: 'React 19 & Motion', context: 'Used to orchestrate the "typing" effect and CRT flicker animations for a realistic terminal feel.' },
      { tech: 'Express & MongoDB', context: 'Implemented a secure backend to encrypt and store OpenRouter API keys locally for each user session.' },
      { tech: 'OpenRouter API', context: 'Integrated multi-model AI access to support real-time streaming responses with markdown formatting.' }
    ],
    accentClass: 'lime-400'
  },
  {
    id: 'p4',
    name: 'Drop2Repo',
    shortDescription: 'A high-performance desktop GUI for streamlined Git operations and GitHub repository management.',
    problem: 'Command-line Git can be prone to user error for complex tasks, while many existing GUIs are either resource-heavy or lack a modern, intuitive dark-themed interface.',
    solution: 'Developed a multi-threaded desktop application in Python that provides a secure, modern environment for staging, committing, and pushing code with advanced safeguards for commit management.',
    features: [
      'Multi-threaded Git Operations',
      'Advanced Commit Management (Edit/Revert/Delete)',
      'Intelligent Repository Path History',
      'Secure Local-only Credential Handling'
    ],
    mainImage: 'images/Drop2repo-image-1.png',
    gallery: [
      'images/Drop2repo-image-2.png'
    ],
    tags: ['Python', 'CustomTkinter', 'Git', 'SQLite'],
    category: 'api',
    liveUrl: '',
    sourceUrl: 'https://github.com/aarab-abderrahmane/Drop2Repo',
    techStack: [
      { tech: 'CustomTkinter', context: 'Used to build a modern, high-DPI responsive interface with a customized dark-mode aesthetic.' },
      { tech: 'Python Threading', context: 'Implemented multi-threaded operations to prevent UI freezing during heavy Git push/pull/clone processes.' },
      { tech: 'SQLite', context: 'Engineered a local database system to manage repository path history and persistent user preferences securely.' }
    ],
    accentClass: '[#CCFF00]'
}
];

export const SKILLS: Skill[] = [
  { id: 's1', name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', projects: ['p1', 'p2'], level: 'Expert' },
  { id: 's1', name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', projects: ['p1', 'p2'], level: 'Expert' },
  { id: 's2', name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', projects: ['p1', 'p3'], level: 'Expert' },
  { id: 's3', name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', projects: ['p2'], level: 'Advanced' },
  { id: 's4', name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg', projects: ['p3'], level: 'Advanced' },
  { id: 's5', name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', projects: ['p3'], level: 'Intermediate' },
  { id: 's6', name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', projects: ['p1'], level: 'Intermediate' },
  { id: 's7', name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', projects: ['p3'], level: 'Advanced' },
  { id: 's8', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg', projects: ['p2'], level: 'Expert' }
];
