import { Box } from '@mui/material';
import Head from 'next/head'
import Promotions from '../src/components/promotions/promotions';
import Banner from '../src/components/banner/banner';
import WomanBanner from '../src/components/womenBanner/womenBanner';
import DealOfWeek from '../src/components/dealOf Week/dealOf Week';
import MenBanner from '../src/components/menBanner/menBanner';
import InstagramPhoto from '../src/components/instagramPhoto/instagramPhoto';
import Blog from '../src/components/blog/blog';
import BenefitItems from '../src/components/benefitItems/benefitItems';
export default function Home() {

  return (
    <div>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <main style={{ backgroundColor: 'white' }} >
        <Promotions />
        <Banner />
        <WomanBanner />
        <DealOfWeek />
        <MenBanner />
        <InstagramPhoto />
        <Blog />
        <BenefitItems />
      </main>
    </div>
  )
}
