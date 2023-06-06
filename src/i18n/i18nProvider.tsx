import {FC, ReactNode} from 'react'
import {useLang} from './Taiwindi18n'
import {IntlProvider} from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'
import '@formatjs/intl-relativetimeformat/locale-data/de'
import '@formatjs/intl-relativetimeformat/locale-data/es'
import '@formatjs/intl-relativetimeformat/locale-data/fr'
import '@formatjs/intl-relativetimeformat/locale-data/ja'
import '@formatjs/intl-relativetimeformat/locale-data/zh'

import enMessages from './messages/en.json'
import viMessages from './messages/vi.json'

const allMessages = {
  en: enMessages,
  vi: viMessages,
}

interface I18nProviderProps {
    children: ReactNode;
}

const I18nProvider: FC<I18nProviderProps>= ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}

export {I18nProvider}