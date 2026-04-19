import { Button } from '../components/ui/Button';

export function Contact() {
  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Get in Touch</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Have a question about your order, sizing, a custom request, or a set you've been eyeing? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
            <h2 className="font-serif italic text-3xl mb-4">Email Us</h2>
            <p className="text-gray-500 mb-8 font-light leading-relaxed">For order inquiries and support.</p>
            <a href="mailto:Pressedpretty4@gmail.com" className="w-full">
              <Button className="w-full rounded-none py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Send an Email</Button>
            </a>
            <p className="mt-6 text-xs uppercase tracking-widest font-medium text-gray-400">Pressedpretty4@gmail.com</p>
          </div>

          <div className="bg-white p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
            <h2 className="font-serif italic text-3xl mb-4">Socials</h2>
            <p className="text-gray-500 mb-8 font-light leading-relaxed">Follow us for updates and inspiration.</p>
            <div className="flex flex-col gap-4 w-full">
              <a href="https://tiktok.com/@press.and.pretty6" target="_blank" rel="noreferrer" className="block w-full bg-transparent border border-gray-200 py-4 text-xs uppercase tracking-widest font-medium text-gray-600 hover:border-black hover:text-black transition-colors">
                TikTok: @press.and.pretty6
              </a>
              <a href="#" className="block w-full bg-transparent border border-gray-200 py-4 text-xs uppercase tracking-widest font-medium text-gray-600 hover:border-black hover:text-black transition-colors">
                Facebook: Pretty Pressed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
