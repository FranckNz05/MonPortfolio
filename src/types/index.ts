export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}