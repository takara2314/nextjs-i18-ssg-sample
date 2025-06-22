import Image from "next/image";
import { getT } from '../../i18n'
import { PrimaryBtn } from '../buttons/PrimaryBtn'

interface Props {
  lang: string;
}

export async function FooPageComponent({ lang }: Props) {
  const { t } = await getT(lang, 'foo')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">{t('heading')}</h1>
        <p className="text-lg">{t('content')}</p>
        <p className="text-sm text-gray-600">Current language: {lang}</p>

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

export async function generateFooMetadata(lang: string) {
  const { t } = await getT(lang, 'foo')
  return {
    title: t('title'),
    description: t('description'),
  }
}
