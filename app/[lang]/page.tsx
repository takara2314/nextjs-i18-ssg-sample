import { HomePageComponent, generateHomeMetadata } from '../components/home/Page'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lang: lng }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return await generateHomeMetadata(lang);
}

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <HomePageComponent lang={lang} />;
} 
