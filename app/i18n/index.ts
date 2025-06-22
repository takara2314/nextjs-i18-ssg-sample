import i18next from './i18next'
import { fallbackLng } from './settings'

export async function getT(lang?: string, ns?: string | string[], options?: any) {
  const lng = lang || fallbackLng
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng)
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns)
  }
  return {
    t: i18next.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18next
  }
}
