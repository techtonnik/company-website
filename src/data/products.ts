import { media } from './site';

// In-house products. Each card offers a demo by email, or a direct link where one exists.
export type Product = {
  name: string;
  tagline: string;
  text: string;
  /** Short platform / type labels shown as tags. */
  tags: string[];
  logo?: string;
  link?: { label: string; href: string };
  /** Replaces the default "Request a demo" email; `subject` is the email's subject prefix. */
  request?: { label: string; subject: string };
};

// Shown large, with a device mockup, above the grid.
export type FeaturedProduct = Omit<Product, 'link'> & {
  logo: string;
  mockup: { desktop: string; mobile?: string; label?: string; tint: string; tv?: boolean; art?: boolean; alt: string };
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'Synergy X',
    tagline: 'Tailor-made marketing automation',
    text: "Every marketing agency has its own workflow, and Synergy X automates it in a fully customizable way. Built for AI Digital, it takes the repetitive work out of preparing HTML5 creatives, like adding click tags in bulk across a whole campaign.",
    tags: ['Web app', 'Automation', 'Built for AI Digital'],
    logo: media('cce622_eb2099f37a7e4995a3ce0af674376641'),
    mockup: { desktop: '/mockups/synergyx-desktop.jpg', mobile: '/mockups/synergyx-mobile.jpg', label: 'Synergy X', tint: '#1c2390', alt: 'Synergy X app' },
  },
  {
    name: 'My Own Start',
    tagline: 'A calm start screen for Samsung TVs',
    text: 'Smart TVs open on rows of ads and apps nobody uses. My Own Start replaces that with what a household actually watches: their favourite apps as big tiles, the consoles and boxes plugged into the TV, special-day messages next to the date, and a slideshow of their own photos. Everything is set up on the TV, with the remote.',
    tags: ['Samsung TV', 'Tizen', 'Web app'],
    logo: '/media/product-my-own-start.png',
    mockup: { desktop: '/mockups/myownstart-tv.jpg', tint: '#3b1f4f', tv: true, alt: 'My Own Start on a TV' },
  },
  {
    name: 'Nightmare Hunter',
    tagline: 'An original horror platformer for the NES',
    text: 'Every night the town dreams, and every night something dreams back. A whip-wielding hunter fights through eight stages for the NES.',
    tags: ['NES game', '6502 assembly', 'PAL'],
    logo: '/media/product-nightmare-hunter.png',
    request: { label: 'Request the ROM', subject: 'ROM request' },
    mockup: { desktop: '/mockups/nightmarehunter-cart.jpg', tint: '#2a0f3d', art: true, alt: 'Nightmare Hunter cartridge' },
  },
];

export const products: Product[] = [
  {
    name: 'Casting a Dream',
    tagline: 'A native game launcher for macOS',
    text: 'One library for classic console games that opens each title in the right emulator, with play-time tracking and a custom trophy system read straight from save files.',
    tags: ['macOS app', 'Swift'],
    logo: '/media/product-casting-a-dream.svg',
  },
  {
    name: 'MultiClaude',
    tagline: 'Companion tools for Claude Code',
    text: 'Run Claude Code under multiple accounts with shared skills, and keep an eye on every account’s usage from the terminal or a desktop widget.',
    tags: ['macOS', 'CLI', 'Widget'],
    logo: '/media/product-multiclaude.svg',
  },
  {
    name: 'CryptoBalance Pal',
    tagline: 'Built for spatial computing',
    text: 'A crypto portfolio app made specifically for visionOS and the Apple Vision Pro.',
    tags: ['visionOS app'],
    logo: media('cce622_ee251d33ba6f41d8bf796b7c2d59a5c0'),
    link: { label: 'View on the App Store', href: 'https://apps.apple.com/us/app/cryptobalance-pal/id6478851606' },
  },
  {
    name: 'RESS Crawler',
    tagline: 'Real estate data, always up to date',
    text: 'An automated scraper that collects current property listings, prices and key details from multiple sources, keeping real estate websites accurate and competitive.',
    tags: ['Automation', 'Data'],
  },
  {
    name: 'BCA Scheduler',
    tagline: 'Scheduling for complex businesses',
    text: 'A desktop application for building and managing intricate schedules that fit the way a business actually works.',
    tags: ['Desktop app'],
    logo: '/media/product-bca-scheduler.png',
  },
  {
    name: 'Agroinvest',
    tagline: 'Agriculture + data',
    text: 'Uses open data to analyze and predict trends in the agricultural sector, helping people make better investment decisions in agriculture.',
    tags: ['Web app', 'Open data'],
    logo: media('249b31_4024e742865a44158936a383472bea39'),
  },
];
