import { AiOutlineCalendar } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

interface CardProps {
  title: string
  title_github: string
  content: string
  date: string
  link_github: string
  link_external: string
}

const Card = ({
  title,
  title_github,
  content,
  date,
  link_github,
  link_external
}: CardProps) => {
  return (
    <section className="flex flex-col w-full md:w-9/12 overflow-hidden border border-sea-green justify-between">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-mint-cream mb-2">{title}</h2>
        <a href={link_github} target='_blank' className="text-sm text-mint-cream">
          {title_github}
        </a>
        <p className="text-sea-green mt-2">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex  justify-between">
        <div className="flex space-x-2">
          <AiOutlineCalendar size={20} className="text-sea-green" />
          <p className="text-sea-green">{date}</p>
        </div>
        <a href={link_external} target="_blank" className="cursor-pointer">
          <FiExternalLink
            size={24}
            className="text-mint-cream hover:text-sea-green"
          />
        </a>
      </div>
    </section>
  )
}

export default Card
