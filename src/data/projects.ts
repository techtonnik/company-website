import { media } from './site';

/** Highlighted projects: shown on the home page and at the top of /case-studies. */
export type Featured = {
  title: string;
  tagline: string;
  /** Longer description for the case studies page. */
  text: string;
  scope: string;
  /** Live site, shown in the mockup's address bar. Omit for apps without a public site. */
  site?: string;
  /** In-depth case study page, when one exists. */
  caseStudy?: string;
  /** Where cards link when there's no live site (e.g. internal tools). */
  href?: string;
  /** Screenshot basename in public/mockups (see scripts/capture-mockups.mjs). */
  mockup: string;
  tint: string;
  via?: { name: string; href: string };
  /** Client the project was built for, when it isn't the product owner itself. */
  client?: { name: string; href: string };
  /** Address-bar text when there's no public URL to show. */
  label?: string;
};

export const featured: Featured[] = [
  {
    title: 'Ontopo', tagline: 'Book a Table at Restaurants Around the World', scope: 'Frontend · Backend · QA',
    text: "One of the world's biggest table reservation platforms is powered by our team's ideas! Frontend, backend, QA: we've provided it all for a multitude of Ontopo's applications throughout their system.",
    site: 'https://ontopo.com/en/rs/belgrade', mockup: 'ontopo', tint: '#0f3d1c', via: { name: 'CodeIT', href: 'https://www.codeit.rs/' },
  },
  {
    title: 'Zirtue', tagline: 'Bill Pay Loans Powered by Friends & Family', scope: 'Fintech platform',
    text: 'A bill-pay lending platform where friends and family help each other pay bills on time, with no credit checks, no hidden fees and over 40,000 billers. Built together with Cinnamon.',
    site: 'https://www.zirtue.com/', mockup: 'zirtue', tint: '#0b3a8c', via: { name: 'Cinnamon', href: 'https://www.cinnamon.agency/' },
  },
  {
    title: 'Tennilytics', tagline: 'Experience Tennis Like The Pros', scope: 'Web app · Mobile app · Website',
    text: "A state-of-the-art AI solution that takes your tennis analytics to the next level. And we've been there for the whole ride, creating the web app, the website, and the mobile app!",
    site: 'https://www.tennilytics.com/', mockup: 'tennilytics', tint: '#2a3a12',
  },
  {
    title: 'SerbLink', tagline: 'Connecting Serbian Professionals!', scope: 'Full-stack platform',
    text: 'SerbLink is on a mission to connect the Serbian diaspora in a way that has never been achieved before. As their partner, we are helping them achieve that goal in any way we can, starting with the initial version of their platform.',
    site: 'https://serblink.org/', mockup: 'serblink', tint: '#0a2f8f',
  },
  {
    title: 'Super Stan', tagline: 'Find Your Dream Home!', scope: 'Web app · UI/UX',
    text: 'A family-owned agency, helping you find your dream home in Belgrade with just a few clicks. We implemented their web platform, while also helping them with their branding and digital marketing.',
    site: 'https://www.superstanbg.rs/', caseStudy: '/case-studies/super-stan', mockup: 'superstan', tint: '#6e1414',
  },
  {
    title: 'Synergy X', tagline: 'Tailor-Made Marketing Solution', scope: 'Web app · Marketing automation',
    text: 'Every marketing agency has its own workflow, and Synergy X automates it in a fully customizable way, taking the repetitive work out of preparing HTML5 creatives for whole campaigns.',
    href: '/products', mockup: 'synergyx', label: 'Synergy X', tint: '#1c2390', client: { name: 'AI Digital', href: 'https://www.aidigital.com/' },
  },
];

/** Where a featured card links: its case study, else the live site, else its fallback. */
export const featuredHref = (p: Featured) => p.caseStudy ?? p.site ?? p.href ?? '/case-studies';

/** Everything else: compact boxes on /case-studies. Links prefer an in-depth case study page. */
export type Project = { name: string; summary: string; logo?: string; href?: string };

export const moreProjects: Project[] = [
  { name: 'ContentPro AI', summary: 'An AI tool that writes conversion-focused product descriptions for e-commerce sellers and marketers.', logo: media('249b31_bc77c2e33f90423397c0360a58aa0330'), href: 'https://contentpro.cc/' },
  { name: 'Destilerija Gorska', summary: 'A premium Shopify e-shop for a Serbian craft distillery.', logo: media('249b31_92f87cad537d4d2aaa4f18164e6afff0'), href: '/case-studies/gorska' },
  { name: 'Investiva', summary: 'Implementation support for a smart-contract investment ecosystem.', logo: media('cce622_fa544ea2723645fdbefc45a7de4290de'), href: 'https://investiva-frontend-stqn2.ondigitalocean.app/' },
  { name: 'Elementals', summary: 'A full NFT collection platform, including the smart contract.', logo: media('cce622_c20fe23cc825497d8b88bee6d7ff9f37'), href: 'https://elementals-nft.com/' },
  { name: 'gderaditi.com', summary: 'Our in-house job board for the hospitality industry.', logo: media('249b31_0b88f10aff9243bb9061d5da90fb300c'), href: 'https://thezenithdigital.wixstudio.io/gderaditi' },
  { name: 'eFarma', summary: 'Brand, copy and web shop consultancy for a homemade food marketplace.', logo: media('cce622_248b2df272c045eabe035e8b1aaf1b33'), href: 'https://efarma.co.rs/' },
  { name: 'AK Kompresor', summary: 'A motorcycle-focused website for a Serbian vehicle marketplace.', logo: media('cce622_7e969dcc5b7642268c641dfb6d1f67d3'), href: 'https://motori.akkompresor.rs/' },
  { name: 'Saint Matthew Place', summary: 'A website for luxury seaside apartments in Montenegro, with Zenith Digital.', logo: media('249b31_fc6ec483e83b4cdf995bedffaefc5549'), href: 'https://www.saintmatthewplace.com/' },
  { name: 'Michael Forte', summary: 'A website showcasing luxury and performance vehicles, with Zenith Digital.', logo: media('249b31_87b68a3a5d474eaca4f804902aafb87b'), href: 'https://www.michaeldmforte.com/' },
  { name: 'Hamster Casino', summary: 'A landing page for a TON casino, designed and built in 36 hours.', logo: media('249b31_83a86115de9240928b0bdd6437982042'), href: 'https://www.hamstercasino.xyz/' },
  { name: '$CHEF CAT', summary: 'A website for a chef-themed memecoin.', logo: media('cce622_dc33e6cee92149b7bb5704c02b4b515c'), href: 'https://thezenithdigital.wixstudio.io/chefcoin' },
  { name: 'D&L Pedicure', summary: 'A website for a beauty salon in the Netherlands.', logo: media('249b31_b5a1cbacdb4f495799147ef887e46843'), href: 'https://denlpedicure.nl/' },
  { name: 'NotYou Brand', summary: 'An online shop for a US-based clothing brand.', logo: media('cce622_86c7036507c946aa8a1059eb8ba324a5'), href: 'https://notyoubrand.com/' },
  { name: 'Narcist', summary: 'The official logo and custom font for an urban fashion brand.', logo: media('cce622_cfefe3c60df34395a862aa59bb32b7fb') },
];
