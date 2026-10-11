import { media } from './site';

export type Link = { label: string; href: string };
export type ShowcaseItem = {
  title: string;
  tagline: string;
  text: string;
  bg: string;
  logo?: string;
  shot?: string;
  links: Link[];
  comingSoon?: boolean;
};

const nsplsh = (id: string) => `/media/nsplsh_${id}~mv2.webp`;

// Order matches the live /case-studies page.
export const caseStudies: ShowcaseItem[] = [
  {
    title: 'ContentPro AI', tagline: 'Supercharge Your Content Writing!',
    text: 'ContentPro AI helps eCommerce sellers, creators, and marketers generate high-quality, conversion-focused descriptions—fast. No complex prompts. Just results that rank and convert.',
    bg: media('249b31_f6b59d60cf38449bb347cea83e7ccd20'), logo: media('249b31_bc77c2e33f90423397c0360a58aa0330'), shot: media('249b31_f57eed4d7bf44d5c9d946ede7e6b93ba'),
    links: [{ label: 'Visit Website', href: 'https://contentpro.cc/' }],
  },
  {
    title: 'Tennilytics', tagline: 'Experience Tennis Like The Pros',
    text: "A state-of-the-art AI solution that enchances your tennis analytics to the next level. And we've been there for the whole ride, creating the web app, the website, and the mobile app!",
    bg: media('249b31_1bc74ae48604434f994047f0f648ca38'), logo: media('249b31_24b5a16a63bb41a28b0d7b98dad0c572'), shot: media('249b31_2ccafe98aa15489986362c093efa2777'),
    links: [{ label: 'Visit Website', href: 'https://www.tennilytics.com/' }],
  },
  {
    title: 'Super Stan', tagline: 'Find Your Dream Home!',
    text: 'A family-owned agency, helping you find your dream home in Belgrade with just a few clicks. We implemented their web platform, while also helping them with their branding and digital marketing.',
    bg: nsplsh('9a749f3b37ef4996beb89888f456729b'), logo: media('cce622_a76096ad3aec4ecfa9376d4f36d3e456'), shot: media('249b31_82601226998b46869c6a9d840d83d718'),
    links: [{ label: 'View Case Study', href: '/case-studies/super-stan' }, { label: 'View Website', href: 'https://www.superstanbg.rs/' }],
  },
  {
    title: 'Ontopo', tagline: 'Book a Table at Restaurants Around the World',
    text: "One of the world's biggest table reservation platforms is powered by our team's ideas! Frontend, backend, QA - We've provided it all for a multitude of Ontopo's application throughout their system",
    bg: media('249b31_6b3f5b7b40ac49179fd15870e732c719'), logo: media('249b31_0cf371cfc56d465f80ca28688b426933'), shot: media('249b31_680f372063b04c529e1da032c8cf705c'),
    links: [{ label: 'View Their Website', href: 'https://ontopo.com/en/rs/belgrade' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/ontopo.srbija/?hl=en' }],
  },
  {
    title: 'Destilerija Gorska', tagline: 'A premium brandy deserves a premium e-shop!',
    text: "You haven't really been to Serbia if you haven't tasted rakija! And you haven't really tasted rakija until you have a taste of Gorska! Our job was creating a luxurious e-shop, representing the brand",
    bg: media('249b31_0943fa7ff2f4447ebc0a71c1f20e43ad'), logo: media('249b31_92f87cad537d4d2aaa4f18164e6afff0'), shot: media('249b31_5a598c7ccb4e443886990f95a467fb74'),
    links: [{ label: 'View Case Study', href: '/case-studies/gorska' }, { label: 'Visit Website', href: 'https://destilerija-gorska.myshopify.com/' }],
  },
  {
    title: '$CHEF CAT', tagline: 'One Memecoin to Rule Them All!',
    text: "What does a cat (that's also a chef) have to do with cryptocurrency? Find out by clicking the button below!",
    bg: media('cce622_cbbda7463536443d83771b2e7ffff8f7'), logo: media('cce622_dc33e6cee92149b7bb5704c02b4b515c'), shot: media('249b31_5ba05f504c2148e987dc583b8f913789'),
    links: [{ label: 'View Website', href: 'https://thezenithdigital.wixstudio.io/chefcoin' }, { label: 'Visit X Page', href: 'https://x.com/cheffcatsol' }],
  },
  {
    title: 'eFarma', tagline: 'Homemade Goods at your Doorstep!',
    text: 'Healthy food has no alternatives! eFarma reached out to us for consultancy services regarding their brand, copy, social media presence, web shop audit, and much more. They continued growing using our strategy starter pack!',
    bg: media('cce622_2e3f7ed97bef49029506443f3a0f8551'), logo: media('cce622_248b2df272c045eabe035e8b1aaf1b33'), shot: media('249b31_3db6d2bccb47474b83b9fdf3699b6884'),
    links: [{ label: 'View Website', href: 'https://efarma.co.rs/' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/efarma.co.rs' }],
  },
  {
    title: 'Saint Matthew Place', tagline: 'Get a Glimpse of Life at the Adriatic Sea',
    text: 'A dream home at the Adriatic Sea could be yours in just a few clicks. Together with our partners @ Zenith Digital, we brought this magnificent brand to the internet through their web site.',
    bg: media('249b31_fd0017163c30468e8b7c58ea8fe086a5'), logo: media('249b31_fc6ec483e83b4cdf995bedffaefc5549'), shot: media('249b31_feb98fd4b23f4181be517703f50c6e14'),
    links: [{ label: 'View Website', href: 'https://www.saintmatthewplace.com/' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/saintmatthewplace/' }],
  },
  {
    title: 'Investiva', tagline: 'A Secure Investment Ecosystem!',
    text: 'Investiva aims to revolutionize asset management through smart contract technology and blockchain transparency. It creates an investment ecosystem in the crypto world that is more secure and trustworthy. And our team helped with the implementation!',
    bg: media('249b31_d5ff5aef443f407b99d11bcb1c157307'), logo: media('cce622_fa544ea2723645fdbefc45a7de4290de'), shot: media('249b31_02258aba21dd4489bcbe4b662e199bb2'),
    links: [{ label: 'View Website', href: 'https://investiva-frontend-stqn2.ondigitalocean.app/' }],
  },
  {
    title: 'Michael Forte', tagline: 'Luxury & Performance Vehicle Specialist',
    text: "Together with our folks from Zenith Digital, we've successfully showcased the elegance, performance, and prestige of our clients' luxury car brands through a state-of-the-art website.",
    bg: media('249b31_c65c575dc54946a7b22c1eeae67d5552'), logo: media('249b31_87b68a3a5d474eaca4f804902aafb87b'), shot: media('249b31_8dc5633000f745a8ae3de5505d377aa1'),
    links: [{ label: 'View Website', href: 'https://www.michaeldmforte.com/' }],
  },
  {
    title: 'Elementals', tagline: 'Spiritual NFT Collection!',
    text: 'An enchanting collection of 256 unique NFTs, each representing one of the four elements—earth, fire, water, and air. The whole platform was built by our efforts, including the smart contract implementation.',
    bg: media('cce622_15c55c50d51c418e8300c64e36054515'), logo: media('cce622_c20fe23cc825497d8b88bee6d7ff9f37'), shot: media('249b31_f9b4419ad2b247c19c4a3c922e16bdd0'),
    links: [{ label: 'View Website', href: 'https://elementals-nft.com/' }],
  },
  {
    title: 'D&L Pedicure', tagline: 'Beauty in Every Step of the Way',
    text: 'Every business needs a website, and our goal to help all Dutch businesses achieve that goal started right here!',
    bg: media('249b31_d57b63c489e7497d989cd7703a5345d7'), logo: media('249b31_b5a1cbacdb4f495799147ef887e46843'), shot: media('249b31_0ab3b2f1fe1e483cb91c0579050ac503'),
    links: [{ label: 'View Website', href: 'https://denlpedicure.nl/' }],
  },
  {
    title: 'gderaditi.com', tagline: 'Find Your Dream Job in an Instant',
    text: 'Top-tier hospitality industry job ads, one click away from you. Our in-house project, so every part of it is our idea - the business plan, the branding, and the overall implementation!',
    bg: media('249b31_570779bb76d04ea495b40e74ec7328c6'), logo: media('249b31_0b88f10aff9243bb9061d5da90fb300c'), shot: media('249b31_76fd0083f9b3479596667846eb671e50'),
    links: [{ label: 'View Website', href: 'https://thezenithdigital.wixstudio.io/gderaditi' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/gderaditi/' }],
  },
  {
    title: 'SerbLink', tagline: 'Connecting Serbian Professionals!',
    text: 'SerbLink is on a missions to connect the Serbian diaspora in a way that has never been achieved before. As their partner, we are helping them achieve that goal in any way we can, starting with the initial version of their website.',
    bg: media('249b31_6291805b4de14cf1ae49943651059ddf'), logo: media('cce622_7c3107b808914f2ca4ed77641cbbb08b'), shot: media('249b31_a4e031acdd3d4b6488a88b3068fc8168'),
    links: [{ label: 'View Website', href: 'https://serblink.org/' }, { label: 'LinkedIn Page', href: 'https://www.linkedin.com/company/serblink/' }],
  },
  {
    title: 'Hamster Casino', tagline: 'The First and Only Casino on TON Network!',
    text: "Hamsters? In a Casino? We've helped this crypto project by designing and implementing their landing page in 36 hours!",
    bg: media('249b31_38500f0204e741aaba02259b37df0bdd'), logo: media('249b31_83a86115de9240928b0bdd6437982042'), shot: media('249b31_ea15404bb9444b52bc5d32ba09790124'),
    links: [{ label: 'View Website', href: 'https://www.hamstercasino.xyz/' }],
  },
  {
    title: 'Narcist', tagline: 'An Urban Fashion Brand!',
    text: "A globally trademarked fashion brand in the making. We are proud to be a part of it's visual presence, by creating the brand's official logo and font! More to come soon, so be on the lookout!",
    bg: media('249b31_ac8ca42404b14aa1ac8335caa1711825'), logo: media('cce622_cfefe3c60df34395a862aa59bb32b7fb'), shot: media('249b31_4aefbb035e7d451395dcec7365ccd62c'),
    links: [], comingSoon: true,
  },
  {
    title: 'AK Kompresor', tagline: 'Cars and Motorcycles Galore!',
    text: 'AK Kompresor is a well-known Serbian platform for buying and selling vehicles. Our role in their positioning as regional leaders was creating their motorcycle-centered website.',
    bg: nsplsh('989b61bc65cb421eb9da3878a1036b5c'), logo: media('cce622_7e969dcc5b7642268c641dfb6d1f67d3'), shot: media('249b31_a65713c65b454f4492dd6371d5db5793'),
    links: [{ label: 'View Website', href: 'https://motori.akkompresor.rs/' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/auto_kuca_kompresor/?hl=en' }],
  },
  {
    title: 'NotYou Brand', tagline: 'You Are Not Alone - Just Not The Same!',
    text: "A unique USA-based clothing brand, different than anything you've seen so far. Visit their shop, you won't regret it.",
    bg: media('cce622_6d7066beffcd49058aeece3112fa00d6'), shot: media('249b31_eb5d0134b83d471081b3fb2b1ab540c5'),
    links: [{ label: 'View Website', href: 'https://notyoubrand.com/' }, { label: 'Visit Instagram', href: 'https://www.instagram.com/notyou_brand/' }],
  },
];

export const products: ShowcaseItem[] = [
  {
    title: 'Synergy X', tagline: 'Tailor-Made Marketing Solution',
    text: 'Each marketing agency has their own workflow - and Synergy X is here to automate that flow in a fully customizable way.',
    bg: media('249b31_354143a285c242fd87d18c7a90fd4c79'), logo: media('cce622_eb2099f37a7e4995a3ce0af674376641'), shot: media('249b31_d1ff9b9b5f024e7899211949572d89ab'),
    links: [{ label: 'Schedule a Demo', href: '/contact' }],
  },
  {
    title: 'RESS Crawler', tagline: 'Perfect solution for real estate agencies!',
    text: 'An automated real estate data scraper that collects up-to-date property listings, prices, and key details from multiple sources to keep your website accurate, competitive, and insightful for users.',
    bg: media('249b31_cdd73b618e744e8ea34ee4e297b92f42'),
    links: [{ label: 'Schedule a Demo', href: '/contact' }],
  },
  {
    title: 'CryptoBalance Pal', tagline: 'The Spatial Computing Revolution!',
    text: 'A cutting-edge app created specifically for visionOS and the Apple Vision Pro, available now exclusively in the App Store.',
    bg: nsplsh('c6f6d3a084cf4018a1c4f6445dec1fb1'), logo: media('cce622_ee251d33ba6f41d8bf796b7c2d59a5c0'), shot: media('249b31_59efac78c74b4d64aaff0da2cea3781a'),
    links: [{ label: 'Visit App Store', href: 'https://apps.apple.com/us/app/cryptobalance-pal/id6478851606' }],
  },
  {
    title: 'BCA Scheduler', tagline: 'Your Ultimate Scheduling Solution!',
    text: 'Empower your business with the BCA Scheduler, a cutting-edge desktop application designed to revolutionize the way you organize and manage your complex schedules. Tailored for versatility, this intuitive app is your go-to tool for creating intricate schedules that align seamlessly with your unique business needs.',
    bg: media('249b31_78c73428e8ba41ba8fa196d5f528b1e4'), logo: media('cce622_dd2e9f3eed2b4b029cd8bcd5ebcc8b62'),
    links: [{ label: 'Schedule a Demo', href: '/contact' }],
  },
  {
    title: 'Agroinvest', tagline: 'Agriculture + Data!',
    text: 'A project that aims to use open data for analyzing and predicting trends in the agricultural sector, to allow users to make better investment decisions. It is intended for anyone who would like to get involved in agriculture and invest in it, as well as for those who already have a part of their portfolio in agriculture and would like to take it to the next level.',
    bg: nsplsh('e4976fbe9f394946ac09bf6241b84216'), logo: media('249b31_4024e742865a44158936a383472bea39'), shot: media('249b31_3e12b4fca73141ebb1e2dd4cc805a551'),
    links: [{ label: 'Schedule a Demo', href: '/contact' }],
  },
  {
    title: 'Project Shido', tagline: 'Enter the IT Industry with Ease!',
    text: "Being new in an industry is never easy. We help young up-and-coming developers by allowing them to work on real projects and learn from the experts. Reach out to us directly, and we'll find a way to collaborate with mutual benefits!",
    bg: media('cce622_fc3d9ab1c7c14be9a321cb961f8126c4'), logo: media('249b31_e8db752c69e74b448a5260c089af98ed'),
    links: [{ label: 'Schedule a Meeting!', href: '/contact' }],
  },
];

export type Partner = {
  logo: string;
  logoAlt: string;
  shot: string;
  title: string;
  text: string;
  links: Link[];
  quote: string;
  author: string;
  avatar: string;
};

export const partners: Partner[] = [
  {
    logo: media('cce622_5f2a594203974d259e6cffcd05de2aa4'), logoAlt: 'CodeIT', shot: media('249b31_beac4efa217340499cb0969fe45ce5eb'),
    title: 'A Partnership for the Ages',
    text: 'Our partnership with CodeIT is built on a foundation of shared vision and collaboration. As an established company, they have been helping us in numerous different ways throughout our journey so far.',
    links: [{ label: 'Visit Website', href: 'https://www.codeit.rs/' }, { label: 'Contact Them', href: 'https://www.codeit.rs/get-in-touch/' }],
    quote: '"Working with Techtonnik has been a seamless experience. Their expertise and dedication have played a key role in helping us achieve our goals."',
    author: 'Mihailo Milojević, CEO & Founder @ CodeIT', avatar: media('249b31_63aad0c2b7b3458db2c3c9a4b1a7f5dd'),
  },
  {
    logo: media('249b31_62a017c4d42a48f6a40ef533dac58401'), logoAlt: 'Zenith Digital', shot: media('249b31_6f37aace00e4469785dbfe6846afaacc'),
    title: 'Our Trusted Partner!',
    text: "Together with Techtonnik, Zenith Digital is creating phenomenal web presentations at a lightning quick pace. We've been sharing our knowledge and working on multiple projects in the past years, and will continue to do the same in the foreseeable future.",
    links: [{ label: 'Reach Your Zenith', href: 'https://www.thezenithdigital.com/' }, { label: 'Reviews', href: 'https://www.trustpilot.com/review/thezenithdigital.com' }],
    quote: '"Together, we have already achieved a lot, but I don\'t see us stopping any time soon!"',
    author: 'Pavle Maoduš, Founder @ Zenith Digital', avatar: media('cce622_168c64c0fed4474e948b454573a6cd8e'),
  },
  {
    logo: media('249b31_a9f5538c581c4e58945238c3409c8d85'), logoAlt: 'Genroks', shot: media('249b31_1162ca04dcd24929a6ded223e88c4c29'),
    title: 'Our Joint Venture into AI',
    text: 'Genroks generates complete ISO documentation and helps you implement it step-by-step — no expertise needed, no delays, just everything you need to become ISO compliant.',
    links: [{ label: 'Visit Website', href: 'https://genroks.com/' }, { label: 'Follow Them', href: 'https://www.linkedin.com/company/genroks/' }],
    quote: '"Techtonnik was with us from the very start, and we hope they\'ll be with us until the very end!"',
    author: 'Blažo Sokić, Co-Founder @ Genroks', avatar: media('249b31_8504000016f04f57a0bda164fc525c87'),
  },
  {
    logo: media('249b31_8568ff1b8ab24a82aa2f3b6c44a5f164'), logoAlt: 'kopirajter.rs', shot: media('249b31_68034dda186b450a97f5c265859ca0e1'),
    title: "Copy That's Out of This World!",
    text: 'We are an official partner agency of Danijel Milošević, one of the most respected copywriters and brand strategists in the Balkan region. With this unification of our portfolios, we are ready to offer comprehensive 360-degree IT services to clients worldwide.',
    links: [{ label: 'Upgrade Your Copy!', href: 'https://kopirajter.rs/cao-ja-sam-danijel/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danijelmilosevicdm/' }],
    quote: '"Partnerships like this are like tectonic plates colliding - powerful forces meeting, sometimes causing friction, but ultimately reshaping the landscape into something entirely new."',
    author: 'Danijel Milošević, Founder @ kopirajter.rs', avatar: media('249b31_95b53098a9c64e389f7dbb56000c2501'),
  },
  {
    logo: media('249b31_c1ea1c3a455e43ce8e1b55d7dd8bbbf9'), logoAlt: 'TrinitySmartIT', shot: media('249b31_3335e75997f24668bc21c94a7421eb70'),
    title: 'Joining Forces to Achieve Greatness!',
    text: 'Despite operating in the same industry, we see each other not as competitors but as partners with a shared vision: to provide world-class, on-demand software development services that exceed client expectations. By combining the strengths of our teams, we have achieved remarkable results, ensuring client satisfaction at every step.',
    links: [{ label: 'Visit Website', href: 'https://www.trinitysmartit.com/' }, { label: 'Contact Them', href: 'https://www.trinitysmartit.com/contact/' }],
    quote: '"Collaborating with Techtonnik has been an exceptional experience. Their team exemplifies professionalism, expertise, and a commitment to delivering high-quality solutions. I highly recommend Techtonnik as a trusted and innovative partner in the software development landscape."',
    author: 'Nemanja Sićević, CEO @ TrinitySmartIT', avatar: media('249b31_f6a4eada649c4a6ca7ae58ecd276542e'),
  },
  {
    logo: media('cce622_d8d970eba3ae41909ab54fb4ec111640'), logoAlt: 'helixconnect', shot: media('249b31_05eaa6afbf9d48bf93cae099cb8953f9'),
    title: 'Collaborating For A Better Future',
    text: 'Our partner is on a mission for a better hands-on approach to facilitating innovation, helping organizations grow and enabling a proper integration among innovators, NGOs, industry and government. We are there to ensure their projects have top notch digital presence!',
    links: [{ label: 'Visit Website', href: 'https://helix-connect.com/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/company/helixconnect-europe/' }],
    quote: 'A great team of professionals that are eager to meet all expectations. Very flexible, reliable and creative. I am extremely pleased with their work and would trust them for future projects.',
    author: 'Adrian Solomon, Director @ helixconnect Europe SRL', avatar: media('249b31_96bc6c69e96f4feeb7611a07f7f5ee35'),
  },
  {
    logo: media('249b31_43eee25ae5f046d89480397e89a886ab'), logoAlt: 'Tremium', shot: media('249b31_d88fa0c9584d424da1f2bda6745ad1e3'),
    title: 'Boldly Beyond Boundaries!',
    text: "We've partnered up with the heavyweights of the Serbian south with a mutual goal - providing top quality software for top quality clients, with a little bit of southern charm on top!",
    links: [{ label: 'Visit Website', href: 'https://tremium.net/' }, { label: 'Follow Them', href: 'https://www.instagram.com/tremium_software/' }],
    quote: '"An unexpected encounter has grown into a great collaboration. Techtonnik is a reliable team, and it’s always a pleasure to collaborate with them."',
    author: 'Dunja Stevanović, Business Partner & Technical Team Lead @ Tremium', avatar: media('249b31_cc3b5387d0594532865799602ea3046d'),
  },
];
