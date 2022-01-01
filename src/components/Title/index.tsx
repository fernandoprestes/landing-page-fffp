import TextBold from '../TextBold'

interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h2 className="text-2xl text-mint-cream md:text-4xl lg:text-5xl mb-10 md:mb-20">
      {text}
      <TextBold text="_" />
    </h2>
  )
}
