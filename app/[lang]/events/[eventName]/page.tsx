import { EventPageComponent, generateEventMetadata, validEvents } from '../../../components/events/Page'
import { languages } from '../../../i18n/settings'

export async function generateStaticParams() {
  const params = []
  for (const lang of languages) {
    for (const eventName of validEvents) {
      params.push({ lang, eventName })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; eventName: string }> }) {
  const { lang, eventName } = await params;
  return await generateEventMetadata(lang, eventName);
}

export default async function LangEventPage({ params }: { params: Promise<{ lang: string; eventName: string }> }) {
  const { lang, eventName } = await params;
  return <EventPageComponent lang={lang} eventName={eventName} />;
} 
