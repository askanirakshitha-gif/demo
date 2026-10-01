export const eventCategories = [
  'ALL',
  'TECHNICAL',
  'CODING',
  'HACKATHON',
  'GAMING',
  'QUIZ',
  'CREATIVE',
  'FUN / MANAGEMENT'
];

export const eventsData = [
  {
    id: 'ai-agents-workshop',
    name: 'Workshop / AI Agents Masterclass',
    category: 'TECHNICAL',
    tagline: 'Master Autonomous Multi-Agent Systems & LLMs',
    description: 'An intensive, hands-on masterclass where students dive deep into building autonomous AI agents, LangChain/LlamaIndex pipelines, function-calling workflows, and deploying real-world agentic systems. Guided by top industry AI engineers and researchers.',
    date: '12 Nov 2026',
    day: 'Day 1',
    time: '10:00 AM - 01:30 PM',
    venue: 'Dr. Sarvepalli Radhakrishnan Auditorium (Main Block)',
    teamType: 'INDIVIDUAL',
    minTeamSize: 1,
    maxTeamSize: 1,
    teamSize: 'Individual',
    fee: 200,
    prizePool: 'Certificates & Swag Kits + AI Cloud Credits',
    coordinator: 'Prof. Ananya Sharma & Harish Kumar',
    contactPhone: '+91 98765 43210',
    contactEmail: 'ai-workshop@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'Open to all undergraduate & postgraduate engineering students with basic Python knowledge.',
    rules: [
      'Participants must bring their own laptops with Python 3.10+ installed.',
      'API keys and cloud credit vouchers will be distributed on-site.',
      'Prerequisite repository will be shared 24 hours prior to the workshop.',
      '100% attendance is mandatory to receive verifiable certificates.',
      'Session includes a mini agent-building challenge with spot rewards.'
    ],
    whatToBring: [
      'Laptop with charger and WiFi support',
      'Valid College ID Card',
      'Pre-installed VS Code or PyCharm',
      'GitHub Account'
    ],
    instructions: [
      'Arrive 15 minutes before the scheduled time for seat allocation.',
      'High-speed campus WiFi access credentials will be provided during check-in.'
    ]
  },
  {
    id: 'competitive-programming',
    name: 'CP',
    category: 'CODING',
    tagline: 'The Ultimate Algorithmic Showdown',
    description: 'A high-octane competitive programming contest designed to push your algorithmic dexterity, mathematical intuition, and data structure proficiency to the extreme. Contestants battle across multiple difficulty tiers.',
    date: '12 Nov 2026',
    day: 'Day 1',
    time: '02:00 PM - 05:00 PM',
    venue: 'Turing Computer Labs (CS Block, 3rd Floor)',
    teamType: 'INDIVIDUAL',
    minTeamSize: 1,
    maxTeamSize: 1,
    teamSize: 'Individual',
    fee: 150,
    prizePool: '₹15,000 + Trophies',
    coordinator: 'Prof. Rajesh Hegde & Rohan Nair',
    contactPhone: '+91 98765 43211',
    contactEmail: 'cp@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'All college students with an interest in algorithms and data structures.',
    rules: [
      'Languages supported: C, C++, Java, Python, Rust, Go.',
      'Contest hosted on an isolated secure contest server.',
      'Plagiarism checks will be strictly enforced using automated similarity scanners.',
      'Internet access will be restricted to documentation only; no LLM/AI tools allowed.',
      'Tie-breakers will be resolved based on submission time and penalty points.'
    ],
    whatToBring: [
      'College ID Card',
      'Laptop or you may use the lab workstation',
      'Pen and rough scratchpad'
    ],
    instructions: [
      'Seating starts at 01:45 PM. Late entries beyond 02:15 PM will not be permitted.'
    ]
  },
  {
    id: 'capture-the-flag',
    name: 'CTF',
    category: 'TECHNICAL',
    tagline: 'Cyber Defense, Exploitation & Cryptography Battle',
    description: 'An adrenaline-fueled jeopardy-style Capture The Flag cybersecurity competition covering Web Exploitation, Reverse Engineering, Binary Exploitation (pwn), Cryptography, Forensics, and OSINT.',
    date: '13 Nov 2026',
    day: 'Day 2',
    time: '09:30 AM - 04:30 PM',
    venue: 'Cyber Security Operations Center (Lab 5 & 6)',
    teamType: 'TEAM',
    minTeamSize: 1,
    maxTeamSize: 3,
    teamSize: 'Team of 1-3',
    fee: 300,
    prizePool: '₹20,000 + Security Tooling Subscriptions',
    coordinator: 'Prof. Ramesh K & Vikramaditya Rao',
    contactPhone: '+91 98765 43212',
    contactEmail: 'ctf@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'Enthusiasts in ethical hacking, network defense, and systems security.',
    rules: [
      'Teams must not attack the contest infrastructure or scoring server.',
      'Sharing flags or solutions between teams leads to instant disqualification.',
      'Bring your own pre-configured Kali Linux / Parrot OS VM or environment.',
      'Brute-forcing challenge servers is prohibited unless explicitly stated in description.'
    ],
    whatToBring: [
      'Laptops with security tools / Burp Suite / Ghidra / Wireshark',
      'Ethernet adapter (recommended)',
      'College ID'
    ],
    instructions: [
      'Live dynamic leaderboard will be broadcast on the arena stage display.'
    ]
  },
  {
    id: 'peer-to-peer',
    name: 'P2P',
    category: 'TECHNICAL',
    tagline: 'Distributed Systems & Network Architecture Sprint',
    description: 'Test your mastery of decentralized protocols, socket programming, mesh networking, and distributed consensus mechanisms in a hands-on architectural problem-solving challenge.',
    date: '13 Nov 2026',
    day: 'Day 2',
    time: '10:00 AM - 01:00 PM',
    venue: 'Advanced Networking Lab (ECE Block)',
    teamType: 'TEAM',
    minTeamSize: 1,
    maxTeamSize: 2,
    teamSize: 'Team of 1-2',
    fee: 200,
    prizePool: '₹10,000',
    coordinator: 'Prof. Divya M & Sandeep G',
    contactPhone: '+91 98765 43213',
    contactEmail: 'p2p@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'Open to all students interested in networks, P2P protocols, WebRTC, and distributed nodes.',
    rules: [
      'Problem statement will be disclosed at the start of the event.',
      'Teams must design and demonstrate a functional peer discovery and packet exchange protocol.',
      'Evaluation is based on fault tolerance, latency, bandwidth efficiency, and throughput.'
    ],
    whatToBring: ['Laptop with Node.js/Go/Python/C++ network libraries installed', 'College ID'],
    instructions: ['Local subnet sandbox will be provided for network simulation.']
  },
  {
    id: 'the-big-hack',
    name: 'The Big Hack (Hackathon)',
    category: 'HACKATHON',
    tagline: '24-Hour Non-Stop Prototype Building Marathon',
    description: 'The flagship 24-hour national hackathon of Tech Habba 2K26. Build transformative software and hardware solutions addressing tracks like Smart Cities, Next-Gen Fintech, Healthcare AI, Cyber Resilience, and Open Innovation.',
    date: '12-13 Nov 2026',
    day: 'Day 1 & Day 2',
    time: '10:00 AM (24 Hours non-stop)',
    venue: 'Acharya Central Innovation Hub & Amphitheatre',
    teamType: 'TEAM',
    minTeamSize: 2,
    maxTeamSize: 4,
    teamSize: 'Team of 2-4',
    fee: 500,
    prizePool: '₹60,000 + Incubation Support + Goodies',
    coordinator: 'Dr. Suresh Babu & Aditi Verma',
    contactPhone: '+91 98765 43214',
    contactEmail: 'hackathon@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'Innovators, designers, backend & frontend builders from any recognised college.',
    rules: [
      'All code must be written during the 24-hour hackathon window.',
      'Open-source libraries and APIs are permitted; pre-built complete apps are not.',
      'Mandatory periodic git commits to the designated GitHub repository.',
      'Midnight mentor checkpoints will evaluate progress and provide architectural guidance.',
      'Final pitch to judges includes a 4-minute live product demo and 2-minute Q&A.'
    ],
    whatToBring: [
      'Laptops, extension boxes, chargers',
      'Hardware components (if hardware track)',
      'Personal sleeping bags/blankets for rest zones',
      'College ID'
    ],
    instructions: [
      'Full meals, energy drinks, snacks, and midnight pizza will be provided free for participants.',
      'Dedicated rest lounges and showers available on campus.'
    ]
  },
  {
    id: 'ideathon',
    name: 'Ideathon',
    category: 'CREATIVE',
    tagline: 'Pitch the Next Tech Unicorn',
    description: 'Have a breakthrough tech product or startup idea? Pitch your business model, prototype roadmap, and go-to-market strategy to angel investors, venture capitalists, and industry veterans.',
    date: '14 Nov 2026',
    day: 'Day 3',
    time: '10:00 AM - 02:00 PM',
    venue: 'MBA Seminar Hall (Management Block)',
    teamType: 'TEAM',
    minTeamSize: 1,
    maxTeamSize: 3,
    teamSize: 'Team of 1-3',
    fee: 250,
    prizePool: '₹25,000 + Angel Mentorship',
    coordinator: 'Prof. Meenakshi Sundaram & Preethi K',
    contactPhone: '+91 98765 43215',
    contactEmail: 'ideathon@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'Student founders, visionary thinkers, and tech innovators.',
    rules: [
      'Pitch deck must be submitted 2 hours prior to the event.',
      'Max 8 slides: Problem, Solution, Market Size, Tech Architecture, Revenue Model, Team.',
      '7 minutes presentation followed by 3 minutes jury defense.'
    ],
    whatToBring: ['Presentation on USB flash drive + cloud backup', 'Prototype if available'],
    instructions: ['Formal or smart-casual attire recommended for presentations.']
  },
  {
    id: 'chess-tournament',
    name: 'Chess',
    category: 'FUN / MANAGEMENT',
    tagline: 'Grandmaster Rapid & Blitz Arena',
    description: 'A FIDE-rules rapid chess championship. Challenge the sharpest tactical brains in a high-intensity Swiss-system tournament.',
    date: '13 Nov 2026',
    day: 'Day 2',
    time: '02:00 PM - 06:00 PM',
    venue: 'Acharya Indoor Sports Pavilion',
    teamType: 'INDIVIDUAL',
    minTeamSize: 1,
    maxTeamSize: 1,
    teamSize: 'Individual',
    fee: 100,
    prizePool: '₹8,000 + Medals',
    coordinator: 'Prof. Srinivas Murthy & Nithin R',
    contactPhone: '+91 98765 43216',
    contactEmail: 'chess@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'Open to all enrolled students.',
    rules: [
      'Time format: 10 mins + 5 seconds increment per move.',
      'FIDE rapid chess rules apply. Electronic devices prohibited during games.',
      '5 rounds of Swiss-system pairings followed by top-4 knockout semifinals.'
    ],
    whatToBring: ['College ID Card'],
    instructions: ['Chess clocks and tournament standard wooden boards will be provided.']
  },
  {
    id: 'free-fire-battle',
    name: 'Free Fire',
    category: 'GAMING',
    tagline: 'Mobile eSports Battle Royale Arena',
    description: 'Squad battle royale tournament on mobile devices. Drop in, coordinate with your squad, survive the shrink zone, and conquer the battlefield.',
    date: '12 Nov 2026',
    day: 'Day 1',
    time: '11:00 AM - 05:00 PM',
    venue: 'eSports Arena (Auditorium 2)',
    teamType: 'TEAM',
    minTeamSize: 4,
    maxTeamSize: 4,
    teamSize: 'Squad (Team of 4)',
    fee: 400,
    prizePool: '₹15,000 + Gaming Gear',
    coordinator: 'Prof. Kiran Patel & Deepak S',
    contactPhone: '+91 98765 43217',
    contactEmail: 'freefire@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'All mobile gamers with minimum level 30 game accounts.',
    rules: [
      'Only mobile phone gameplay allowed (emulators, triggers, iPads are strictly banned).',
      'Tournament format: 3 Qualifier maps (Bermuda, Purgatory, Kalahari) followed by Grand Finals.',
      'Points awarded for Kills (1 pt) and Placement hierarchy (12, 9, 8, 7...).'
    ],
    whatToBring: ['Personal smartphones with game updated', 'Earphones/Headphones', 'Power banks'],
    instructions: ['Dedicated high-speed 5GHz gaming WiFi network will be provided.']
  },
  {
    id: 'valorant-clash',
    name: 'Valorant',
    category: 'GAMING',
    tagline: '5v5 Tactical FPS Championship',
    description: 'The pinnacle of collegiate tactical FPS competition. Compete on LAN with 144Hz monitors, low-latency tournament servers, and live caster commentary.',
    date: '13 Nov 2026',
    day: 'Day 2',
    time: '09:00 AM - 06:30 PM',
    venue: 'Pro-Gaming LAN Arena (CS Lab 1 & 2)',
    teamType: 'TEAM',
    minTeamSize: 5,
    maxTeamSize: 5,
    teamSize: 'Team of 5',
    fee: 500,
    prizePool: '₹25,000 + Mechanical Keyboards',
    coordinator: 'Prof. Arun Kumar & Varun Hegde',
    contactPhone: '+91 98765 43218',
    contactEmail: 'valorant@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000',
    featured: true,
    eligibility: 'All college teams consisting of 5 active players.',
    rules: [
      'Standard competitive ruleset: 13 rounds to win, overtime with win-by-2.',
      'Map pool: Ascent, Bind, Haven, Split, Lotus, Sunset, Abyss.',
      'Single elimination bracket for qualifiers, Best of 3 for Finals.',
      'Players may bring their own mouse, keyboard, and headsets.'
    ],
    whatToBring: ['Peripherals (Mouse, Keyboard, Headset, Mousepad)', 'Valid College ID for all 5 players'],
    instructions: ['Tournament rigs with RTX GPUs and 165Hz displays are ready on-site.']
  },
  {
    id: 'campus-hunt',
    name: 'Campus Hunt',
    category: 'FUN / MANAGEMENT',
    tagline: 'Cryptic Clues, AR Navigation & Campus Exploration',
    description: 'An expansive campus-wide adventure hunt where squads decode algorithmic riddles, crack geocaching cipher coordinates, and locate hidden physical tech artifacts across the 120-acre Acharya campus.',
    date: '14 Nov 2026',
    day: 'Day 3',
    time: '09:00 AM - 01:00 PM',
    venue: 'Acharya Central Lawn / Clock Tower Starting Line',
    teamType: 'TEAM',
    minTeamSize: 2,
    maxTeamSize: 4,
    teamSize: 'Team of 2-4',
    fee: 200,
    prizePool: '₹10,000 + Gift Hampers',
    coordinator: 'Prof. Shylaja N & Karthik Somayaji',
    contactPhone: '+91 98765 43219',
    contactEmail: 'campushunt@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'Open to all inquisitive minds and team players.',
    rules: [
      'Each clue solved unlocks the GPS coordinate or riddle for the next checkpoint.',
      'Volunteers stationed at secret hubs will stamp physical team passports.',
      'Using unauthorized motorized vehicles will result in immediate disqualification.',
      'First team to assemble all 8 artifact tokens and reach the main stage wins.'
    ],
    whatToBring: ['Comfortable running footwear', 'At least 1 smartphone with QR scanner & mobile data'],
    instructions: ['Briefing commences sharply at 09:00 AM at the Clock Tower Lawn.']
  },
  {
    id: 'it-quiz-championship',
    name: 'IT Quiz / Tech Quiz Championship',
    category: 'QUIZ',
    tagline: 'Battle of the Tech Intellects',
    description: 'A premier quiz championship covering computer science history, tech titans, hardware breakthroughs, emerging tech, cybersecurity leaks, and obscure geek culture trivia.',
    date: '13 Nov 2026',
    day: 'Day 2',
    time: '11:00 AM - 02:30 PM',
    venue: 'Dr. APJ Abdul Kalam Auditorium',
    teamType: 'TEAM',
    minTeamSize: 1,
    maxTeamSize: 2,
    teamSize: 'Team of 1-2',
    fee: 150,
    prizePool: '₹12,000 + Quiz Trophies',
    coordinator: 'Prof. Chandrashekar & Neha Joshi',
    contactPhone: '+91 98765 43220',
    contactEmail: 'quiz@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'All collegiate quiz enthusiasts.',
    rules: [
      'Round 1: 30-question written preliminary screening round.',
      'Top 6 teams advance to the live buzzer and audio-visual stage finals.',
      'Stage rounds include: Infinite Bounce, Dry Pounce, Fast & Furious Visual Round.',
      'Quizmaster’s decision is final and binding.'
    ],
    whatToBring: ['Pen and writing board for preliminary round', 'College ID'],
    instructions: ['Audience rounds with spot chocolates and tech gifts will take place during scoring breaks.']
  },
  {
    id: 'tech-debate',
    name: 'Tech Debate',
    category: 'CREATIVE',
    tagline: 'Clash of Philosophies & Futuristic Ethics',
    description: 'Engage in fiery, structured parliamentary-style debates on topics like Artificial General Intelligence safety, Universal Basic Compute, Neural Implants, Quantum Cryptography regulations, and Digital Sovereignty.',
    date: '14 Nov 2026',
    day: 'Day 3',
    time: '02:00 PM - 05:30 PM',
    venue: 'Senate Hall (Administrative Block)',
    teamType: 'INDIVIDUAL',
    minTeamSize: 1,
    maxTeamSize: 1,
    teamSize: 'Individual',
    fee: 100,
    prizePool: '₹8,000 + Best Speaker Award',
    coordinator: 'Prof. Gayatri Devi & Siddharth Menon',
    contactPhone: '+91 98765 43221',
    contactEmail: 'debate@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'Open to passionate orators and analytical thinkers.',
    rules: [
      'Motions will be announced 20 minutes before each round.',
      'Speakers will be allotted 4 minutes constructive speech + 2 minutes POI (Points of Information).',
      'Grading criteria: Logical coherence, factual evidence, rhetoric, rebuttal strength.'
    ],
    whatToBring: ['Notepad & pens for preparation', 'College ID'],
    instructions: ['Prep materials must be handwritten during the 20-minute prep window.']
  },
  {
    id: 'logo-graphic-design',
    name: 'Logo Design / Graphic Design (Design Challenge)',
    category: 'CREATIVE',
    tagline: 'Visual Identity, UI & Cyberpunk Branding Sprint',
    description: 'Showcase your UI/UX and graphic design wizardry. Craft brand identities, futuristic UI mockups, and cyberpunk poster art based on an unannounced real-world design prompt.',
    date: '12 Nov 2026',
    day: 'Day 1',
    time: '01:30 PM - 04:30 PM',
    venue: 'Design & Multimedia Lab (Media Block)',
    teamType: 'INDIVIDUAL',
    minTeamSize: 1,
    maxTeamSize: 1,
    teamSize: 'Individual',
    fee: 150,
    prizePool: '₹10,000 + Design Tool Subscriptions',
    coordinator: 'Prof. Shalini Roy & Tanmay Bakshi',
    contactPhone: '+91 98765 43222',
    contactEmail: 'design@techhabba2k26.in',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
    featured: false,
    eligibility: 'Designers, illustrators, and UI artists.',
    rules: [
      'Design tools permitted: Figma, Adobe Photoshop, Illustrator, Blender.',
      'Theme will be revealed on the spot.',
      'All assets, illustrations, and typography treatments must be created from scratch.',
      'Final submission must include source files (.fig, .psd, or .ai) + exported high-res PNG/PDF.'
    ],
    whatToBring: ['Laptop with design software pre-installed + graphic tablet (optional)'],
    instructions: ['Judging based on aesthetic originality, adherence to design brief, color harmony, and visual execution.']
  }
];

export const scheduleData = [
  {
    day: 'DAY 1',
    date: '12 November 2026',
    events: [
      { id: 'ai-agents-workshop', name: 'Workshop / AI Agents Masterclass', category: 'TECHNICAL', time: '10:00 AM - 01:30 PM', venue: 'Main Auditorium', coordinator: 'Prof. Ananya Sharma', conflict: false },
      { id: 'the-big-hack', name: 'The Big Hack (Hackathon Kickoff)', category: 'HACKATHON', time: '10:00 AM (24 Hours)', venue: 'Central Innovation Hub', coordinator: 'Dr. Suresh Babu', conflict: false },
      { id: 'free-fire-battle', name: 'Free Fire', category: 'GAMING', time: '11:00 AM - 05:00 PM', venue: 'eSports Arena (Auditorium 2)', coordinator: 'Prof. Kiran Patel', conflict: true },
      { id: 'logo-graphic-design', name: 'Logo Design / Graphic Design', category: 'CREATIVE', time: '01:30 PM - 04:30 PM', venue: 'Design Lab', coordinator: 'Prof. Shalini Roy', conflict: false },
      { id: 'competitive-programming', name: 'CP', category: 'CODING', time: '02:00 PM - 05:00 PM', venue: 'Turing Computer Labs', coordinator: 'Prof. Rajesh Hegde', conflict: true },
      { id: 'cultural-night-1', name: 'Cyberpunk DJ Night & Welcome Gala', category: 'FUN / MANAGEMENT', time: '06:30 PM - 09:30 PM', venue: 'Open Air Amphitheatre', coordinator: 'Student Council', conflict: false }
    ]
  },
  {
    day: 'DAY 2',
    date: '13 November 2026',
    events: [
      { id: 'valorant-clash', name: 'Valorant Tournament', category: 'GAMING', time: '09:00 AM - 06:30 PM', venue: 'Pro-Gaming LAN Arena', coordinator: 'Prof. Arun Kumar', conflict: false },
      { id: 'capture-the-flag', name: 'CTF', category: 'TECHNICAL', time: '09:30 AM - 04:30 PM', venue: 'Cyber Security Operations Center', coordinator: 'Prof. Ramesh K', conflict: false },
      { id: 'the-big-hack-judging', name: 'The Big Hack - Grand Pitch & Finals', category: 'HACKATHON', time: '10:00 AM - 01:00 PM', venue: 'Central Innovation Hub', coordinator: 'Dr. Suresh Babu', conflict: true },
      { id: 'peer-to-peer', name: 'P2P', category: 'TECHNICAL', time: '10:00 AM - 01:00 PM', venue: 'Advanced Networking Lab', coordinator: 'Prof. Divya M', conflict: true },
      { id: 'it-quiz-championship', name: 'IT Quiz / Tech Quiz Championship', category: 'QUIZ', time: '11:00 AM - 02:30 PM', venue: 'Dr. APJ Abdul Kalam Auditorium', coordinator: 'Prof. Chandrashekar', conflict: false },
      { id: 'chess-tournament', name: 'Chess', category: 'FUN / MANAGEMENT', time: '02:00 PM - 06:00 PM', venue: 'Indoor Sports Pavilion', coordinator: 'Prof. Srinivas Murthy', conflict: false },
      { id: 'hackathon-awards', name: 'Hackathon Award Ceremony', category: 'HACKATHON', time: '05:30 PM - 07:00 PM', venue: 'Main Auditorium', coordinator: 'Organizing Team', conflict: false }
    ]
  },
  {
    day: 'DAY 3',
    date: '14 November 2026',
    events: [
      { id: 'campus-hunt', name: 'Campus Hunt', category: 'FUN / MANAGEMENT', time: '09:00 AM - 01:00 PM', venue: 'Campus Wide / Clock Tower', coordinator: 'Prof. Shylaja N', conflict: false },
      { id: 'ideathon', name: 'Ideathon', category: 'CREATIVE', time: '10:00 AM - 02:00 PM', venue: 'MBA Seminar Hall', coordinator: 'Prof. Meenakshi Sundaram', conflict: true },
      { id: 'tech-debate', name: 'Tech Debate', category: 'CREATIVE', time: '02:00 PM - 05:30 PM', venue: 'Senate Hall', coordinator: 'Prof. Gayatri Devi', conflict: false },
      { id: 'valedictory', name: 'Grand Valedictory & Prize Distribution', category: 'FUN / MANAGEMENT', time: '05:30 PM - 08:30 PM', venue: 'Acharya Main Stadium Arena', coordinator: 'Principal & Fest Committee', conflict: false }
    ]
  }
];

export const faqList = [
  {
    q: 'Who can participate?',
    a: 'Any student currently enrolled in an undergraduate (B.E., B.Tech, BCA, B.Sc, BBA, etc.) or postgraduate (M.Tech, MCA, MBA, M.Sc) program at any recognized university or college can participate in Tech Habba 2K26.'
  },
  {
    q: 'Can students from other colleges participate?',
    a: 'Yes, absolutely! Tech Habba 2K26 is a national-level inter-collegiate technical fest. We welcome students, teams, and colleges from across India to compete and innovate.'
  },
  {
    q: 'How do I register?',
    a: 'Simply browse the Events page, pick the events you want to compete in, click "Register Now", fill in your details (and team member info if it is a team event), and complete the payment. You will receive an instant unique Registration ID and verifiable QR code.'
  },
  {
    q: 'Can I register for multiple events?',
    a: 'Yes! You can register for multiple events as long as their timings do not directly clash on the Schedule page. Our schedule viewer clearly highlights potential timing overlaps.'
  },
  {
    q: 'How does team registration work?',
    a: 'For team events like Hackathons, Gaming, and CTF, the team leader registers on behalf of the squad by filling in the team name and details for each member. The registration fee covers the full team.'
  },
  {
    q: 'What is the registration fee?',
    a: 'Registration fees range from ₹100 for individual contests up to ₹500 for full 4-person hackathon teams and 5v5 eSports squads. Every entry fee directly funds the cash prize pool, certificates, and participant kits.'
  },
  {
    q: 'How will payment be verified?',
    a: 'Payments are securely processed online via Razorpay (UPI, Google Pay, PhonePe, Cards, Netbanking). Your payment status will instantly update to "PAYMENT VERIFIED" and "REGISTRATION CONFIRMED" with an downloadable official receipt.'
  },
  {
    q: 'Can I cancel my registration?',
    a: 'Cancellations and full refunds are allowed up to 7 days before the event start date (before 5 Nov 2026). Contact the finance coordinator with your Registration ID.'
  },
  {
    q: 'Where can I find the event schedule?',
    a: 'You can view the full interactive Day 1, Day 2, and Day 3 timeline on our Schedule page with instant filtering by category, venue, and time slot.'
  },
  {
    q: 'Is accommodation available?',
    a: 'Yes! On-campus hostel accommodation with 24/7 security, WiFi, and dining is available for outstation participants at just ₹450 per person per day. You can book it directly through our Accommodation section.'
  },
  {
    q: 'How do I contact the organizers?',
    a: 'You can reach us through the Contact page form, call our faculty coordinators at +91 98765 43210, or visit Acharya Institute of Technology, Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, Karnataka 560107.'
  }
];
