import { data } from 'autoprefixer';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallApp from '../components/SmallApp';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="Home">
      <Head>
        <title>Bennovela Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-6xl mx-auto px-4 sm:px-8 mt-4">
        <section className="p-6">
          <h2 className="text-2xl pb-4">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map(({location, distance, img }) => (<SmallApp key={location} img={img} distance={distance} location={location}/>))}
          </div>
          {/* Pull data from server */}
        </section>
        <section className="p-6">
        <h2 className="text-2xl py-8">Live Anywhere</h2>
         <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({img, title}) => (<MediumCard img={img} title={title} key={img}/>))}
         </div>
        </section>
        <LargeCard 
        img="https://links.papareact.com/4cj" 
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb."
        buttonText="Get Inspired"/>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
  const cardsData =  await fetch('https://links.papareact.com/zp1').then((res) => res.json());
  return { props: {
    exploreData,
    cardsData
  }}
}