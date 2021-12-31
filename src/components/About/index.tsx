import AboutBanner from '../../images/about-banner.svg'
import TextBold from '../TextBold'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const About = () => {
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl flex">
        <section className="w-full md:w-3/5 text-mint-cream p-10 pt-0 font-poppins">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-10 md:mb-20">
            about
            <TextBold text="_" />
          </h2>
          <p>
            I create responsive websites that are easy to use and built with
            best practices. My main area of expertise is front-end development.
            I love writing frontend code!
          </p>
          <p className="mt-8">
            Interested in entire frontend world and working on ambitious
            projects with positive people, I focus my studies on{' '}
            <TextBold text="HTML" />, <TextBold text="CSS" /> and{' '}
            <TextBold text="JS" />
          </p>
        </section>
        <section className="hidden md:flex w-3/5 align-middle">
          <img src={AboutBanner} alt="" />
        </section>
      </div>
      <div className="mx-auto max-w-7xl flex justify-center md:p-24 p-12">
        <ul className="flex justify-center space-x-8 font-poppins font-semibold">
          <li className="text-mint-cream flex flex-col items-center">
            <a href="" className="hover:text-sea-green">
              <AiFillGithub size={42} className="mx-auto mb-2" />
              /fernandoprestes
            </a>
          </li>

          <li className="text-mint-cream flex flex-col items-center">
            <a href="" className="hover:text-sea-green">
              <AiFillLinkedin size={42} className="mx-auto mb-2" />
              @fernandoprestes
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default About
