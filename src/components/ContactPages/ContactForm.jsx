export default function ContactForm({ onSubmit, sent }) {
  return (
    <div className="text-center">
      <h1 className="title pt-10 pb-7">Contact Us</h1>
      <p className="max-w-xl mx-auto text-[19px] bg-base-200 border-style p-3">
        Have questions, ideas, or want to join a trip? Send us a message and
        we'll get back to you soon!
      </p>
      <form className="max-w-xl mx-auto space-y-4 pt-5 m-10 border-style p-5 bg-base-200">
        <div>
          <label className="block text-left font-medium mb-2">Name:</label>
          <input
            type="text"
            id="name"
            className="border-style w-full px-3.5 py-3"
            required
          />
        </div>
        <div>
          <label className="block text-left mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="border-style w-full px-3.5 py-3"
            required
          />
        </div>
        <div>
          <label className="block text-left mb-2">Message:</label>
          <input
            type="text"
            id="message"
            className="border-style w-full px-3.5 py-3"
            required
          />
        </div>
        <button type="button" onClick={onSubmit} className="btn btn-outline">
          {sent ? "Mensagem Enviada!" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
