export const profileData = {
  name: 'Alex Kumar',
  title: 'Senior ML Engineer',
  location: 'San Francisco, CA',
  email: 'alex.kumar@email.com',
  phone: '+1 (555) 123-4567',
  website: 'alexkumar.dev',
  github: 'alex-kumar',
  linkedin: 'alex-kumar-ml',
  experience: '6 years',
  availability: 'Available for new opportunities',
  summary: 'Passionate ML engineer with 6+ years of experience building production-scale computer vision and NLP systems. Led teams at top tech companies, published 12+ research papers, and deployed models serving 100M+ users.',
  profileViews: 847,
  matchScore: 95,
  responseRate: 98
};

export const skills = [
  { name: 'PyTorch', level: 95, category: 'Framework' },
  { name: 'Computer Vision', level: 92, category: 'Domain' },
  { name: 'Deep Learning', level: 94, category: 'Core' },
  { name: 'Python', level: 98, category: 'Language' },
  { name: 'MLOps', level: 85, category: 'Engineering' },
  { name: 'TensorFlow', level: 88, category: 'Framework' },
  { name: 'NLP', level: 82, category: 'Domain' },
  { name: 'Kubernetes', level: 78, category: 'Infrastructure' },
  { name: 'AWS', level: 86, category: 'Cloud' },
  { name: 'Research', level: 90, category: 'Soft Skill' }
];

export const experience = [
  {
    company: 'Meta AI',
    role: 'Senior ML Engineer',
    duration: '2022 - Present',
    location: 'Menlo Park, CA',
    description: 'Led computer vision team building AR/VR perception systems. Improved model accuracy by 15% while reducing latency by 40%.',
    achievements: [
      'Built real-time object detection for Quest headsets',
      'Mentored 5 junior engineers',
      'Published 3 papers at top conferences'
    ],
    skills: ['PyTorch', 'Computer Vision', 'C++', 'CUDA']
  },
  {
    company: 'Google Research',
    role: 'ML Engineer',
    duration: '2020 - 2022',
    location: 'Mountain View, CA',
    description: 'Developed large-scale NLP models for Google Search. Led project that improved search relevance by 8%.',
    achievements: [
      'Trained models on 100B+ parameters',
      'Optimized inference serving 1B+ queries daily',
      'Collaborated with research teams globally'
    ],
    skills: ['TensorFlow', 'NLP', 'Distributed Systems', 'TPUs']
  },
  {
    company: 'Stanford AI Lab',
    role: 'Research Assistant',
    duration: '2018 - 2020',
    location: 'Stanford, CA',
    description: 'Conducted research on few-shot learning and meta-learning algorithms under Prof. Fei-Fei Li.',
    achievements: [
      'Co-authored 4 papers (2 at NeurIPS)',
      'Developed novel meta-learning algorithm',
      'Graduated with distinction'
    ],
    skills: ['Research', 'PyTorch', 'Mathematics', 'Writing']
  }
];

export const projects = [
  {
    title: 'MedAI: Medical Image Analysis Platform',
    description: 'End-to-end platform for automated medical image analysis using state-of-the-art computer vision models.',
    image: '/project1.jpg',
    tags: ['PyTorch', 'Computer Vision', 'Healthcare', 'React'],
    github: 'https://github.com/alex-kumar/medai',
    demo: 'https://medai-demo.com',
    impact: '94% accuracy on skin cancer detection'
  },
  {
    title: 'Real-time Object Detection for Autonomous Vehicles',
    description: 'Ultra-fast object detection system optimized for edge deployment in autonomous vehicles.',
    image: '/project2.jpg',
    tags: ['YOLO', 'Edge AI', 'C++', 'ROS'],
    github: 'https://github.com/alex-kumar/auto-detect',
    demo: 'https://auto-detect-demo.com',
    impact: '<10ms inference on mobile GPU'
  },
  {
    title: 'ChatGPT Clone with Custom Training',
    description: 'Built and deployed a conversational AI system with custom training on domain-specific data.',
    image: '/project3.jpg',
    tags: ['Transformers', 'NLP', 'FastAPI', 'Docker'],
    github: 'https://github.com/alex-kumar/chat-ai',
    demo: 'https://chat-ai-demo.com',
    impact: '500K+ conversations handled'
  }
];

export const publications = [
  {
    title: 'Few-Shot Learning with Meta-Gradient Descent',
    venue: 'NeurIPS 2023',
    authors: 'A. Kumar, S. Chen, M. Rodriguez',
    citations: 47,
    link: 'https://papers.neurips.cc/paper/2023/alex-kumar'
  },
  {
    title: 'Efficient Computer Vision for Edge Devices',
    venue: 'CVPR 2023',
    authors: 'A. Kumar, L. Wang, D. Park',
    citations: 23,
    link: 'https://openaccess.thecvf.com/alex-kumar'
  },
  {
    title: 'Large-Scale NLP Model Optimization',
    venue: 'ICML 2022',
    authors: 'A. Kumar, J. Smith, R. Johnson',
    citations: 89,
    link: 'https://proceedings.mlr.press/alex-kumar'
  }
];

export const certifications = [
  { name: 'AWS Certified Machine Learning - Specialty', issuer: 'Amazon', date: '2023', verified: true },
  { name: 'Google Cloud Professional ML Engineer', issuer: 'Google', date: '2022', verified: true },
  { name: 'Deep Learning Specialization', issuer: 'Coursera', date: '2021', verified: true }
];