import { media } from './site';

// Services are written in first person: Techtonnik is Stevan plus a network of partners.

const tech = (name: string, id: string) => ({ name, img: media(id) });

export const stack = {
  frontend: [tech('Angular', '249b31_7e05c6bdfe8749779115f9021d844b54'), tech('React', '249b31_7f09d15393c14be8bc156333e9dd52ad'), tech('Vue.js', '249b31_83e46e3de4904ca981758ac89f0adab0')],
  backend: [tech('Nest.js', '249b31_e6497a03eaea4104bdbab90aa2a48c59'), tech('Express.js', '249b31_bcbc161384a347579791296a7c86b11c')],
  database: [tech('PostgreSQL', '249b31_b68e22ad0f5c4cd9860f8ac2e0ade313'), tech('MongoDB', '249b31_f3ce1a06e69641079694f7e1a18022b3')],
  cloud: [tech('Firebase', '249b31_6156b405784d46928215e88e415bc3fb'), tech('AWS', '249b31_6e51ff76c9b24b549639ebec9ad34adb'), tech('Docker', '249b31_fc1c33331777466fbc47a44918fe10da')],
  desktop: [tech('Electron', '249b31_111d92c3e2f946f7a9bd15b2888da4f3'), tech('Tauri', '249b31_b38ccfd89d884f80a94d65480992e15d'), tech('Flutter', '249b31_b2dd92aebce74e7da267311c724de1a1')],
};

export const allServices = [
  { icon: 'globe', title: 'Web Apps & Platforms', href: '/services/web-development', text: 'Full-stack web applications, from internal tools to large consumer platforms. Fast, secure and built to scale.' },
  { icon: 'chip', title: 'Mobile Apps', text: 'iOS and Android apps that feel at home on both platforms, built alongside the web product or on their own.' },
  { icon: 'laptop', title: 'Desktop Apps', href: '/services/desktop-development', text: 'Cross-platform desktop software for Windows, macOS and Linux, for when performance or offline use matters.' },
  { icon: 'sparkles', title: 'AI Integrations', text: 'AI-powered features that actually earn their place: automation, assistants, search and insights built into your product.' },
  { icon: 'network', title: 'Technical Consulting', text: 'Architecture reviews, tech stack choices and a second opinion from someone who has shipped it before.' },
  { icon: 'headset', title: 'Maintenance & Legacy Code', text: 'Taking over existing codebases: new features, fixes, upgrades and keeping things running long after launch.' },
];

export const modelDetails = [
  {
    title: 'Hourly',
    tag: 'Most common',
    text: 'I join your project as a senior developer and work alongside your team, billed by the hour. No fixed end date: I stay on for as long as you need, and you only pay for the time actually spent.',
    benefits: ['Fixed hourly rate, agreed up front', 'Scale hours up or down at any time', 'Direct line to the person writing the code'],
  },
  {
    title: 'Dedicated Team',
    text: 'For bigger products, I assemble a team of developers, designers and QA from my network and lead it as your single point of contact, for a predictable monthly fee.',
    benefits: ['A team picked for your project', 'Predictable monthly price', 'One point of contact for everything'],
  },
  {
    title: 'Fixed Price',
    text: 'For small, well-defined builds: you share the specs, I give you one price and a deadline, and deliver exactly that.',
    benefits: ['One price, defined in advance', 'Clear deadlines', 'Best for tightly scoped work'],
  },
];

// ---- Service detail pages ----

const tm = 'I work on your project at a fixed hourly rate, alongside your team. Requirements can change as often as they need to, and you only pay for the time actually spent.';
const dt = 'I assemble a team of **experienced professionals** from my network, picked for your project, and lead it as your single point of contact, for a predictable monthly fee.';
const fp = 'You share the specs, I give you one price and a deadline, and deliver exactly that. Ideal for small, tightly scoped builds.';
const straightTalk = { title: 'Straight Talk', icon: 'headset', text: 'No account managers, no jargon, no unanswered emails. You talk directly to the person writing the code, and you always know where things stand.' };
const longRun = (what: string) => ({ title: 'Here for the Long Run', icon: 'globe', text: `Most of my work is ongoing, not one-off. After your ${what} launches, I keep maintaining it and building what comes next.` });
const mockup = (name: string) => `/mockups/${name}-desktop.jpg`;

export type ServiceModel = { tab: string; title: string; text: string; note: string };
export type ServicePage = {
  slug: string;
  title: string;
  subtitle: string;
  whyIntro: string;
  why: { title: string; icon: string; text: string }[];
  stackTitle: [string, string, string];
  stackIntro: string;
  stack: { group?: string; items: { name: string; img: string }[] }[];
  collabIntro: string;
  models: ServiceModel[];
  projectsIntro: string;
  projects: { title: string; text: string; img: string; href: string }[];
  faq: { q: string; a: string[] }[];
  cta: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'web-development',
    title: 'Web Apps & Platforms',
    subtitle: 'Full-stack web applications, from internal tools to large-scale platforms',
    whyIntro: 'Plenty of people can build a web app. Here is what you get when you work with me.',
    why: [
      { title: 'Full Stack, End to End', icon: 'cap', text: 'Frontend, backend, databases, testing and deployment. I cover the whole stack, and when a project needs more hands, I bring in people from my network I already trust.' },
      { title: 'Modern, Proven Tech', icon: 'chip', text: 'I pick technologies that are fast, well supported and easy to hire for later, so your product never depends on one person or one niche framework.' },
      straightTalk,
      longRun('app'),
    ],
    stackTitle: ["What's my", 'Tech', 'Stack?'],
    stackIntro: 'Performant, modern technologies with strong communities behind them',
    stack: [
      { group: 'Front End', items: stack.frontend },
      { group: 'Back End', items: stack.backend },
      { group: 'Database', items: stack.database },
      { group: 'Cloud', items: stack.cloud },
    ],
    collabIntro: 'Three ways to work together. Most web projects are ongoing, so hourly is usually the best fit.',
    models: [
      { tab: 'Hourly', title: 'Fixed hourly rate, pay as you go', text: tm, note: 'Most web projects are best suited for this model.' },
      { tab: 'Dedicated Team', title: 'A team assembled for you', text: dt, note: 'Ideal for large platforms with a long development and maintenance cycle.' },
      { tab: 'Fixed Price', title: 'One price, defined in advance', text: fp, note: 'Rarely ideal for web apps, as they tend to evolve over time.' },
    ],
    projectsIntro: 'A few of the web platforms I have worked on.',
    projects: [
      { title: 'Ontopo', text: 'One of the world’s biggest table reservation platforms. Frontend, backend and QA, via CodeIT.', img: mockup('ontopo'), href: 'https://ontopo.com/en/rs/belgrade' },
      { title: 'Zirtue', text: 'A bill-pay lending platform powered by friends and family, built via Cinnamon.', img: mockup('zirtue'), href: 'https://www.zirtue.com/' },
      { title: 'Super Stan', text: 'A full-stack real estate platform built with React and Express.js.', img: mockup('superstan'), href: '/case-studies/super-stan' },
    ],
    faq: [
      { q: 'Can you join a project that is already in progress?', a: ["Yes, that's most of what I do. I can join your existing team and codebase, get up to speed quickly, and work alongside your developers on an hourly basis."] },
      { q: 'Should my app be a web app?', a: ['If you want it to work on any device without installing anything, and you need to ship updates instantly, a web app is usually the right call. If not, I also build mobile and desktop apps.'] },
      { q: 'What if you need technologies outside your stack?', a: ["Not a problem. My network covers a wide range of technologies, so if your project needs something specific, there's a good chance I know the right person."] },
      { q: 'How much will my project cost?', a: ["It depends on the scope and how we work together. For hourly work, you pay a fixed rate for the time spent. For anything else, email me with a short description and I'll come back with an estimate."] },
    ],
    cta: "Let's get your idea on the web!",
  },
  {
    slug: 'desktop-development',
    title: 'Desktop Apps',
    subtitle: 'Cross-platform desktop software designed for performance and reliability',
    whyIntro: 'Desktop software has its own challenges. Here is how I handle them.',
    why: [
      { title: 'One Codebase, Every Platform', icon: 'cap', text: 'Windows, macOS and Linux from a single codebase, so you get a consistent experience everywhere without paying for three separate apps.' },
      { title: 'Built for Performance', icon: 'chip', text: 'Offline support, hardware access and heavy workloads are where desktop apps shine. I pick the right tool for each, whether that is Electron, Tauri or Flutter.' },
      straightTalk,
      longRun('app'),
    ],
    stackTitle: ["What's my", 'Tech', 'Stack?'],
    stackIntro: 'Tools I use to build fast, native-feeling desktop apps',
    stack: [{ items: stack.desktop }],
    collabIntro: 'Three ways to work together. Most desktop projects evolve over time, so hourly is usually the best fit.',
    models: [
      { tab: 'Hourly', title: 'Fixed hourly rate, pay as you go', text: tm, note: 'Most desktop projects are best suited for this model.' },
      { tab: 'Dedicated Team', title: 'A team assembled for you', text: dt, note: 'Ideal for complex apps with a long development and maintenance cycle.' },
      { tab: 'Fixed Price', title: 'One price, defined in advance', text: fp, note: 'Works for small, well-defined tools.' },
    ],
    projectsIntro: 'A desktop app I have built.',
    projects: [
      { title: 'BCA Scheduler', text: 'A desktop application for creating and managing complex business schedules.', img: media('249b31_bdde443cdfae449595c182f6f7cb4c57'), href: '/products' },
    ],
    faq: [
      { q: 'Should my app be a desktop application?', a: ['Choose desktop if you need high performance, offline use, or access to local hardware and files. If broad accessibility matters more, a web app might be the better fit, and I build those too.'] },
      { q: 'Can you maintain my existing desktop app?', a: ['Yes. Whether it needs new features, a framework upgrade or just regular maintenance, I can take over an existing codebase.'] },
      { q: 'How much will my project cost?', a: ["It depends on the scope and how we work together. For hourly work, you pay a fixed rate for the time spent. For anything else, email me with a short description and I'll come back with an estimate."] },
    ],
    cta: 'Need a desktop app built?',
  },
];
