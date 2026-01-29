
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
    ]
  },
  {
    id: 'p2',
    name: 'Lumina UI Kit',
    shortDescription: 'Accessible glassmorphism component library for React.',
    problem: 'Glassmorphism designs often lack accessibility (WCAG) and are hard to implement consistently.',
    solution: 'Created a modular, ARIA-compliant library with pre-built frosted glass effects and high-contrast fallbacks.',
    features: ['50+ Accessible components', 'Theming engine', 'Zero-config setup'],
    mainImage: 'https://picsum.photos/seed/lumina/800/600',
    gallery: ['https://picsum.photos/seed/l1/800/600', 'https://picsum.photos/seed/l2/800/600'],
    tags: ['Tailwind', 'Framer Motion', 'React'],
    category: 'ui',
    techStack: [
      { tech: 'Framer Motion', context: 'Physics-based animations for fluid interaction feedback.' },
      { tech: 'Tailwind CSS', context: 'Utilized JIT compiler for dynamic translucent utility classes.' }
    ]
  },
  {
    id: 'p3',
    name: 'Neural Engine',
    shortDescription: 'Serverless machine learning pipeline for image processing.',
    problem: 'Large scale image transformations are costly and slow on traditional servers.',
    solution: 'Designed an event-driven serverless architecture using AWS Lambda to process images in parallel.',
    features: ['Auto-scaling pipelines', '99.9% uptime', 'Cost-optimized routing'],
    mainImage: 'https://picsum.photos/seed/neural/800/600',
    gallery: ['https://picsum.photos/seed/n1/800/600', 'https://picsum.photos/seed/n2/800/600'],
    tags: ['Node.js', 'AWS', 'Python', 'Docker'],
    category: 'logic',
    techStack: [
      { tech: 'AWS Lambda', context: 'Decoupled heavy computation from the user-facing API.' },
      { tech: 'Node.js', context: 'Handled async stream processing and metadata extraction.' }
    ]
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
