import { createContext, useContext } from 'react'
import { localize } from './routes'

const LanguageContext = createContext(null)

export function LanguageProvider({ content, children }) {
  return <LanguageContext.Provider value={content}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const content = useContext(LanguageContext)
  return { t: content, to: (path) => localize(content, path) }
}
