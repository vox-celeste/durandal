import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "durandal.blog",
  description:
    "hallowed and devote",
  href: "https://astro.durandal.blog",
  author: "roland lennox",
  locale: "en-CA",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "posts",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
   newsletter: {
    label: "newsletter",
    href: "https://buttondown.com/voxceleste/archive/",
  },
  
  bluesky: {
    label: "bluesky",
    href: "https://bsky.app/profile/durandal.blog",
  },
  tumblr: {
    label: "tumblr",
    href: "https://voxceleste.tumblr.com",
  },
};
