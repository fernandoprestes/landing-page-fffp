interface ButtonProps {
  text: string
  link_external: string
}

export default function Button({ text, link_external }: ButtonProps) {
  return (
    <a
      href={link_external}
      target="_blank"
      className="px-4 py-2 w-52 cursor-pointer text-sea-green border border-sea-green hover:bg-sea-green hover:text-mint-cream"
    >
      {text}
    </a>
  )
}
