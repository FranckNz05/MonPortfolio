export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
}