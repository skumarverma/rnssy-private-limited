export type ActiveTab = 'home' | 'about' | 'offerings' | 'team' | 'contact';

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
}

export interface OfferingItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  imageUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface GTMStep {
  step: number;
  title: string;
  description: string;
}

export interface RoadmapMilestone {
  phase: string;
  timeframe: string;
  title: string;
  points: {
    category: string;
    description: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  bio: string;
  avatarUrl: string;
}

export interface ContactFormInput {
  name: string;
  organization: string;
  email: string;
  phone: string;
  interest: 'tender' | 'partnership' | 'investment' | 'general';
  message: string;
}
