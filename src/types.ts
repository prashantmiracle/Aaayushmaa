export interface AcademicProgram {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: string;
  description: string;
  objectives: string[];
  syllabus: string[];
  audience: string[];
  status: 'Upcoming' | 'Waitlist Active' | 'Now Open';
  commencing: string;
}

export interface ConsultingService {
  id: string;
  title: string;
  scope: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  iconName: string; // Dynamic icon rendering
}

export interface IndustrySolution {
  id: string;
  title: string;
  segment: 'Boutique' | 'Factory' | 'Export House' | 'D2C Brand' | 'Retailer' | 'Startup';
  challenge: string;
  solution: string;
  impact: string;
  checkpoints: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Template' | 'Cheat Sheet' | 'Industry Guide' | 'Checklist';
  description: string;
  fileSize: string;
  downloadCount: number;
}

export interface ConsultationInquiry {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  type: 'Individual' | 'Corporate';
  interest: string;
  details: string;
  preferredContact: 'WhatsApp' | 'Email';
}
