import Link from 'next/link'

export const ProductsAndServices = () => {
  return (
    <section
      id="section-products-and-services"
      className="border-t border-gray-2/30 pb-128 pt-48"
    >
      <header className="mb-48">
        <h2 className="w-1/2 text-44 leading-medium">
          WE ENHANCE THE BONDS BETWEEN PEOPLE THROUGH
          <br />
          <span className="font-zodiak-light">CURATED GIFTS</span>
        </h2>
      </header>
      <div className="grid h-[60.8rem] grid-cols-4 [&>a]:ring-2 [&>a]:ring-inset [&>a]:ring-almost-white">
        <Link href="#" className="bg-brown-3"></Link>
        <Link href="#" className="bg-brown-3"></Link>
        <Link href="#" className="bg-brown-3"></Link>
        <Link href="#" className="bg-brown-3"></Link>
        <Link href="#" className="col-span-2 bg-brown-3"></Link>
        <Link href="#" className="col-span-2 bg-brown-3"></Link>
      </div>
    </section>
  )
}
