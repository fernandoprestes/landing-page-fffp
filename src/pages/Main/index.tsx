import About from './Sections/About'
import Contact from './Sections/Contact'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'

export const Main = () => {
  return (
    <main className="mx-auto">
      <Hero />
      <About />
      <Projects /> 
      <Contact /> 
    </main>
  )
}
