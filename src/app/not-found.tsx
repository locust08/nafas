import { ButtonLink } from '@/components/sites/nafas/shared/sections';
import { headers } from 'next/headers';
export default async function NotFound(){const english = (await headers()).get('x-nafas-locale') === 'en';return <section className="container empty-state article-page"><h1>{english ? 'Page not found' : 'Halaman tidak ditemui'}</h1><p>{english ? 'The page you are looking for is unavailable.' : 'Halaman yang anda cari tidak tersedia.'}</p><ButtonLink href={english ? '/en' : '/'}>{english ? 'Back to Home' : 'Kembali ke Utama'}</ButtonLink></section>}
