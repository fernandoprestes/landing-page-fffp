import { AiFillHeart } from 'react-icons/ai'

export function Footer() {
  return (
    <section>
      <div className="bg-gradient">
        <div className="max-w-7xl mx-auto p-12 md:p-24">
          <p className="text-center text-mint-cream">
            2022{' '}
            <a
              href="https://github.com/fernandoprestes"
              target="_blank"
              className="hover:text-sea-green"
            >
              @fernandoprestes
            </a>{' '}
            - developed with{' '}
            <AiFillHeart size={18} className="text-sea-green inline-block" />{' '}
            using{' '}
            <a href="https://pt-br.reactjs.org/" className="text-sea-green">
              reactjs
            </a>{' '}
            +{' '}
            <a href="https://vitejs.dev/" className="text-sea-green">
              vitejs
            </a>{' '}
            +{' '}
            <a href="https://tailwindcss.com/" className="text-sea-green">
              tailwindcss
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
