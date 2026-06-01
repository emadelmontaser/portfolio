const projects = [
  {
    slug: 'dealflow',
    title: 'DealFlow',
    subtitle: 'CRM for Freelancers',
    description: 'A CRM-style app for managing leads, follow-ups, deal stages, and revenue pipeline.',
    longDescription: 'DealFlow helps freelancers and student entrepreneurs manage their sales pipeline without spreadsheets. Users can track leads, follow-up dates, deal status, projected revenue, and client notes through a clean dashboard.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Supabase authentication','Lead CRUD workflows','Deal pipeline stages','Dashboard metrics','Follow-up tracking','Protected user data'],
    image: '/projects/dealflow/thumbnail.svg',
    screenshots: [],
    liveDemo: '',
    github: ''
  },
  {
    slug: 'splitcart',
    title: 'SplitCart',
    subtitle: 'Shared Cart Expense Splitter',
    description: 'A cart-splitting app for assigning items, splitting shared costs, and generating payment summaries.',
    longDescription: 'SplitCart helps groups split shared shopping carts without spreadsheets. Users can create carts, add participants, assign items to one or more people, split tax/shipping/fees proportionally, edit assignments, and copy a clean payment summary.',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'localStorage'],
    highlights: ['Participant and item management','Editable item assignments','Proportional cost splitting','Copyable payment summaries','Browser storage persistence'],
    image: '/projects/splitcart/thumbnail.svg',
    screenshots: [],
    liveDemo: '',
    github: ''
  },
  {
    slug: 'windsor-parking-helper',
    title: 'Windsor Parking Helper',
    subtitle: 'Chrome Extension',
    description: 'A Chrome extension for finding parking near Windsor destinations using local data and Google Maps links.',
    longDescription: 'Windsor Parking Helper lets users search for nearby parking from a browser popup or by highlighting a destination on any webpage. It uses local parking data, distance calculation, saved spots, and Google Maps directions.',
    techStack: ['TypeScript', 'React', 'Vite', 'Chrome Extension MV3', 'CSS'],
    highlights: ['Chrome extension popup','Right-click context menu search','Saved parking spots','Distance calculation','Google Maps directions'],
    image: '/projects/windsor-parking-helper/thumbnail.svg',
    screenshots: [],
    liveDemo: '',
    github: ''
  },
  {
    slug: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    subtitle: 'Algorithm Visualization Tool',
    description: 'An interactive tool for visualizing pathfinding algorithms on a grid.',
    longDescription: 'Pathfinding Visualizer demonstrates algorithms like Dijkstra, A*, BFS, DFS, and Greedy Best-First Search. Users can draw walls, add weighted nodes, generate mazes, move start/end nodes, and watch algorithms run step-by-step.',
    techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: ['Dijkstra, A*, BFS, DFS, Greedy Best-First','Maze generation','Wall and weighted node tools','Animated traversal','Interactive grid controls'],
    image: '/projects/pathfinding-visualizer/thumbnail.svg',
    screenshots: [],
    liveDemo: 'https://pathfinding-visualizer-sage-seven.vercel.app/',
    github: ''
  }
]

export default projects
