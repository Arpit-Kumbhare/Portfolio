// Blog posts are stored client-side for a static portfolio build.
// Each post includes topic, created datetime, and last modified datetime.

export const blogs = [
  {
    id: 'first-post',
    topic: 'Welcome to my blog',
    createdAt: '2025-12-23T10:00:00+05:30',
    excerpt:
      'This is where I will share what I am learning, building, and improving — from frontend details to full-stack decisions.',
    content: [
      'I built this blog section into my portfolio so I can publish short notes and longer write-ups in one place.',
    ]
  },
  {
    id: 'react-notes',
    topic: 'React patterns I keep reusing',
    createdAt: '2025-12-23T11:30:00+05:30',
    excerpt:
      'A quick list of React patterns I rely on: composable components, small data modules, and UI state machines for modals.',
    content: [
      'When building UI in React, I try to keep components focused and reusable.',
      'For page-level UI, routing + small data modules is a clean approach for static sites.',
      'For modals and overlays, I prefer a simple state machine: closed → opening → open → closing, so animations stay predictable.'
    ]
  }
];
