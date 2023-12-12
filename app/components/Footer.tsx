import Link from 'next/link'

export const Footer = () => {
  return (
    <footer id="footer">
      {/* ----- Top Content/Heading ----- */}
      <div className="mx-auto max-w-[140rem] border-t border-gray-2/30 px-32 py-48">
        <h2 className="w-1/2 text-44 leading-medium">
          TOGETHER, LET&apos;S CREATE{' '}
          <span className="font-zodiak-light">LASTING MEMORIES</span>
        </h2>
      </div>

      {/* ----- Bottom Content ----- */}
      <div className="bg-green-1">
        {/* ----- Socials Grid ----- */}
        <div className="mb-128 grid h-[42.6rem] grid-cols-6">
          <Link href="#" className="col-span-2 row-span-2 bg-brown-3"></Link>
          <Link href="#" className="bg-brown-2"></Link>
          <Link href="#" className="col-span-2 row-span-2 bg-brown-3"></Link>
          <Link href="#" className="bg-brown-2"></Link>
          <Link href="#" className="bg-brown-1"></Link>
          <Link href="#" className="bg-brown-1"></Link>
        </div>

        {/* ----- Footer Navigation ----- */}
        <nav className="mx-auto mb-128 max-w-fit">
          <ul className="mb-32 flex list-none items-center justify-between">
            <li>
              <Link href="#" className="text-14">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="text-14">
                All Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-14">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-14">
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            id="logo-image"
            className="max-w-fit text-center font-zodiak text-98"
          >
            SURPRISE BLOOM
          </Link>
        </nav>

        {/* ----- Policies/Copyright ----- */}
        <div className="flex items-center justify-between border-t border-gray-2/30 px-32 py-24">
          <p className="text-12">
            &copy; <span>2023</span> Surprise Bloom | All rights reserved
          </p>
          <Link href="#" className="text-12">
            Privacy & Cookie policies
          </Link>
        </div>
      </div>
    </footer>
  )
}
