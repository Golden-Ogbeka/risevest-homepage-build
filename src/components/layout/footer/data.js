import BrandLogo from '../../../assets/brand/logo-alt.svg';

export const mainFooterLinks = [
  { label: 'About Us', destination: '#' },
  { label: 'Careers', destination: '#' },
  { label: 'FAQs', destination: '#' },
  { label: 'Contact Info', destination: '#' },
  { label: 'Press', destination: '#' },
  { label: 'Rise Impact', destination: '#' },
];

export const exploreFooterLinks = [
  { label: 'Investment Club', destination: '#', external: true },
  { label: 'Blog', destination: '#', external: true },
];

export const productsFooterLinks = [
  { label: 'Rise App', destination: '#' },
  { label: 'Wallets', destination: '#' },
  { label: 'Asset Classes', destination: '#' },
];

export const contactFooterLinks = [
  { label: '0818 714 7405', destination: '#', external: true },
  { label: 'hello@rise.capital', destination: '#', external: true },
  { label: 'Newsletter', destination: '#', external: true },
  { label: 'Instagram', destination: '#', external: true },
  { label: 'Twitter', destination: '#', external: true },
];

export const sections = [
  {
    title: <img src={BrandLogo} alt='Rise Vest Logo' />,
    links: mainFooterLinks,
  },
  {
    title: <h2>Explore</h2>,
    links: exploreFooterLinks,
  },
  {
    title: <h2>Products</h2>,
    links: productsFooterLinks,
  },
  {
    title: <h2>Contact Us</h2>,
    links: contactFooterLinks,
  },
];
