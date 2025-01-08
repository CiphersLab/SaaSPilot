import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${
    process.env.PORT ?? 3000
  }${path}`
}

export function constructMetadata({
  title = "SaaS Starter By Ciphers Lab - the SaaS Starter Pack",
  description = "SaaS Starter By Ciphers Lab is an open-source software to make chatting to your PDF files easy.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding"
    },
    icons,
    metadataBase: new URL('https://saas-starter-cipherslab.vercel.app'),
    // themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}

export const transformApplications = (applications: any[]) => {
  return applications.map((application: any) => ({
    label: application.name,
    icon: application?.icon ?? "LayoutGrid",
    href: `/dashboard/applications/${application.id}`,
    color: application?.color ?? "text-green-700",
    bgColor: application?.bgColor ?? "bg-green-700/10",
  }))
}