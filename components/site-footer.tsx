
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl"

import Image from "next/image"
import Link from "next/link"

const footerNavs = [
  {
    label: "itemLabel1",
    items: [
      {
        href: "/pricing",
        name: "itemPrice",
      },
    ],
  },
  {
    label: "itemLabel2",
    items: [
      {
        href: "#",
        name: "itemDocs",
      },
      // {
      //   href: `${siteConfig.links.github}/issues`,
      //   name: "Feedback and Requests",
      // },
      // {
      //   href: `${siteConfig.links.github}/commits/main`,
      //   name: "Changelog",
      // },
    ],
  },
  {
    label: "itemLabel3",
    items: [
      {
        href: siteConfig.links.discord,
        name: "itemDiscord",
      },
      {
        href: siteConfig.links.twitter,
        name: "itemTwitter",
      },
      {
        href: `mailto:${siteConfig.email}`,
        name: "itemEmail",
      },
    ],
  },
  {
    label: "itemLabel4",
    items: [
      {
        href: "/terms",//terms
        name: "itemTerms",
      },

      {
        href: "/privacy",//privacy
        name: "itemPrivacy",
      },
    ],
  },
]

const footerSocials = [
  {
    href: siteConfig.links.discord,
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: siteConfig.links.twitter,
    name: "Twitter",
    icon: <Icons.twitter className="h-4 w-4" />,
  },
  {
    href: siteConfig.links.linkedin,
    name: "LinkedIn",
    icon: <Icons.linkedIn className="h-4 w-4" />,
  },
]

export function SiteFooter() {
  const t = useTranslations("SiteFooter");
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between p-4 py-16 sm:pb-24 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <Image fill alt="Logo" src="/logo.png" />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs">{t("siteDescription")}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold text-foreground uppercase dark:text-white">
                {t(nav.label)}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-400 hover:text-muted-foreground hover:opacity-90 duration-200"
                      >
                         {t(item.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between border-t py-4 gap-2">
          <div className="flex gap-2 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground dark:hover:text-muted-foreground"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-muted-foreground sm:text-center dark:text-gray-400">
            © {currentYear}
            {" - "}
            <Link href="/" className="cursor-pointer">
              {siteConfig.name}
            </Link>
            {t("copyRight")}
          </span>
        </div>
      </div>
    </footer>
  )
}
