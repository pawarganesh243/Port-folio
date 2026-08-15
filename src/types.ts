export type SectionId = 'home' | 'projects' | 'experience' | 'education' | 'contact';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Mobile App' | 'Web App' | 'UI/UX Design';
  tags: string[];
  techStack: string[];
  shortDescription: string;
  fullDescription: string;
  highlight: string;
  image: string;
  isMainFeature?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudyDetails?: {
    challenge: string;
    solution: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string[];
  skills: string[];
  metrics: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  honors?: string;
  tags: string[];
  description: string;
  side: 'left' | 'right';
}

export interface TerminalCommandOutput {
  command: string;
  output: string | string[];
  isError?: boolean;
  timestamp: string;
}
