import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = () => {
  function toggleNavMobile() {
    document.querySelector('.nav-mobile')!.classList.toggle('invisible')
  }

  return (
    <header className="px-6 py-8">
      <div className="flex justify-between container mx-auto max-w-7xl">
        <h1 className="ml-4">Logo</h1>
        <nav className="w-full hidden md:block">
          <ul className="flex justify-center space-x-8 font-poppins font-semibold ">
            <li className="text-mint-cream">
              <a href="#" className="hover:text-sea-green">
                about
              </a>
            </li>
            <li className="text-mint-cream">
              <a href="#" className="hover:text-sea-green">
                projects
              </a>
            </li>
            <li className="text-mint-cream">
              <a href="#" className="hover:text-sea-green">
                contact
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-mobile md:hidden bg-mint-cream  w-3/4 rounded-xl py-8 px-6 absolute left-1/2 top-24 -translate-x-2/4">
          <ul className="flex flex-col space-y-8 font-poppins font-semibold ">
            <li className="text-sea-green mx-auto">
              <a href="#" className="hover:text-space-cadet">
                about
              </a>
            </li>
            <li className="text-sea-green mx-auto">
              <a href="#" className="hover:text-space-cadet">
                projects
              </a>
            </li>
            <li className="text-sea-green mx-auto">
              <a href="#" className="hover:text-space-cadet">
                contact
              </a>
            </li>
          </ul>
        </nav>

        <GiHamburgerMenu
          size={32}
          onClick={toggleNavMobile}
          className="text-mint-cream md:hidden cursor-pointer"
        />
      </div>
    </header>
  )
}
