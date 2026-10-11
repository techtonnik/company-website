import { media, testimonials } from './site';

// Inline markup: **text** renders as highlighted (accent) text, as on the original pages.
export type CaseStudyDetail = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  year: string;
  services: string;
  website: string;
  hero: string;
  heroColor: string;
  shot: string;
  overview: string[];
  process: { title: string; text: string }[];
  gallery: string[];
  stackIntro: string;
  stack: { name: string; img: string }[];
  outcomes: { title: string; icon: string; text: string }[];
  testimonial: (typeof testimonials)[number];
};

const t = (name: string) => testimonials.find((x) => x.name === name)!;

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    slug: 'super-stan',
    title: 'Super Stan - Web App Design and Implementation',
    subtitle: 'Creating a modern web app to empower a small family-owned real estate agency',
    industry: 'Real Estate',
    year: '2024',
    services: 'UI/UX Design, Web Development',
    website: 'https://www.superstanbg.rs/',
    hero: '/media/nsplsh_c33b369eb19040d08a97f193348a05b8~mv2.webp',
    heroColor: '#c8231e',
    shot: media('249b31_82601226998b46869c6a9d840d83d718'),
    overview: [
      '**Super Stan** is a renowned family-owned **real estate agency** based in **Belgrade**. They specialize in the sale, rental, and management of properties, providing comprehensive support throughout the entire process. We were contacted by their leadership team, with a clear goal - make a modern web platform that will represent their brand, and allow Super Stan to move their business to the world wide web.',
      'Our main idea revolved around one word - **user-friendly**. We wanted to make sure that the platform could easily used by everyone, which is a very important thing in the real estate world.',
    ],
    process: [
      { title: 'Initial Research', text: 'In the initial research phase, we conducted a thorough analysis of the real estate market and competitors, identifying key trends and customer preferences. This research informed our understanding of the target audience and helped shape the overall strategy for the website.' },
      { title: 'Design & Functionality Planning', text: 'During the design and functionality planning stage, we focused on creating a visually appealing and intuitive layout that aligns with the Super Stan brand. We prioritized essential features such as easy navigation, property search filters, and high-quality visuals to enhance the user experience.' },
      { title: 'User-Friendly Implementation', text: 'The implementation phase involved developing a responsive website using modern web technologies, ensuring it performs seamlessly across all devices. We integrated user-friendly features, including interactive maps and streamlined contact forms, to facilitate easy engagement with potential clients.' },
      { title: 'Testing and Quality Assurance', text: "Comprehensive testing and quality assurance were conducted to ensure the website's functionality, performance, and security. We performed usability testing to identify and resolve any issues, ensuring a smooth and error-free user experience." },
      { title: 'Post-Launch Support', text: "Post-launch, we provided ongoing support and monitoring to address any emerging issues and optimize the website's performance. We also implemented analytics tools to track user behavior and continuously improve the site's effectiveness based on data-driven insights." },
    ],
    gallery: [
      media('249b31_82601226998b46869c6a9d840d83d718'),
      media('249b31_1a144b48f5c64df1a7ee57e75b5128af'),
      media('249b31_192a30534e294c89b6c2f785a8cfdd93'),
      media('249b31_baa5bd46330d436e9857a14fcae492c9'),
      media('249b31_5096ae3f16c24b29b30c3c458696f0f5'),
    ],
    stackIntro: 'A list of technologies we used to accomplish our goals and make Super Stan come to life!',
    stack: [
      { name: 'React', img: media('249b31_7f09d15393c14be8bc156333e9dd52ad') },
      { name: 'Express.js', img: media('249b31_bcbc161384a347579791296a7c86b11c') },
      { name: 'Firebase Cloudstore', img: media('249b31_6156b405784d46928215e88e415bc3fb') },
      { name: 'Mongo Cloud', img: media('249b31_f3ce1a06e69641079694f7e1a18022b3') },
      { name: 'AWS EC2', img: media('249b31_6e51ff76c9b24b549639ebec9ad34adb') },
    ],
    outcomes: [
      { title: 'A Whole New World', icon: 'globe', text: 'Creating a web app allowed Super Stan to become a household name in the online space, something they were struggling to do prior to the platform launch.' },
      { title: 'Digital Marketing Collaboration', icon: 'camera', text: "After finishing the web app, we were asked to take over their social media profiles and digital marketing campaigns. That's how you know you did a good job!" },
      { title: 'Increased Engagement', icon: 'chart', text: 'In our clients own words - "Being able to share links directly to our website allowed us to create more traction. Not to mention, looking more professional!"' },
    ],
    testimonial: t('Luka Stojaković'),
  },
  {
    slug: 'gorska',
    title: 'Gorska - E-Shop Design and Implementation',
    subtitle: 'Creating a modern e-commerce solution for a premium craft distilling brand',
    industry: 'Craft Distiilling',
    year: '2024',
    services: 'UI/UX Design, E-Commerce',
    website: 'https://destilerija-gorska.myshopify.com/',
    hero: media('249b31_0943fa7ff2f4447ebc0a71c1f20e43ad'),
    heroColor: '#2b2118',
    shot: media('249b31_5a598c7ccb4e443886990f95a467fb74'),
    overview: [
      "**Destilerija Gorska** is a **Serbian** distillery, specialized in making **rakija**. If you don't know what rakija is - you're really missing out. They reached out to us with a clear vision - **luxury**! They were on their way to create a premium brand, and it was up to us to make that a reality through the development of their e-shop.",
      'And boy, did we do it right! The whole web presentation stems **PREMIUM** from every pore - the colors, the animations, the images. Everything is seamlessly tied together to create **a fully functioning e-commerce solution**!',
    ],
    process: [
      { title: 'Initial Research', text: 'In the initial research phase, we conducted a thorough analysis of the key competitors, identifying key trends and customer preferences. This research informed our understanding of the target audience and helped shape the overall strategy for the website.' },
      { title: 'Design & Functionality Planning', text: "During the design and functionality planning stage, we focused on creating a visually appealing and intuitive layout that aligns with the Gorska brand. The main focus was amplifying the luxurious side of the brand, while still making sure it doesn't collide with the overall functionality of the website." },
      { title: 'Shopify Implementation', text: 'The implementation phase involved integrating our solution into Shopify, ensuring it performs seamlessly across all devices. We made sure that the whole flow was covered, including the cart, the checkout, and order-related e-mails.' },
      { title: 'Testing and Quality Assurance', text: "Comprehensive testing and quality assurance were conducted to ensure the e-shop's functionality, performance, and security. We performed usability testing to identify and resolve any issues, ensuring a smooth and error-free user experience." },
      { title: 'Post-Launch Support', text: "This is where we're at right now! As each one of our clients know - we are there for every single problem that might occur, and we solve them in record-breaking fashion." },
    ],
    gallery: [
      media('249b31_5a598c7ccb4e443886990f95a467fb74'),
      media('249b31_3e835228e9164f918217119271d3fa56'),
      media('249b31_e83e8a5b1b93445fabd1f37abb5f7693'),
      media('249b31_de2a2edd3eab404ea6a00a23eddaa18a'),
      media('249b31_d8c46ff1e00b43c082b78ffeca6f2a14'),
    ],
    stackIntro: 'This were the tools used to design this masterpiece, and bring it to life!',
    stack: [
      { name: 'Figma', img: media('249b31_5ff5d11c3b3a4d6e83f303f9aeb94430') },
      { name: 'Shopify', img: media('249b31_0aed3c8b0f53467c827b019557cca692') },
    ],
    outcomes: [
      { title: 'Satisfaction Level 9000!', icon: 'chart', text: 'It seems we did exactly what we were supposed to, and more! The client was more than willing to give us a testimonial, while also signing a long term maintenance and general support contract' },
      { title: 'The Best Is Yet To Come!', icon: 'globe', text: "It's too early to tell the impact the store will make, as it just went live at the moment of writing this. We are still, without a doubt, sure that Gorska will make a big boom in the Serbian brandy market!" },
    ],
    testimonial: t('Ivana Lešević'),
  },
];
