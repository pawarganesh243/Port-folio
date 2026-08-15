import { EducationItem, ExperienceItem, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'GANESH PAWAR',
  role: 'FULL-STACK DEVELOPER',
  subRole: 'DATA ANALYTICS ENTHUSIAST',
  systemTag: 'SYSTEM INITIALIZED : USER 01',
  tagline: 'Motivated Information Technology undergraduate with hands-on experience in full-stack development and data analytics, seeking an internship or entry-level opportunity to apply strong programming fundamentals, problem-solving skills, and a builder\'s mindset to deliver scalable, user-focused software solutions.',
  email: 'pawarganesh243@gmail.com',
  phone: '+91-7620345260',
  location: 'India',
  github: 'https://github.com/pawarganesh243',
  linkedin: 'https://linkedin.com/in/ganeshpawar243',
  status: 'ONLINE',
  statusDescription: 'Open for entry-level opportunities and internships.',
  footerTag: '© 2026 / PROTOCOL 01 / GANESH PAWAR',
  targetReleaseDate: '2026-09-01T00:00:00Z',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'railway-reservation-app',
    number: '01',
    title: 'RAILWAY RESERVATION APP',
    category: 'Mobile App',
    isMainFeature: true,
    tags: ['ANDROID', 'JAVA'],
    techStack: ['ANDROID STUDIO', 'JAVA'],
    shortDescription: 'Developed a full-featured Android application for booking, managing, and cancelling railway tickets.',
    fullDescription: 'Developed a full-featured Android application for booking, managing, and cancelling railway tickets. Implemented persistent data storage and real-time seat availability updates using Java.',
    highlight: 'Real-time seat availability and ticket management.',
    image: '/transit_nexus.png',
    metrics: [
      { label: 'Year', value: '2024' },
      { label: 'Platform', value: 'Android' },
    ],
    caseStudyDetails: {
      challenge: 'Managing real-time seat availability across multiple users concurrently.',
      solution: 'Implemented robust Java data structures for persistent data storage and real-time updates.',
      architecture: [
        'Android Studio for UI and compilation',
        'Java for core backend logic and state management'
      ],
      outcomes: [
        'Smooth booking and cancellation flow',
        'Accurate real-time availability'
      ],
    },
  },
  {
    id: 'railway-reservation-web',
    number: '02',
    title: 'RAILWAY RESERVATION WEB',
    category: 'Web App',
    tags: ['WEB APP', 'FULL-STACK'],
    techStack: ['HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'MYSQL'],
    shortDescription: 'Built a responsive, full-stack web reservation system integrated with a MySQL database backend.',
    fullDescription: 'Built a responsive, full-stack web reservation system integrated with a MySQL database backend. Designed an intuitive seat selection and booking confirmation flow with form validation.',
    highlight: 'Intuitive seat selection with form validation.',
    image: '/fleet_command.png',
    metrics: [
      { label: 'Year', value: '2024' },
      { label: 'Database', value: 'MySQL' },
    ],
    caseStudyDetails: {
      challenge: 'Creating an intuitive seat selection interface on the web.',
      solution: 'Used vanilla web technologies and SQL integration to ensure a seamless booking confirmation flow.',
      architecture: [
        'HTML/CSS/JavaScript for responsive frontend',
        'MySQL database for storing reservation records',
      ],
      outcomes: [
        'Responsive full-stack reservation system',
        'Integrated form validation',
      ],
    },
  },
  {
    id: 'music-web-app',
    number: '03',
    title: 'MUSIC WEB APPLICATION',
    category: 'Web App',
    tags: ['FRONTEND', 'UI/UX'],
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    shortDescription: 'Created a responsive music streaming interface with interactive playback controls.',
    fullDescription: 'Created a responsive music streaming interface with interactive playback controls and playlist management. Focused on smooth UX, cross-device compatibility, and clean visual design.',
    highlight: 'Smooth UX and cross-device compatibility.',
    image: '/resonance_audio.png',
    metrics: [
      { label: 'Year', value: '2025' },
      { label: 'Focus', value: 'UX/UI' },
    ],
    caseStudyDetails: {
      challenge: 'Ensuring interactive playback controls work smoothly across different devices.',
      solution: 'Focused on responsive design principles and clean visual aesthetics using HTML, CSS, and JS.',
      architecture: [
        'Responsive layout with CSS flexbox/grid',
        'JavaScript for interactive playback controls',
      ],
      outcomes: [
        'Cross-device compatibility',
        'Clean visual design and playlist management',
      ],
    },
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'lenovo-leap-intern',
    period: 'May 2025 – Jul 2025',
    company: 'LENOVO LEAP',
    role: 'Data Analytics Intern',
    description: [
      'Gained hands-on exposure to data analytics workflows including data ingestion, cleaning, and basic analysis.',
      'Worked with structured datasets to extract insights and support team reporting deliverables.',
    ],
    skills: ['Data Analytics', 'Data Ingestion', 'Data Cleaning', 'Reporting'],
    metrics: 'Supported team deliverables by extracting insights from structured datasets.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    iconName: 'Code',
    skills: [
      { name: 'C / C++', level: 85, note: 'Core programming fundamentals' },
      { name: 'Java', level: 90, note: 'Object-Oriented Programming, Android' },
      { name: 'Python', level: 85, note: 'Data structures & Algorithms' },
      { name: 'JavaScript', level: 88, note: 'Web interactivity' },
    ],
  },
  {
    title: 'FRONTEND',
    iconName: 'Layout',
    skills: [
      { name: 'HTML & CSS', level: 95, note: 'Semantic web, Responsive design' },
      { name: 'Tailwind CSS', level: 90, note: 'Utility-first styling' },
      { name: 'React', level: 85, note: 'Component-based UI' },
    ],
  },
  {
    title: 'BACKEND & DB',
    iconName: 'Database',
    skills: [
      { name: 'Node.js', level: 80, note: 'JavaScript runtime' },
      { name: 'PHP', level: 75, note: 'Server-side scripting' },
      { name: 'MySQL', level: 88, note: 'Relational databases' },
    ],
  },
  {
    title: 'TOOLS & ENVIRONMENTS',
    iconName: 'Wrench',
    skills: [
      { name: 'Git / GitHub', level: 90, note: 'Version control' },
      { name: 'Android Studio', level: 85, note: 'Mobile app development' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'be-it',
    period: '2023 – 2027',
    degree: 'B.E. Information Technology',
    specialization: 'Information Technology',
    institution: 'Padre Conceicao College of Engineering',
    location: 'Goa',
    honors: 'Current CGPA: 8.88 / 10.0',
    tags: ['B.E.', 'IT'],
    description: 'Pursuing Bachelor of Engineering in Information Technology. Focusing on programming fundamentals, software architecture, and full-stack development.',
    side: 'right',
  },
  {
    id: 'higher-secondary',
    period: '2021 – 2023',
    degree: 'Higher Secondary Education',
    specialization: 'Science',
    institution: 'Shree Damodar College of Science',
    location: 'Goa',
    honors: 'Percentage: 74.5%',
    tags: ['SCIENCE', 'HSSC'],
    description: 'Completed Higher Secondary Education in the Science stream with a strong foundation in mathematics and analytical thinking.',
    side: 'left',
  },
];

export const ACADEMIC_METRICS = [
  {
    id: '01',
    label: 'Focus Area',
    title: 'Full-Stack Development',
    description: 'Continuously building personal web projects to deepen backend skills alongside frontend expertise.',
  },
  {
    id: '02',
    label: 'Extracurricular',
    title: 'Competitive Problem Solving',
    description: 'Actively practising data structures and algorithms to strengthen programming and analytical thinking.',
  },
];
