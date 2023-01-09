import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../src/components/layout/mainLayout'
import '../styles/header.scss'
import '../styles/promotions.scss'
import '../styles/banner.scss'
import '../styles/womenBanner.scss'
import '../styles/dealOfWeek.scss'
import '../styles/menBanner.scss'
import '../styles/instagramPhoto.scss'
import '../styles/blog.scss'
import '../styles/benefitItems.scss'
import '../styles/partnersLogo.scss'
import '../styles/footer.scss'
import '../styles/shoppingcart.scss'
import '../styles/checkout.scss'
import '../styles/contact.scss'
import '../styles/faqs.scss'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
