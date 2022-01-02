import TextBold from '../TextBold'

interface SubTitleProps {
  text: string
}

export default function SubTitle({ text }: SubTitleProps) {
  return (
    <h2 className="text-lg text-mint-cream md:text-2xl lg:text-4xl mb-6">
      {text}
      <TextBold text="_" />
    </h2>
  )
}
