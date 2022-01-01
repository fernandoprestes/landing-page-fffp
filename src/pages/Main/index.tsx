import About from './Sections/About'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'

const Main = () => {
  return (
    <main className="mx-auto">
      <Hero />
      <About />
      <Projects /> 
      {/* 
        //TODO <Contact /> 
      */}
    </main>
  )
}

export default Main
