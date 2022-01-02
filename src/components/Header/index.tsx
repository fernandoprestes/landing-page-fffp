import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from './../../images/logo.svg'

export const Header = () => {
  function toggleNavMobile() {
    document.querySelector('.nav-mobile')!.classList.toggle('invisible')
    document
      .querySelector('.nav-mobile-menu')!
      .classList.toggle('text-mint-cream')
    document.querySelector('.nav-mobile-menu')!.classList.toggle('fixed')
  }

  return (
    <header className="px-4 py-4 border border-b-sea-green">
      <div className="px-2 flex justify-between items-center container mx-auto max-w-7xl ">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="w-full hidden md:block">
          <ul className="flex justify-center space-x-8 font-poppins font-semibold ">
            <li className="text-mint-cream">
              <a href="#about" className="hover:text-sea-green">
                about
              </a>
            </li>
            <li className="text-mint-cream">
              <a href="#projects" className="hover:text-sea-green">
                projects
              </a>
            </li>
            <li className="text-mint-cream">
              <a href="#contact" className="hover:text-sea-green">
                contact
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-mobile md:hidden invisible bg-mint-cream w-full h-screen fixed right-0 top-0 flex justify-center place-items-center">
          <ul className="flex flex-col space-y-8 font-poppins font-semibold ">
            <li className="text-sea-green mx-auto">
              <a
                href="#about"
                className="hover:text-space-cadet"
                onClick={toggleNavMobile}
              >
                about
              </a>
            </li>
            <li className="text-sea-green mx-auto">
              <a
                href="#projects"
                className="hover:text-space-cadet"
                onClick={toggleNavMobile}
              >
                projects
              </a>
            </li>
            <li className="text-sea-green mx-auto">
              <a
                href="#contact"
                className="hover:text-space-cadet"
                onClick={toggleNavMobile}
              >
                contact
              </a>
            </li>
          </ul>
        </nav>

        <GiHamburgerMenu
          size={24}
          onClick={toggleNavMobile}
          className="nav-mobile-menu text-mint-cream md:hidden cursor-pointer z-10 right-6"
        />
      </div>
    </header>
  )
}
