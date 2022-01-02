import React from 'react'
import Button from '../../../../components/Button'
import Title from '../../../../components/Title'

const Contact = () => {
  return (
    <section id='contact' className="w-full mx-auto max-w-7xl  text-mint-cream p-10 font-poppins">
      <Title text="contact" />
      <form className="max-w-4xl mx-auto font-poppins">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sea-green">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="border border-sea-green text-gray-500 block w-full p-2 bg-rich-black focus:ring-mint-cream focus:border-mint-cream"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sea-green">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="border border-sea-green text-gray-500 block w-full p-2 bg-rich-black focus:ring-mint-cream focus:border-mint-cream"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sea-green">
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            className="border border-sea-green text-gray-500 block w-full p-2 bg-rich-black focus:ring-mint-cream focus:border-mint-cream"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <Button text="send message" link_external="#" />
      </form>
    </section>
  )
}

export default Contact
