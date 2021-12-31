import HelloGif from '../../images/hello.gif'
import HeroBanner from '../../images/hero-banner.svg'
import './styles.scss'

const Hero = () => {
  return (
    <main className="container mx-auto max-w-7xl flex items-center">
      <section className="w-full md:w-3/5 text-mint-cream p-10 ">
        <p className="text-2xl md:text-4xl lg:text-5xl">
          <img
            className="w-8 md:w-10 lg:w-12 inline mb-2"
            src={HelloGif}
            alt="hello"
          />{' '}
          hello, I'm
          <span className="text-6xl lg:text-8xl font-bold mb-2 inline-block w-full">
            Fernando
          </span>
          frontend developer<span className="text-sea-green font-bold">_</span>
        </p>

        <button className="px-4 py-2 w-52 mt-8 text-sea-green border border-sea-green">
          contact me
        </button>
      </section>

      <section className="hidden md:block w-3/5">
        <img src={HeroBanner} alt="banner" />
      </section>
    </main>
  )
}

export default Hero
