interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="px-4 py-2 w-52 mt-8 text-sea-green border border-sea-green hover:bg-sea-green hover:text-mint-cream">
      {text}
    </button>
  )
}
