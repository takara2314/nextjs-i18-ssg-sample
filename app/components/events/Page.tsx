import Image from "next/image";
import { getT } from '../../i18n'
import { notFound } from 'next/navigation'
import { PrimaryBtn } from '../buttons/PrimaryBtn'

export const validEvents = ['furry-convention', 'art-contest']

interface Props {
  lang: string;
  eventName: string;
}

export async function EventPageComponent({ lang, eventName }: Props) {
  if (!validEvents.includes(eventName)) {
    notFound()
  }

  const { t } = await getT(lang, 'events')
  const eventData = t(eventName, { returnObjects: true }) as any

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{eventData.name}</h1>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{t('event-details')}</h2>
            <div className="space-y-3">
              <div>
                <span className="font-medium">{t('date')}: </span>
                <span>{eventData.date}</span>
              </div>
              <div>
                <span className="font-medium">{t('location')}: </span>
                <span>{eventData.location}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg">{eventData.description}</p>
            <p className="text-gray-700 dark:text-gray-300">{eventData.details}</p>
          </div>

          {lang !== 'ja' && (
            <div className="text-sm text-gray-600">
              Current language: {lang}
            </div>
          )}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <PrimaryBtn
            href={lang === 'ja' ? '/' : `/${lang}`}
          >
            {t('back-to-home')}
          </PrimaryBtn>
        </div>
      </main>
    </div>
  );
}

export async function generateEventMetadata(lang: string, eventName: string) {
  if (!validEvents.includes(eventName)) {
    return {
      title: 'Event Not Found',
      description: 'The specified event was not found'
    }
  }

  const { t } = await getT(lang, 'events')
  const eventData = t(`${eventName}.name`, { returnObjects: true })

  return {
    title: t('title', { eventName: eventData }),
    description: t('description', { eventName: eventData }),
  }
}
