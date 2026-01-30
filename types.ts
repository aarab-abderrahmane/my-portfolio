
export interface TechUsage {
  tech: string;
  context: string;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  mainImage: string;
  gallery: string[];
  tags: string[];
  techStack: TechUsage[];
  category: 'ui' | 'api' | 'logic';
  accentClass : String[]
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  projects: string[]; // IDs of projects using this skill
  level: 'Expert' | 'Advanced' | 'Intermediate';
}
