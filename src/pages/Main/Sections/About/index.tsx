import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import SubTitle from '../../../../components/SubTitle'
import TextBold from '../../../../components/TextBold'
import Title from '../../../../components/Title'
import AboutBanner from '../../../../images/about-banner.svg'
import LogoAlura from '../../../../images/cursos/alura.svg'
import LogoDio from '../../../../images/cursos/dio.svg'
import LogoOrigamid from '../../../../images/cursos/origamid.svg'
import LogoRocketseat from '../../../../images/cursos/rocketseat.svg'
import LogoTraco from '../../../../images/cursos/traco.png'

const About = () => {
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl flex">
        <section className="w-full md:w-3/5 text-mint-cream p-10 pt-0 font-poppins">
          <Title text="about" />
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
      <div className="mx-auto max-w-7xl flex justify-center md:justify-start md:p-12 md:pt-24 p-12">
        <ul className="flex justify-center  space-x-8 font-poppins font-semibold">
          <li className="text-mint-cream flex flex-col items-center">
            <a
              href="https://github.com/fernandoprestes"
              target="_blank"
              className="hover:text-sea-green"
            >
              <AiFillGithub size={42} className="mx-auto mb-2" />
              /fernandoprestes
            </a>
          </li>

          <li className="text-mint-cream flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/fernandoprestes/"
              target="_blank"
              className="hover:text-sea-green"
            >
              <AiFillLinkedin size={42} className="mx-auto mb-2" />
              @fernandoprestes
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-gradient">
        <div className="max-w-7xl mx-auto pl-10">
          <SubTitle text="online courses" />
        </div>
        <div className="p-8 pb-0 pt-0 md:max-w-full max-w-md mx-auto flex justify-center">
          <ul className="flex flex-wrap align-middle justify-evenly md:justify-center gap-8 md:gap-1 md:space-x-16 mb-8">
            <li className="flex w-12 items-center">
              <a href="https://traco.dev.br/">
                <img src={LogoTraco} alt="logo traco " />
              </a>
            </li>
            <li className="flex w-18 items-center">
              <a href="https://www.alura.com.br/">
                <img src={LogoAlura} alt="logo alura" />
              </a>
            </li>
            <li className="flex w-36 items-center">
              <a href="https://www.rocketseat.com.br/">
                <img
                  src={LogoRocketseat}
                  alt="logo rocketseat"
                  className=" w-36"
                />
              </a>
            </li>
            <li className="flex w-24 items-center">
              <a href="https://www.origamid.com/">
                <img src={LogoOrigamid} alt="logo origamid" className="w-24" />
              </a>
            </li>
            <li className="flex w-24 items-center">
              <a href="https://web.dio.me/home">
                <img src={LogoDio} alt="logo DIO" className="w-24" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
