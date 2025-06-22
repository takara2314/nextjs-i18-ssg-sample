import { FooPageComponent, generateFooMetadata } from '../../components/foo/Page'
import { languages } from '../../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lang: lng }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return await generateFooMetadata(lang);
}

export default async function LangFooPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <FooPageComponent lang={lang} />;
} 
