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
  { icon: 'globe', title: 'Web Apps & Platforms', text: 'Full-stack web applications, from internal tools to large consumer platforms. Fast, secure and built to scale.' },
  { icon: 'chip', title: 'Mobile Apps', text: 'iOS and Android apps that feel at home on both platforms, built alongside the web product or on their own.' },
  { icon: 'laptop', title: 'Desktop Apps', text: 'Cross-platform desktop software for Windows, macOS and Linux, for when performance or offline use matters.' },
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
