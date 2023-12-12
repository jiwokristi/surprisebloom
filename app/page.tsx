import {
  AsFeaturedIn,
  CallToAction,
  Hero,
  ProductsAndServices,
  Testimonials,
  WhoWeAre,
} from '@/app/components/home'

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
