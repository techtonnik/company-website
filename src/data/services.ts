import { media } from './site';

export const allServices = [
  { title: 'Web Development', href: '/services/web-development', text: "Whether you're starting from scratch or revamping your app, we've got you covered. Our team builds web solutions that are fast, secure, fully scalable and look great on any device." },
  { title: 'Low-Code / No-Code', href: '/services/low-code-no-code', text: 'Want to create an amazing looking website? We can help you build anything you can imagine  with low-code and no-code platorfms like Wix and WebFlow.' },
  { title: 'E-Commerce', href: '/services/e-commerce', text: "Ready to sell online? We'll set up your eCommerce store so you can focus on what you do best – selling your products. From inventory to checkout, we handle the tech stuff." },
  { title: 'Desktop Development', href: '/services/desktop-development', text: 'Need a robust desktop application? Our developers create software that runs smoothly on Windows, macOS, and Linux. Whatever your platform, we deliver.' },
  { title: 'Mobile Development', text: 'In today’s mobile-first world, having a great app is essential. We design and develop mobile apps that provide a seamless experience on both iOS and Android.' },
  { title: 'UI/UX', text: 'Good design isn’t just about looks – it’s about functionality. We make sure your users have a smooth and enjoyable experience, whether they’re on your website or app.' },
  { title: 'Branding', text: 'Your brand is more than just a fancy logo. We help you tell your story and connect with your audience through consistent, thoughtful branding.' },
  { title: 'Graphic Design', text: 'Need eye-catching visuals? Our graphic design team creates everything from logos to marketing materials that make your brand stand out.' },
  { title: 'Consulting', text: 'Not sure where to start or how to improve? Our consulting services provide you with expert advice and a clear plan to achieve your business goals.' },
  { title: 'AI Integrations', text: 'Artificial Intelligence can and will transform your business. We integrate AI solutions that automate processes, improve customer service, and provide valuable insights.' },
  { title: 'Digital Marketing', text: 'Get noticed online with our digital marketing services. We handle everything from SEO, social media, marketing campaigns and more, helping you reach and engage with your audience.' },
  { title: 'Mentorship', text: 'Being new in an industry is never easy. We help young up-and-coming developers by allowing them to work on real projects and learn from the experts.' },
];

export const modelDetails = [
  {
    title: 'Dedicated Team',
    text: 'A team of experienced professionals working exclusively on your project, for a fixed team-based monthly fee. This allows you to augment your existing team, or outsource a full team to focus on your endeavours.',
    benefits: ['Your very own premium-quality team', 'Predictable monthly-based price', 'Direct access to every team member'],
  },
  {
    title: 'Fixed Price',
    text: 'Straight to the point - you know what you need and when you need it, and we know the exact price for it! Ideal for shorter, less-complex projects. Strict deadlines, no additional input required - you give us the specs, we give you a top-notch product in record time.',
    benefits: ['Strictly defined project deadlines', 'One price for everything, defined in advance', 'No management needed from your side'],
  },
  {
    title: 'Time And Material',
    text: 'A flexible model for open-ended projects, based on an hourly rate. This model allows for continuous iterating of the project specs and unlimited changes in the development cycle. And best of all, you only pay for the amount of work done, and not a cent more!',
    benefits: ['Fixed hourly rates', 'Pay only for the amount of work done', 'Greater control & flexiblity'],
  },
];

// ---- Service detail pages ----

const tm = 'A flexible model for open-ended projects, based on an hourly rate. This model allows for continuous iterating of the project specs and unlimited changes in the development cycle. And best of all, you only pay for the amount of work done, and not a cent more!';
const dt = 'A team of **experienced professionals** working exclusively on your project, for a fixed team-based monthly fee. This allows you to augment your existing team, or outsource a full team to focus on your endeavours.';
const fp = 'Straight to the point - you know what you need and when you need it, and we know the exact price for it! Ideal for shorter, less-complex projects. Strict deadlines, no additional input required - you give us the specs, we give you a top-notch product in record time.';
const transparent = { title: 'Transparent Communication', icon: 'headset', text: "Yes, we are always respectful, but - you won't find and corporate bullsh*t here. No unanswered e-mails, no bureaucratic delays, and no jargon-filled explanations. We are straightforward and accessible, ensuring that you always get clear, honest communication." };
const longRun = (what: string) => ({ title: "We're Here for the Long Run", icon: 'globe', text: `Our goal is not only to build your ${what} from the ground up, but also to maintain it for the foreseeable future. Whenever you need something changed - be assured we're on it!` });

const tech = (name: string, id: string) => ({ name, img: media(id) });

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
    title: 'Web Development',
    subtitle: 'Creating full-stack web solutions, perfectly tailored to your needs',
    whyIntro: 'In the sea of software development agencies, why should you pick us to develop your web application?',
    why: [
      { title: 'Full Stack to the Core!', icon: 'cap', text: 'We can internally cover every single aspect of your web solution, including product discovery, UI design, full development, testing and deployment. One team to rule them all!' },
      { title: 'Cutting-Edge Tech Stack', icon: 'chip', text: 'When building your web solution, it\'s important to pick and choose which tech stack to use. Our choice always goes to technologies which are modern, easy to master, and have a great community around them.' },
      transparent,
      longRun('application'),
    ],
    stackTitle: ["What's our", 'Tech', 'Stack?'],
    stackIntro: 'Your app deserves the best - which is why our stack consists solely of performant, modern technologies',
    stack: [
      { group: 'Front End', items: [tech('Angular', '249b31_7e05c6bdfe8749779115f9021d844b54'), tech('React', '249b31_7f09d15393c14be8bc156333e9dd52ad'), tech('Vue.js', '249b31_83e46e3de4904ca981758ac89f0adab0')] },
      { group: 'Back End', items: [tech('Nest.js', '249b31_e6497a03eaea4104bdbab90aa2a48c59'), tech('Express.js', '249b31_bcbc161384a347579791296a7c86b11c')] },
      { group: 'Database', items: [tech('PostgreSQL', '249b31_b68e22ad0f5c4cd9860f8ac2e0ade313'), tech('MongoDB', '249b31_f3ce1a06e69641079694f7e1a18022b3')] },
      { group: 'Cloud', items: [tech('Firebase', '249b31_6156b405784d46928215e88e415bc3fb'), tech('AWS', '249b31_6e51ff76c9b24b549639ebec9ad34adb'), tech('Docker', '249b31_fc1c33331777466fbc47a44918fe10da')] },
    ],
    collabIntro: "We offer three distinct ways of collaboration. We'll help you pick and choose the one that's best suited for your project",
    models: [
      { tab: 'Time & Material', title: 'Fixed hourly rates, pay-as-you-go', text: tm, note: 'Most web solutions are best suited for this model of engagement.' },
      { tab: 'Fixed Price', title: 'One price, defined in advance 🌋', text: fp, note: 'Usually not ideal for web solutions, as they often evolve over time.' },
      { tab: 'Dedicated Team', title: 'A quality team working just for you 🌋', text: dt, note: 'Ideal for complex web solutions that require a lengthy development cycle and a long maintenance period.' },
    ],
    projectsIntro: "We've handpicked three web development projects from our portfolio!",
    projects: [
      { title: 'Super Stan Agency', text: 'A full stack solution built using React & Express.js, with cloud-based hosting and media storage', img: media('249b31_82601226998b46869c6a9d840d83d718'), href: '/case-studies/super-stan' },
      { title: 'Elementals NFT', text: 'A Web3 project, based on smart contracts written in Solidity', img: media('249b31_f9b4419ad2b247c19c4a3c922e16bdd0'), href: 'https://elementals-nft.com/' },
      { title: 'SerbLink', text: 'A modern platform aimed towards Serbian businesses in the diaspora.', img: media('249b31_a4e031acdd3d4b6488a88b3068fc8168'), href: 'https://serblink.org/' },
    ],
    faq: [
      { q: 'How would I know if my app should be a web app?', a: ["You should choose a web app if you want broad accessibility across devices without needing to install software, and if real-time updates are important. It's ideal for users who primarily need internet access and a browser to use the app. If that doesn't seem like ideal, we are also capable of building top-notch mobile and desktop apps. We've got you covered!"] },
      { q: 'Are technologies not listed in the tech stack out of the question?', a: ['Absolutely not! We have a wide variety of collaborators. If you have a very specific request for the tech stack, chances are we have someone to cover that!'] },
      { q: 'Which model of engagement is ideal for my project?', a: ["It's perfectly okay if you're unsure. Our team is dedicated to helping you make the right decision. Here are the options:", "**Fixed Price Model:** Ideal for smaller web apps that can be well-defined in advance. That's rarely the case, but the option is there", '**Time & Material Model:** Best for longer projects with evolving requirements.', '**Dedicated Team Model:** Suitable for ongoing projects where you need a full team working exclusively for you.', "We'll guide you through the decision-making process to find the perfect fit for your project."] },
      { q: 'How much will my project cost?', a: ["The cost of your project depends on its complexity, and deadline. While we have price ranges for web development projects, each price is negotiated based on various factors. Reach out to us, and we'll provide a detailed estimate tailored to your project's specifics"] },
      { q: 'I already have a project. Can you maintain it?', a: ["Oh yes we can! We're no strangers to legacy software, so feel free to reach out to us if your existing app needs a new feature, or just some good old maintenance!"] },
    ],
    cta: "Let's get your idea on the web!",
  },
  {
    slug: 'low-code-no-code',
    title: 'Low-Code / No-Code',
    subtitle: 'The very pinnacle of presentational websites for you and your brand!',
    whyIntro: 'Looking for a website, and wondering why you should choose us? Let us make it easier to make this decision!',
    why: [
      { title: 'Design Included!', icon: 'cap', text: 'Even if you have just a spark of an idea, we can bring it to life! With our expertise in UI/UX design, we transform your vision into a fully realized product. From the initial brainstorming session to the final implementation, we ensure that your idea is beautifully executed. Trust us to make your vision a reality, no matter how big or small.' },
      { title: 'Cutting-Edge Platforms', icon: 'chip', text: "When building your website, it's important to pick and choose which platform to use. Our choice always goes to platforms which are modern, easy to master, and have a great community around them." },
      transparent,
      longRun('website'),
    ],
    stackTitle: ['Which', 'Platforms', 'Do We Use?'],
    stackIntro: 'No legacy software here - we make websites using only the latest and greatest platforms!',
    stack: [{ items: [tech('Webflow', '249b31_bb392c7e5459441eabd4b164f19fcb2b'), tech('WIX', '249b31_2c31bb816c974b12a8e24e47d09483b1'), tech('Framer', '249b31_c6f2e96e1c0d410f8230d64c5cebc628')] }],
    collabIntro: 'We offer three distinct ways of collaboration in general, but we stick to the fixed price one when it comes to this type of project',
    models: [{ tab: 'Fixed Price', title: 'One price, defined in advance 🌋', text: fp, note: 'Absolutely ideal for these projects!' }],
    projectsIntro: "We've handpicked three low-code/no-code implementations from our portfolio!",
    projects: [
      { title: 'Michael Forte', text: 'Luxury vehicles in all of their glory, thanks to our website design and implementation', img: media('249b31_8dc5633000f745a8ae3de5505d377aa1'), href: 'https://www.michaeldmforte.com/' },
      { title: 'Saint Matthew Place', text: 'A stunning website that promotes seaside luxury apartments in Montenegro', img: media('249b31_feb98fd4b23f4181be517703f50c6e14'), href: 'https://www.saintmatthewplace.com/' },
      { title: '$CHEF', text: "Meme coins never looked so cool! And we're one of the reasons for it.", img: media('249b31_5ba05f504c2148e987dc583b8f913789'), href: 'https://thezenithdigital.wixstudio.io/chefcoin' },
    ],
    faq: [
      { q: 'Are platforms not listed in the tech stack out of the question?', a: ["Seriously? Our platforms are not enough? 🥲 Jokes aside, we are always adaptable, so if your website is in WordPress, Jekyll, Hugo, or any other framework/platform, don't hesitate to reach out to us!"] },
      { q: 'Why are these projects "fixed price" only?', a: ['Our experience so far has shown that any other arrangement is not ideal for presentational websites. We are open to negotiating a different kind of collaboration, but we sincerely doubt anything other than the "fixed price" model will benefit our clients more.'] },
      { q: 'How much will my project cost?', a: ["The cost of your project depends on its complexity, number of pages, animations, and the deadline. While we have price ranges for these projects, each price is negotiated based on various factors. Reach out to us, and we'll provide a detailed estimate tailored to your project's specifics"] },
      { q: 'I already have a website. Can you make changes to it?', a: ["Oh yes we can! We're no strangers to working on existing codebases, so feel free to reach out to us if your existing website needs a new feature, a partial redesign, or just some good old maintenance!"] },
    ],
    cta: "Your brand's story starts here!",
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    subtitle: 'Turn your store into a beautiful shopping mall on the world wide web!',
    whyIntro: 'Looking for an e-commerce website, and wondering why you should choose us? Let us make it easier to make this decision!',
    why: [
      { title: 'No design? No problem!', icon: 'cap', text: "E-commerce solutions are full of different themes, each catering to specific  businesses. If you have no idea how your website will look like - leave it to us! After a short consultation with you, we will present you what we feel is the best solution for you and your brand. Let's get those products sold!" },
      { title: 'No Legacy Solutions!', icon: 'chip', text: "When building your e-commerce website, it's important to pick and choose which platform to use. Our choice always goes to platforms which are modern, easy to master, and have a great community around them." },
      transparent,
      longRun('website'),
    ],
    stackTitle: ['Which', 'Platforms', 'Do We Use?'],
    stackIntro: 'No legacy software here - we make websites using only the latest and greatest platforms!',
    stack: [{ items: [tech('Shopify', '249b31_02141a035c8647dd8d44d841064c8a23'), tech('Wix', '249b31_2c31bb816c974b12a8e24e47d09483b1'), tech('WooCommerce', '249b31_187dbe2816fc47c99b8a4947cf5aece6')] }],
    collabIntro: 'We offer three distinct ways of collaboration in general, but we stick to the fixed price one when it comes to this type of project',
    models: [{ tab: 'Fixed Price', title: 'One price, defined in advance 🌋', text: fp, note: 'Absolutely ideal for these projects!' }],
    projectsIntro: "We've handpicked some e-commerce implementations from our portfolio!",
    projects: [
      { title: 'Destilerija Gorska', text: 'An online shop for the most wanted commodity in Serbia - Homemade Rakija!', img: media('249b31_5a598c7ccb4e443886990f95a467fb74'), href: '/case-studies/gorska' },
      { title: 'NotYou Brand', text: "Dress yourself for any occasion with the help of NotYou's amazing online platform", img: media('249b31_eb5d0134b83d471081b3fb2b1ab540c5'), href: 'https://notyoubrand.com/' },
    ],
    faq: [
      { q: 'Are platforms not listed in the tech stack out of the question?', a: ["We are pretty sure you don't need anything other than what we are offering! BUT, if that's not the case, we're ready to listen to your needs. Magento? A brand new blazingly-fast platform? No problemo!"] },
      { q: 'Why are these projects "fixed price" only?', a: ['Our experience so far has shown that any other arrangement is not ideal for e-commerce websites. We are open to negotiating a different kind of collaboration, but we sincerely doubt anything other than the "fixed price" model will benefit our clients more.'] },
      { q: 'How much will my project cost?', a: ["The cost of your project depends on its complexity, number of products, animations, and the deadline. While we have price ranges for these projects, each price is negotiated based on various factors. Reach out to us, and we'll provide a detailed estimate tailored to your project's specifics"] },
      { q: 'I already have an e-commerce website. Can you make changes to it?', a: ["Oh yes we can! We're no strangers to working on existing codebases, so feel free to reach out to us if your existing website needs a new feature, a partial redesign, or just some good old maintenance!"] },
    ],
    cta: 'Your online journey starts here!',
  },
  {
    slug: 'desktop-development',
    title: 'Desktop Development',
    subtitle: 'Powerful, cross-platform desktop applications designed for performance and reliability.',
    whyIntro: 'Looking for a desktop application, and wondering why you should choose us? Let us make it easier to make this decision!',
    why: [
      { title: 'Bringing Your Desktop Vision to Life', icon: 'cap', text: 'With our expertise in desktop application development, we bring your concept to life with precision and care. From the first draft to the finished product, we ensure that your application is powerful, efficient, and user-friendly. No matter the scale of your project, trust us to deliver a desktop solution that exceeds your expectations.' },
      { title: 'Cutting-Edge Platforms', icon: 'chip', text: "We specialize in creating powerful solutions for Windows, macOS, and Linux, leveraging modern, user-friendly technologies that are supported by strong communities. Whether you're targeting one platform or all three, we ensure your application is built for optimal performance and seamless user experiences across any environment." },
      transparent,
      longRun('application'),
    ],
    stackTitle: ["What's our", 'Tech', 'Stack?'],
    stackIntro: 'We have expertise in diverse tools and technologies in this realm, utilizing them to fit your needs',
    stack: [{ items: [tech('Electron', '249b31_111d92c3e2f946f7a9bd15b2888da4f3'), tech('Tauri', '249b31_b38ccfd89d884f80a94d65480992e15d'), tech('Flutter', '249b31_b2dd92aebce74e7da267311c724de1a1')] }],
    collabIntro: "We offer three distinct ways of collaboration. We'll help you pick and choose the one that's best suited for your project",
    models: [
      { tab: 'Time & Material', title: 'Fixed hourly rates, pay-as-you-go', text: tm, note: 'Most desktop solutions are best suited for this model of engagement.' },
      { tab: 'Fixed Price', title: 'One price, defined in advance 🌋', text: fp, note: 'Usually not ideal for complex desktop solutions, as they often evolve over time.' },
      { tab: 'Dedicated Team', title: 'A quality team working just for you 🌋', text: dt, note: 'Ideal for complex desktop solutions that require a lengthy development cycle and a long maintenance period.' },
    ],
    projectsIntro: "We've handpicked two desktop applications from our portfolio!",
    projects: [
      { title: 'Synergy X', text: 'A tailor-made marketing optimization automation tool.', img: media('249b31_bb12e09855f243fa907213dd857a74b7'), href: '/products' },
      { title: 'BCA Scheduler', text: 'A cutting-edge desktop application designed to revolutionize the way you organize and manage your complex schedules.', img: media('249b31_bdde443cdfae449595c182f6f7cb4c57'), href: '/products' },
    ],
    faq: [
      { q: 'Should My App Be a Desktop Application?', a: ["You should choose a desktop application if you need high performance, offline capabilities, or specialized hardware integration. Desktop apps are ideal for users who require robust functionality and can benefit from native features specific to Windows, macOS, or Linux. If that doesn't fit your needs, we also excel at creating top-notch web and mobile apps. Whatever your requirements, we've got you covered!"] },
      { q: 'Are Technologies Not Listed in the Tech Stack Off-Limits?', a: ["Absolutely not! We collaborate with a diverse network of experts. If you have a specific technology in mind that's not listed, chances are we have the right person to handle it!"] },
      { q: 'Which Engagement Model is Right for My Desktop Project?', a: ["Not sure? No problem! Our team will help you make the best choice. Here are your options:", "**Fixed Price Model:** Best for smaller desktop applications where the scope is well-defined. While it's rare, the option is available.", '**Time & Material Model:** Ideal for longer projects with evolving requirements and scope changes.', '**Dedicated Team Model:** Perfect for ongoing projects where you need a dedicated team focused exclusively on your application.', "We'll guide you through the process to find the model that perfectly suits your project."] },
      { q: 'How Much Will My Desktop Project Cost?', a: ["The cost depends on your project's complexity, features, and deadline. We provide a range of pricing for desktop development, but each estimate is tailored to your specific needs. Contact us, and we'll give you a detailed cost breakdown based on your project's requirements."] },
      { q: 'Can You Maintain My Existing Desktop Application?', a: ["Absolutely! We’re well-versed in working with legacy software. If your current desktop application needs new features or just some maintenance, reach out to us, and we’ll take care of it!"] },
    ],
    cta: "Your brand's story starts here!",
  },
];
