export type SiteConfig = {
  name: string
  nameShort: string
  description: string
  url: string
  email: string
  version: string
  ogImage: string
  links: {
    twitter: string
    twitterHandle: string
    github?: string
    discord: string
    linkedin: string
    youtube: string
  }
  author: {
    twitter: string
    github?: string
    linkedin?: string
    website?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "SaaS Pilot",
  nameShort: "SaaSPilot",
  description:"Why waste months on setup? SaaS Pilot offers a ready-to-use Next.js boilerplate.",
  url: "https://saas-pilot.vercel.app/",
  email: "info@cipherslab.com.com",
  ogImage: "/web-shot.png",
  version: "0.1.0",
  links: {
    twitter: "https://x.com/ciphersLab",
    // github: "https://github.com/ciphersLab",
    twitterHandle: "cipherslab",
    discord: "https://discord.gg/bZYcaGgY",
    linkedin: "https://www.linkedin.com/company/ciphers-lab",
    youtube: "https://www.youtube.com/@cipherslab",
  },
  author: {
    twitter: "https://x.com/ciphersLab",
    // github: "https://github.com/ciphersLab",
    linkedin: "https://www.linkedin.com/company/ciphers-lab/",
    website:"https://cipherslab.com/"
  },
}
