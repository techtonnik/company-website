import { media } from './site';

// In-house products. Each card offers a demo by email, or a direct link where one exists.
export type Product = {
  name: string;
  tagline: string;
  text: string;
  /** Short platform / type labels shown as tags. */
  tags: string[];
  logo?: string;
  /** Wordmark logos render wider than square icons. */
  wordmark?: boolean;
  link?: { label: string; href: string };
};

export const featuredProduct = {
  name: 'Synergy X',
  tagline: 'Tailor-made marketing automation',
  text: "Every marketing agency has its own workflow, and Synergy X automates it in a fully customizable way. Built for AI Digital, it takes the repetitive work out of preparing HTML5 creatives, like adding click tags in bulk across a whole campaign.",
  tags: ['Web app', 'Automation', 'Built for AI Digital'],
  logo: media('cce622_eb2099f37a7e4995a3ce0af674376641'),
};

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
    logo: media('cce622_dd2e9f3eed2b4b029cd8bcd5ebcc8b62'),
    wordmark: true,
  },
  {
    name: 'Agroinvest',
    tagline: 'Agriculture + data',
    text: 'Uses open data to analyze and predict trends in the agricultural sector, helping people make better investment decisions in agriculture.',
    tags: ['Web app', 'Open data'],
    logo: media('249b31_4024e742865a44158936a383472bea39'),
  },
];
