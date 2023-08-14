import { TbBrandAirbnb } from "react-icons/tb";
import { GrGoogle } from "react-icons/gr";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMicrosoft,
  BsTwitter,
} from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { SiMailchimp } from "react-icons/si";
import { AiFillFacebook } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { HiServer } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { ImUsers } from "react-icons/im";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Company",
    href: "#",
  },
  {
    name: "Marketplace",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Team",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];
export const downloadLink = "/";
export const HeroParagraph =
  "This page was built by Alrian for his portfolio to showcase his skills. This is made using TailwindCss and React.Js and it has a decent folder structure along with neatly written code. ";
export const sponsers = [
  {
    icon: <TbBrandAirbnb />,
    name: "AirBnB",
  },
  {
    icon: <GrGoogle />,
    name: "Google",
  },
  {
    icon: <BsMicrosoft />,
    name: "Microsoft",
  },
  {
    icon: <FaSpotify />,
    name: "Spotify",
  },
  {
    icon: <SiMailchimp />,
    name: "MailChimp",
  },
  {
    icon: <AiFillFacebook />,
    name: "Facebook",
  },
];

export const firstFeatures = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management",
];
export const secondFeatures = [
  "Dynamic reports and dashboards",

  "Templates for everyone",

  " Development workflow",

  "Limitless business automation",

  "Knowledge management",
];

export const trustedCards = [
  {
    name: "99.99% uptime",
    description: "For Landwind, with zero maintenance downtime",
    icon: (
      <HiServer className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
    ),
  },
  {
    name: "600M+ Users",
    description: "Trusted by over 600 milion users around the world",
    icon: (
      <ImUsers className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
    ),
  },
  {
    name: "100+ countries",
    description: "Have used Landwind to create functional websites",
    icon: (
      <GiWorld className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
    ),
  },
  {
    name: "5+ Million",
    description: "Transactions per day",
    icon: (
      <IoMdCart className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
    ),
  },
];

// Pricing cards

export const starterPricing = [
  { name: "Individual configuration" },
  { name: "No setup, or hidden fees" },
  { name: "Team size: 1 developer" },
  { name: "Premium support: 6 months" },
  { name: "Free updates: 6 months" },
];
console.log(typeof starterPricing);
export const companyPricing = [
  { name: "Individual configuration" },
  { name: "No setup, or hidden fees" },
  { name: "Team size: 10 developers" },
  { name: "Premium support: 24 months" },
  { name: "Free updates: 24 months" },
];

export const enterprisePricing = [
  { name: "Individual configuration" },
  { name: "No setup, or hidden fees" },
  { name: "Team size: 100+ developers" },
  { name: "Premium support: 36 months" },
  { name: "Free updates: 36 months" },
];

export const footerLinks = [
  {
    name: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Brand Center", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    name: "HELP CENTER",
    links: [
      { name: "Discord Server", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    name: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Licensing", href: "#" },
      { name: "Terms and Conditions", href: "#" },
    ],
  },
  // {
  //   name: "COMPANY",
  //   links: [
  //     { name: "About", href: "#" },
  //     { name: "Careers", href: "#" },
  //     { name: "Brand Center", href: "#" },
  //     { name: "Blog", href: "#" },
  //   ],
  // },
  {
    name: "DOWNLOAD",
    links: [
      { name: "iOS", href: "#" },
      { name: "Android", href: "#" },
      { name: "Windows", href: "#" },
      { name: "MacOS", href: "#" },
    ],
  },
];

export const footerSocialIcons = [
  {
    href: "#",
    icon: <BsFacebook />,
  },
  {
    href: "#",
    icon: <BsInstagram />,
  },
  {
    href: "#",
    icon: <BsGithub />,
  },
  {
    href: "#",
    icon: <BsTwitter />,
  },
];
