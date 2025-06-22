import Image from "next/image";
import { getT } from '../../i18n'
import { PrimaryBtn } from '../buttons/PrimaryBtn'
import { SecondaryBtn } from '../buttons/SecondaryBtn'

interface Props {
  lang: string;
}

export async function HomePageComponent({ lang }: Props) {
  const { t } = await getT(lang, 'home')

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
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            {t('get-started', { file: 'app/page.tsx' })}
          </li>
          <li className="tracking-[-.01em]">
            {t('save-changes', { language: lang })}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <PrimaryBtn
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            {t('deploy-now')}
          </PrimaryBtn>
          <SecondaryBtn
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[158px]"
          >
            {t('read-docs')}
          </SecondaryBtn>
          <SecondaryBtn
            href={lang === 'ja' ? '/foo' : `/${lang}/foo`}
          >
            {t('to-foo-page')}
          </SecondaryBtn>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <SecondaryBtn
            href={lang === 'ja' ? '/events/furry-convention' : `/${lang}/events/furry-convention`}
          >
            {t('to-furry-convention')}
          </SecondaryBtn>
          <SecondaryBtn
            href={lang === 'ja' ? '/events/art-contest' : `/${lang}/events/art-contest`}
          >
            {t('to-art-contest')}
          </SecondaryBtn>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {t('learn')}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {t('examples')}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {t('go-to-nextjs')}
        </a>
      </footer>
    </div>
  );
}

export async function generateHomeMetadata(lang: string) {
  const { t } = await getT(lang, 'home')
  return {
    title: t('title', { defaultValue: 'Home' }),
    description: t('description', { defaultValue: 'Welcome to our website' }),
  }
} 
