import Image from "next/image";
import { getT } from '../i18n'

export async function generateMetadata() {
  const { t } = await getT('ja', 'foo')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function FooPage() {
  const { t } = await getT('ja', 'foo')

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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
          >
            {t('back-to-home')}
          </a>
        </div>
      </main>
    </div>
  );
} 
