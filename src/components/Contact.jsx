import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage({ type: '', text: '' });

    emailjs.sendForm(
      'service_ihg6ull',     // Your Service ID
      'template_1abe1hr',    // Your Template ID
      formRef.current,
      'Dm3OVd0Mpu8GIh0Th'    // Your Public Key
    )
    .then((result) => {
      setMessage({ type: 'success', text: 'Message sent successfully!' });
      formRef.current.reset();
      setIsSending(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    })
    .catch((error) => {
      console.log('Error:', error);
      setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
      setIsSending(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-start pt-16 pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-20">
        <div className="space-y-4 mb-12">
          <span className="text-white/40 text-xs tracking-[0.3em]">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Let's create
            <span className="block gradient-text">something great</span>
          </h2>
        </div>

        {message.text && (
          <div className={`mb-8 p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
          }`}>
            {message.text}
          </div>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wide">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition placeholder:text-white/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wide">Interested in</label>
              <select 
                name="interest"
                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition text-white/60"
              >
                <option className="bg-black">Web Design</option>
                <option className="bg-black">Development</option>
                <option className="bg-black">UI/UX</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-white/60 text-sm tracking-wide">Budget</label>
              <select 
                name="budget"
                className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition text-white/60"
              >
                <option className="bg-black">$500 - $1000</option>
                <option className="bg-black">$1000 - $5000</option>
                <option className="bg-black">$5000+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-sm tracking-wide">Project details</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Tell me about your idea..."
              className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition resize-none placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-6">
            <p className="text-white/60">
              <span className="text-white">say hello</span> —{" "}
              <a
                href="mailto:rishitthakur147@gmail.com"
                className="text-white/80 hover:text-white transition border-b border-white/20 hover:border-white pb-1"
              >
                rishitthakur147@gmail.com
              </a>
            </p>

            <button 
              type="submit"
              disabled={isSending}
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-black font-light tracking-widest text-sm hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}