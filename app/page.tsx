import { Hero } from './components/home/Hero'
import { WhoWeAre } from './components/home/WhoWeAre'
import { ProductsAndServices } from './components/home/ProductsAndServices'
import { CallToAction } from './components/home/CallToAction'
import { Testimonials } from './components/home/Testimonials'
import { AsFeaturedIn } from './components/home/AsFeaturedIn'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <AsFeaturedIn />
      <ProductsAndServices />
      <CallToAction />
      <Testimonials />
    </>
  )
}
