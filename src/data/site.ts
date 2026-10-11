// All copy here is migrated verbatim from the original Wix site.

export const media = (id: string) => `/media/${id}~mv2.webp`;

export const site = {
  name: 'techtonnik',
  email: 'office@techtonnik.com',
  linkedin: 'https://www.linkedin.com/company/techtonnik',
  designrush: 'https://www.designrush.com/agency/profile/techtonnik',
  logo: media('cce622_ea84441fcf1247da9eac4313a3064abe'),
  logomark: media('cce622_db2c1869cd9141de94a9d96061c9aa34'),
};

export const nav = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Partners', href: '/partners' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
];

export const footerNav = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
];

export const heroVideos = {
  home: { src: '/video/cce622_991561308f464230a79fb71301dcab4d.mp4', poster: '/media/cce622_991561308f464230a79fb71301dcab4df000.webp' },
  space: { src: '/video/cce622_b6367446a64449748e842a7c8b9b722c.mp4', poster: '/media/cce622_b6367446a64449748e842a7c8b9b722cf000.webp' },
  cubes: { src: '/video/cce622_9e408010e86243acadc801d3ad7c4af6.mp4', poster: '/media/cce622_9e408010e86243acadc801d3ad7c4af6f000.webp' },
};

export const ctaBackgrounds = {
  satellite: media('11062b_05af555a8c084134b393dba73425531c'),
  earth: media('11062b_55ffd33105fc4f2ea63524829d3d728a'),
  orbit: media('11062b_16f8b794cfbc43dc87494b31ab54f26f'),
};

export const marqueeLogos = [
  { src: media('cce622_d8d970eba3ae41909ab54fb4ec111640'), alt: 'helixconnect' },
  { src: media('cce622_8155ce1bc57c46acaf2e87322f275800'), alt: 'Synergy X' },
  { src: media('cce622_5f2a594203974d259e6cffcd05de2aa4'), alt: 'CodeIT' },
  { src: media('cce622_dd2e9f3eed2b4b029cd8bcd5ebcc8b62'), alt: 'BCA Scheduler' },
  { src: media('cce622_86c7036507c946aa8a1059eb8ba324a5'), alt: 'Client logo' },
  { src: media('cce622_dc33e6cee92149b7bb5704c02b4b515c'), alt: '$CHEF' },
  { src: media('cce622_7e969dcc5b7642268c641dfb6d1f67d3'), alt: 'AK Kompresor' },
  { src: media('cce622_fa544ea2723645fdbefc45a7de4290de'), alt: 'Investiva' },
  { src: media('cce622_7c3107b808914f2ca4ed77641cbbb08b'), alt: 'SerbLink' },
  { src: media('cce622_ee251d33ba6f41d8bf796b7c2d59a5c0'), alt: 'CryptoBalance Pal' },
  { src: media('cce622_d8d3d49acf2948929c2db9dfd3bb728e'), alt: 'Zenith Digital' },
  { src: media('cce622_a76096ad3aec4ecfa9376d4f36d3e456'), alt: 'Super Stan' },
  { src: media('cce622_248b2df272c045eabe035e8b1aaf1b33'), alt: 'eFarma' },
  { src: media('cce622_cfefe3c60df34395a862aa59bb32b7fb'), alt: 'Narcist' },
  { src: media('249b31_8568ff1b8ab24a82aa2f3b6c44a5f164'), alt: 'kopirajter.rs' },
  { src: media('249b31_0b88f10aff9243bb9061d5da90fb300c'), alt: 'gderaditi.com' },
];

export const trustLogos = [
  { src: media('cce622_248b2df272c045eabe035e8b1aaf1b33'), alt: 'eFarma' },
  { src: media('cce622_d8d970eba3ae41909ab54fb4ec111640'), alt: 'helixconnect' },
  { src: media('cce622_fa544ea2723645fdbefc45a7de4290de'), alt: 'Investiva' },
  { src: media('cce622_7c3107b808914f2ca4ed77641cbbb08b'), alt: 'SerbLink' },
];

export const portfolio = [
  { title: 'Synergy X', tags: 'Desktop App Development, UI-UX Design', href: '/case-studies', img: media('249b31_bb12e09855f243fa907213dd857a74b7') },
  { title: 'Zenith Digital', tags: 'Partnership, No-Code Development, E-Commerce', href: 'https://thezenithdigital.com/', img: media('249b31_5a2a0a0664a44923a4d318a38d0a2f27') },
  { title: 'CryptoBalance Pal', tags: 'visionOS Application', href: 'https://apps.apple.com/us/app/cryptobalance-pal/id6478851606', img: media('249b31_9625bf8fb39b43e8a061292ee06ac366') },
  { title: 'SuperStan', tags: 'Web App Development, UI-UX Design, Digital Marketing', href: 'https://superstanbg.rs/', img: media('249b31_a21dc2de68544417afecd8be35600f32') },
  { title: 'Investiva', tags: 'Web App Development', href: 'https://investiva-frontend-stqn2.ondigitalocean.app/', img: media('249b31_319001355f29497e94dee43d20faa149') },
  { title: 'Elementals', tags: 'Web App Development, Blockchain Integration', href: 'https://elementals-nft.com/', img: media('249b31_04b576a16578498daf2c45c64e968206') },
  { title: 'eFarma', tags: 'Consultancy, Digital Marketing', href: 'https://efarma.co.rs/', img: media('249b31_9123a634167e496b976dc688c2909e97') },
  { title: '$CHEF', tags: 'UI-UX Design, Website Development', href: 'https://thezenithdigital.wixstudio.io/chefcoin', img: media('249b31_bf70062a486448ee85665d8034cb97a2') },
];

export const testimonials = [
  { name: 'Adrian Solomon', role: 'Director @ helixconnect Europe SRL', img: media('249b31_96bc6c69e96f4feeb7611a07f7f5ee35'), quote: 'A great team of professionals that are eager to meet all expectations. Very flexible, reliable and creative. I am extremely pleased with their work and would trust them for future projects.' },
  { name: 'Nikola Terzić', role: 'Co-Founder @ SerbLink', img: media('cce622_adec34ab63304650b90d822dc7f156de'), quote: 'We approached techtonnik with firm deadlines for our website. They are a fast pace and easy to work with team, with fluency in both Serbian and English. SerbLink will continue to leverage their expertise for our technical needs. I would highly recommend and gladly speak on their behalf!' },
  { name: 'Dušan Perez Fuentes', role: 'Co-Founder @ Narcist', img: media('cce622_d5e5d9a026fc4bee877b28b473e99d9d'), quote: 'Fantastic work with a competent team, we received comments to improve the idea, and the members of the team from techtonnik were always accessible! Overall, we are extremely pleased with our partnership, and it is without a doubt that we highly recommend these guys.' },
  { name: 'Petar Đorđević', role: 'Owner @ eFarma', img: media('cce622_79d24b4ede574429a15c9f94d663313d'), quote: 'I am incredibly impressed with the techtonnik team’s professionalism and creativity. They have gone above and beyond to ensure our brand reaches the highest standard. I would definitely recommend techtonnik to anyone looking for top-notch branding strategy services.' },
  { name: 'Petar Vico', role: 'CTO @ SerbLink', img: media('cce622_3dfa7005db6646588501f2f4650a0b13'), quote: 'I had the pleasure of working with the techtonnik team for a large full-stack project for SerbLink. This team amazed me with not only their quality of code, but efficiency and promptness to deadlines. I would highly recommend partnering with them in your endeavours for top-tier software development' },
  { name: 'Bojan Goretić', role: 'Founder @ Investiva', img: media('cce622_612994edd35f447c9b9e0c8ce6e5ecb3'), quote: 'Kudos to the techtonnik team for their exceptional work! Their efficiency ensured the job was done seamlessly. Their open communication and ability to adapt to changes mid-project were invaluable, making the collaboration a success.' },
  { name: 'Ivana Lešević', role: 'Marketing Manager @ Destilerija Gorska', img: media('249b31_791499c87a6e4b09b9cd9c12ac13e773'), quote: "It's all about style and efficiency for us. Gorska is no ordinary rakija, so we needed an extraordinary team. That team happens to be the techtonnik team." },
  { name: 'Luka Stojaković', role: 'Sales Manager @ Super Stan', img: media('249b31_a320e00430764a15a319627b762dc5b8'), quote: "The main part I'd like to highlight in our collaboration with techtonnik was the communication - always available, always reliable. My highest recommendations for Stevan and his team!" },
];

export const engagementModels = [
  { icon: 'team', title: 'Dedicated Team', text: 'A full-time team of professionals who work exclusively on your projects, offering ongoing collaboration and scalability' },
  { icon: 'calculator', title: 'Fixed Price', text: 'Covering your whole project for a predetermined amount, ensuring cost predictability and requiring well-defined requirements upfront' },
  { icon: 'calendar', title: 'Time and Material', text: "You'll pay for the actual time and resources spent on your project, providing flexibility for changing requirements" },
];

export const homeFaq = [
  { q: 'Where is techtonnik based at?', a: ['techtonnik is based in Serbia, with most of the members living in Belgrade, the country’s capital.'] },
  { q: 'How big is the techtonnik team?', a: ["The size of the techtonnik team varies due to constant improvements to our talent pool. Our primary focus is to consistently have top-tier professionals on board. Our commitment to quality means we're always on the lookout for exceptional talent to join us."] },
  {
    q: 'Which model of engagement is ideal for my project?',
    a: [
      "It's perfectly okay if you're unsure. Our team is dedicated to helping you make the right decision. Here are the options:",
      '**Fixed Price Model:** Ideal for smaller projects that can be well-defined in advance.',
      '**Time & Material Model:** Best for longer projects with evolving requirements.',
      '**Dedicated Team Model:** Suitable for ongoing projects where you need a full team working exclusively for you.',
      "We'll guide you through the decision-making process to find the perfect fit for your project.",
    ],
  },
  { q: 'How much will my project cost?', a: ["The cost of your project depends on its type, complexity, and deadline. While we have price ranges for different project types, each price is negotiated based on various factors. Reach out to us, and we'll provide a detailed estimate tailored to your project's specifics."] },
  { q: 'How long will it take for my project to be completed?', a: ['The timeline for completing your project depends on its type, complexity, and requirements. We provide an estimated timeframe after thoroughly understanding your project\'s scope. Rest assured, we aim to deliver quality results within a reasonable period. If your project requires long-term maintenance - we got you covered!'] },
];
