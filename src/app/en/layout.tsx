import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'NAFAS Bajakimia Sdn Bhd — From Farmers for Farmers', template: '%s | NAFAS Bajakimia' },
  description: "NAFAS Bajakimia Sdn Bhd has supported Malaysia's fertilizer supply chain since 1974 through importing, packaging, warehousing and distribution.",
  openGraph: { type: 'website', locale: 'en_MY', siteName: 'NAFAS Bajakimia Sdn Bhd' },
};
export default function EnglishLayout({ children }: { children: React.ReactNode }) { return children; }
