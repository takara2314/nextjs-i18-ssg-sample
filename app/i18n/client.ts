'use client'

import i18next from './i18next'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fallbackLng } from './settings'

const runsOnServerSide = typeof window === 'undefined'

export function useT(ns?: string | string[], options?: any) {
  const params = useParams()
  const lng = Array.isArray(params?.lang) ? params.lang[0] : params?.lang || fallbackLng
  
  if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng)
  }

  const { t, i18n } = useTranslation(Array.isArray(ns) ? ns[0] : ns, options)

  useEffect(() => {
    if (!runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng)
    }
  }, [lng, i18n])

  return { t, i18n }
} 
