import { media } from './site';

export type Link = { label: string; href: string };

export type Partner = {
  logo: string;
  logoAlt: string;
  /** Live-site mockup from public/mockups (see scripts/capture-mockups.mjs). */
  mockup: { name: string; url: string; tint: string };
  title: string;
  text: string;
  links: Link[];
  quote: string;
  author: string;
  avatar?: string;
  /** Testimonial not received yet: rendered visibly as a placeholder. */
  placeholder?: boolean;
};

// Development partners first, then collaborators.
export const partners: Partner[] = [
  {
    logo: media('cce622_5f2a594203974d259e6cffcd05de2aa4'), logoAlt: 'CodeIT', mockup: { name: 'codeit', url: 'https://www.codeit.rs/', tint: '#0a1f4d' },
    title: 'A Partnership for the Ages',
    text: 'Our partnership with CodeIT is built on a foundation of shared vision and collaboration. As an established company, they have been helping us in numerous different ways throughout our journey so far.',
    links: [{ label: 'Visit Website', href: 'https://www.codeit.rs/' }, { label: 'Contact Them', href: 'https://www.codeit.rs/get-in-touch/' }],
    quote: '"Working with Techtonnik has been a seamless experience. Their expertise and dedication have played a key role in helping us achieve our goals."',
    author: 'Mihailo Milojević, CEO & Founder @ CodeIT', avatar: media('249b31_63aad0c2b7b3458db2c3c9a4b1a7f5dd'),
  },
  {
    logo: '/media/partner-cinnamon.svg', logoAlt: 'Cinnamon',
    mockup: { name: 'cinnamon', url: 'https://www.cinnamon.agency/', tint: '#3b2a8f' },
    title: 'Design, Develop, Deploy!',
    text: 'Cinnamon is a one-stop shop to design, develop and deploy digital products, with AI-accelerated development at its core. Together, we are building Zirtue, the bill-pay lending platform powered by friends and family.',
    links: [{ label: 'Visit Website', href: 'https://www.cinnamon.agency/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cinnamon-llc' }],
    quote: 'Placeholder: a short testimonial from Cinnamon goes here.',
    author: 'Name Surname, Role @ Cinnamon', placeholder: true,
  },
  {
    logo: media('249b31_c1ea1c3a455e43ce8e1b55d7dd8bbbf9'), logoAlt: 'TrinitySmartIT', mockup: { name: 'trinity', url: 'https://www.trinitysmartit.com/', tint: '#1b3d6b' },
    title: 'Joining Forces to Achieve Greatness!',
    text: 'Despite operating in the same industry, we see each other not as competitors but as partners with a shared vision: to provide world-class, on-demand software development services that exceed client expectations. By combining the strengths of our teams, we have achieved remarkable results, ensuring client satisfaction at every step.',
    links: [{ label: 'Visit Website', href: 'https://www.trinitysmartit.com/' }, { label: 'Contact Them', href: 'https://www.trinitysmartit.com/contact/' }],
    quote: '"Collaborating with Techtonnik has been an exceptional experience. Their team exemplifies professionalism, expertise, and a commitment to delivering high-quality solutions. I highly recommend Techtonnik as a trusted and innovative partner in the software development landscape."',
    author: 'Nemanja Sićević, CEO @ TrinitySmartIT', avatar: media('249b31_f6a4eada649c4a6ca7ae58ecd276542e'),
  },
  {
    logo: media('249b31_43eee25ae5f046d89480397e89a886ab'), logoAlt: 'Tremium', mockup: { name: 'tremium', url: 'https://tremium.net/', tint: '#2a3f8a' },
    title: 'Boldly Beyond Boundaries!',
    text: "We've partnered up with the heavyweights of the Serbian south with a mutual goal - providing top quality software for top quality clients, with a little bit of southern charm on top!",
    links: [{ label: 'Visit Website', href: 'https://tremium.net/' }, { label: 'Follow Them', href: 'https://www.instagram.com/tremium_software/' }],
    quote: '"An unexpected encounter has grown into a great collaboration. Techtonnik is a reliable team, and it’s always a pleasure to collaborate with them."',
    author: 'Dunja Stevanović, Business Partner & Technical Team Lead @ Tremium', avatar: media('249b31_cc3b5387d0594532865799602ea3046d'),
  },
  {
    logo: media('249b31_62a017c4d42a48f6a40ef533dac58401'), logoAlt: 'Zenith Digital', mockup: { name: 'zenith', url: 'https://www.thezenithdigital.com/', tint: '#2b2f5e' },
    title: 'Our Trusted Partner!',
    text: "Together with Techtonnik, Zenith Digital is creating phenomenal web presentations at a lightning quick pace. We've been sharing our knowledge and working on multiple projects in the past years, and will continue to do the same in the foreseeable future.",
    links: [{ label: 'Reach Your Zenith', href: 'https://www.thezenithdigital.com/' }, { label: 'Reviews', href: 'https://www.trustpilot.com/review/thezenithdigital.com' }],
    quote: '"Together, we have already achieved a lot, but I don\'t see us stopping any time soon!"',
    author: 'Pavle Maoduš, Founder @ Zenith Digital', avatar: media('cce622_168c64c0fed4474e948b454573a6cd8e'),
  },
  {
    logo: media('249b31_a9f5538c581c4e58945238c3409c8d85'), logoAlt: 'Genroks', mockup: { name: 'genroks', url: 'https://genroks.com/', tint: '#1d3b6b' },
    title: 'Our Joint Venture into AI',
    text: 'Genroks generates complete ISO documentation and helps you implement it step-by-step — no expertise needed, no delays, just everything you need to become ISO compliant.',
    links: [{ label: 'Visit Website', href: 'https://genroks.com/' }, { label: 'Follow Them', href: 'https://www.linkedin.com/company/genroks/' }],
    quote: '"Techtonnik was with us from the very start, and we hope they\'ll be with us until the very end!"',
    author: 'Blažo Sokić, Co-Founder @ Genroks', avatar: media('249b31_8504000016f04f57a0bda164fc525c87'),
  },
  {
    logo: media('249b31_8568ff1b8ab24a82aa2f3b6c44a5f164'), logoAlt: 'kopirajter.rs', mockup: { name: 'kopirajter', url: 'https://kopirajter.rs/', tint: '#5a4a36' },
    title: "Copy That's Out of This World!",
    text: 'We are an official partner agency of Danijel Milošević, one of the most respected copywriters and brand strategists in the Balkan region. With this unification of our portfolios, we are ready to offer comprehensive 360-degree IT services to clients worldwide.',
    links: [{ label: 'Upgrade Your Copy!', href: 'https://kopirajter.rs/cao-ja-sam-danijel/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danijelmilosevicdm/' }],
    quote: '"Partnerships like this are like tectonic plates colliding - powerful forces meeting, sometimes causing friction, but ultimately reshaping the landscape into something entirely new."',
    author: 'Danijel Milošević, Founder @ kopirajter.rs', avatar: media('249b31_95b53098a9c64e389f7dbb56000c2501'),
  },
  {
    logo: media('cce622_d8d970eba3ae41909ab54fb4ec111640'), logoAlt: 'helixconnect', mockup: { name: 'helixconnect', url: 'https://helix-connect.com/', tint: '#1e5d8a' },
    title: 'Collaborating For A Better Future',
    text: 'Our partner is on a mission for a better hands-on approach to facilitating innovation, helping organizations grow and enabling a proper integration among innovators, NGOs, industry and government. We are there to ensure their projects have top notch digital presence!',
    links: [{ label: 'Visit Website', href: 'https://helix-connect.com/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/company/helixconnect-europe/' }],
    quote: 'A great team of professionals that are eager to meet all expectations. Very flexible, reliable and creative. I am extremely pleased with their work and would trust them for future projects.',
    author: 'Adrian Solomon, Director @ helixconnect Europe SRL', avatar: media('249b31_96bc6c69e96f4feeb7611a07f7f5ee35'),
  },
  {
    logo: '/media/partner-cognitika.png', logoAlt: 'Cognitika',
    mockup: { name: 'cognitika', url: 'https://cognitika.com/', tint: '#7a6a2a' },
    title: 'Learning Through Play',
    text: 'Cognitika is a non-profit studio from Serbia developing educational games, built with subject matter experts and tested with real learners, from extended reality all the way to tabletop.',
    links: [{ label: 'Visit Website', href: 'https://cognitika.com/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cognitika-play' }],
    quote: 'Placeholder: a short testimonial from Cognitika goes here.',
    author: 'Name Surname, Role @ Cognitika', placeholder: true,
  },
];
