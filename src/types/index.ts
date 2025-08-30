import { ReactNode } from 'react';

export interface Technology {
  name: string;
  icon: string | ReactNode;
  color: string;
}

export interface Project {
  title: string;
  slug: string;
  image: string;
  description: string;
  impact?: string;
  status: 'live' | 'active' | 'completed';
  date: string;
  client: string;
  category: string;
  technologies: Technology[];
  repo: string;
  live?: string;
  pitch?: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
}

export interface ContactInfo {
  icon: ReactNode;
  text: string;
  href?: string;
  target?: string;
  rel?: string;
}

export interface EducationItemProps {
  degree: string;
  institution: string;
  gpa?: string;
  period: string;
  courses?: string[];
}

export interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description?: string;
  bullets?: string[];
  technologies?: string[];
}

export interface SkillItemProps {
  category: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  type: 'education' | 'work' | 'project';
  description: string;
  icon: ReactNode;
  color: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
  color: string;
}

export interface FeatureCardProps extends Project {
  delay?: number;
}

export interface PdfViewerModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
}