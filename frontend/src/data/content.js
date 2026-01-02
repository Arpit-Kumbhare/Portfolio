// Resume-derived structured content for portfolio.
export const intro = {
  name: 'Arpit Kumbhare',
  tagline: 'Full Stack Web Developer',
  summary: 'Crafting end-to-end applications with focus on performance, usability, and clean architecture'
};

export const about = {
  bio: 'I am a Full Stack / Front-End Developer focused on React.js, responsive UI, API integration and clean, maintainable code. Experience includes building device-responsive client landing pages, crafting dashboards, resolving CORS and integration issues, and enhancing user experience with animations and smooth scrolling.',
  skills: [
    'JavaScript','Python','React.js','Redux','HTML5','Tailwind CSS','Node.js','Express.js','RESTful APIs','JSON Server','MongoDB','MySQL','Git','GitHub','Vercel','GitHub Pages','Postman','EmailJS','Framer Motion','Axios'
  ],
  certifications: [
    'C Programming Basics – Binary Brains',
    'React Essential Training – LinkedIn Learning',
    'HTML & CSS Essential Training – LinkedIn Learning',
    'Programming For Everybody (Python) – Coursera'
  ],
  education: [
    {
      institution: 'Yeshwantrao Chavan College of Engineering',
      location: 'Nagpur',
      degree: 'Bachelor of Technology – Computer Technology',
      period: 'June 2020 – July 2024',
      grade: '7.5 CGPA'
    },
    {
      institution: 'Taywade Junior College',
      location: 'Nagpur',
      degree: '12TH Science (MSBSHSE)',
      period: 'April 2019 – March 2020',
      grade: '67%'
    },
    {
      institution: 'Alphonsa Sr. Sec. School',
      location: 'Wardha',
      degree: '10TH (CBSE)',
      period: 'April 2006 – March 2017',
      grade: '82%'
    }
  ]
};

export const projects = [
  {
    name: 'Weather',
    description: 'Responsive weather app using React, Tailwind CSS and Axios. Real-time OpenWeatherMap data, search with error handling, dynamic UI updates, deployed to GitHub Pages.',
    tech: ['React','Tailwind CSS','Axios','OpenWeatherMap API'],
    link: null
  },
  {
    name: 'Leetcode Metrics',
    description: 'Device responsive UI consuming Heroku-hosted API endpoint returning JSON for analytics; resolved CORS issues to enable data retrieval.',
    tech: ['React','Heroku','JSON'],
    link: null
  },
  {
    name: 'Sentence Construction Quiz',
    description: 'Interactive quiz built with React + Vite and JSON Server backend. Real-time validation, score tracking, feedback page listing responses vs correct answers, fully responsive.',
    tech: ['React','Vite','JSON Server'],
    link: null
  },
  {
    name: 'Portfolio / Arpit Kumbhare',
    description: 'Interactive modular React portfolio utilizing EmailJS for serverless mail, Framer Motion for smooth animations, and react-scroll for enhanced navigation behavior.',
    tech: ['React','EmailJS','Framer Motion','react-scroll'],
    link: null
  }
];

export const experience = [
  {
    role: 'Full Stack Web Developer – Intern',
    company: 'Earntimes Infotech Pvt Ltd',
    period: 'April 2025 – October 2025',
    location: 'India (Remote)',
    highlights: [
      'Developed device responsive landing pages for multiple clients.',
      'Created dynamic, mobile-responsive landing pages.',
      'Utilized HTML, CSS, JavaScript, and integrated WooCommerce for seamless e-commerce functionality.',
      'Managed end-to-end build process of the website from development to deployment.'
    ],
    tech: ['HTML','CSS','JavaScript','WooCommerce']
  },
  {
    role: 'Front-End Developer – Intern',
    company: 'IgnAite LLC',
    period: 'January 2024 – June 2024',
    location: 'USA (Remote)',
    highlights: [
      'Designed and developed the UI of the Project SPI (Start-up Performance Index).',
      'Identified and analyzed problems in the project and developed solutions.',
      'Worked on Postman for API integration testing.',
      'Collaborated and led the team responsible for Front-End development.'
    ],
    tech: ['React','UI Design','Postman']
  }
];

export const contact = {
  email: 'arpitkumbhare007@gmail.com',
  phone: '+91 7038049126',
  location: 'Pune, India',
  social: [
    { label: 'GitHub', url: 'https://github.com/Arpit-Kumbhare', type: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arpit-kumbhare', type: 'linkedin' },
    { label: 'Email', url: 'mailto:arpitkumbhare007@gmail.com', type: 'email' },
    { label: 'WhatsApp', url: 'https://wa.me/917038049126', type: 'whatsapp' }
  ]
};
