import { ReactNode } from 'react'

interface Props {
  href: string;
  children: ReactNode;
  target?: '_blank' | '_self';
  rel?: string;
  className?: string;
}

export function PrimaryBtn({
  href,
  children,
  target = '_self',
  rel,
  className = ''
}: Props) {
  const baseClasses = "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"

  return (
    <a
      className={`${baseClasses} ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
