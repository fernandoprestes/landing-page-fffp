import './styles.scss'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiStyledcomponents,
  SiVite,
  SiVisualstudiocode,
  SiGit,
  SiJirasoftware
} from 'react-icons/si'
import Title from '../../../../components/Title'
import Card from '../../../../components/Card'
import Button from '../../../../components/Button'
import SubTitle from '../../../../components/SubTitle'

const Projects = () => {
  return (
    <>
      <div id="projects" className="mx-auto max-w-7xl">
        <section className="p-10 font-poppins">
          <Title text="projects" />
          <div className="flex flex-wrap md:justify-center lg:flex-nowrap gap-4 lg:justify-between xl:justify-center align-middle mb-8">
            <Card
              title="JavaScript Vanilla Project"
              title_github="/javascript-vanilla-project"
              content="Improve JavaScript skills by building 19 projects using simple JavaScript without frameworks. Course by FreeCodeCamp.org, where you were taught step-by-step how to build JavaScript projects."
              date="20/08/2021 - 09/09/2021"
              link_github="https://github.com/fernandoprestes/javascript-vanilla-project"
              link_external="https://modest-ride-e7012a.netlify.app/"
            />
            <Card
              title="Imersão dev Alura"
              title_github="/imersao-dev-alura"
              content="Building 8 projects using HTML, CSS and JavaScript. During the 'Imersão dev Alura - 2021'"
              date="13/09/2021 - 24/09/2021"
              link_github="https://github.com/fernandoprestes/imersao-dev-alura"
              link_external="https://github.com/fernandoprestes/imersao-dev-alura"
            />
            <Card
              title="Games in JavaScript"
              title_github="/games"
              content="Building 7 projects using JavaScript. Games made during DIO's Bootcamp courses."
              date="16/07/2021 - 19/09/2021"
              link_github="https://github.com/fernandoprestes/games"
              link_external="https://nervous-colden-171015.netlify.app/"
            />
          </div>
          <Button
            text="See more"
            link_external="https://github.com/fernandoprestes"
          />
        </section>
      </div>
      <div className="bg-gradient">
        <div className="max-w-7xl mx-auto pl-10">
          <SubTitle text="technologies" />
        </div>
        <div className="p-10 pt-0 md:max-w-full max-w-md mx-auto flex justify-center">
          <ul className="text-mint-cream flex flex-wrap align-middle justify-center">
            <li className="m-2">
              <SiHtml5 size={36} />
            </li>
            <li className="m-2">
              <SiCss3 size={36} />
            </li>
            <li className="m-2">
              <SiJavascript size={36} />
            </li>
            <li className="m-2">
              <SiTypescript size={36} />
            </li>
            <li className="m-2">
              <SiReact size={36} />
            </li>
            <li className="m-2">
              <SiTailwindcss size={36} />
            </li>
            <li className="m-2">
              <SiStyledcomponents size={36} />
            </li>
            <li className="m-2">
              <SiVite size={36} />
            </li>
            <li className="m-2">
              <SiVisualstudiocode size={36} />
            </li>
            <li className="m-2">
              <SiGit size={36} />
            </li>
            <li className="m-2">
              <SiJirasoftware size={36} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Projects
