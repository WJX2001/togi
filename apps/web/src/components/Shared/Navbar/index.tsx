import React from 'react'
import { Link } from 'react-router'
import {STATIC_IMAGES_URL} from '@togi/data/constants'
const Navbar = () => {
  return (
    <aside className="sticky top-5 mt-5 hidden w-10 shrink-0 flex-col items-center gap-y-5 md:flex">
      <Link to="/" onClick={() => console.log(111)}>
        {STATIC_IMAGES_URL}
      </Link>
    </aside>
  )
}

export default Navbar
