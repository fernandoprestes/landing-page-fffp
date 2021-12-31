interface TextBoldProps {
  text: string
}

export default function TextBold({ text }: TextBoldProps) {
  return <span className="text-sea-green font-bold">{text}</span>
}
