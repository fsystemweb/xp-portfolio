import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactWindowProps {
  data: {
    email: string;
    location: string;
  };
}

export const ContactWindow: React.FC<ContactWindowProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo form. In production, this would send your message!');
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#0831D9]">
        <h2 className="text-2xl font-bold text-[#0831D9] mb-2">Get In Touch</h2>
        <p className="text-gray-600">Feel free to reach out for collaborations or inquiries</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-[#3A8CFF]" size={20} />
            <a href={`mailto:${data.email}`} className="hover:underline">
              {data.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-[#3A8CFF]" size={20} />
            <span>{data.location}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border-2 border-[#A0A0A0] rounded focus:border-[#3A8CFF] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border-2 border-[#A0A0A0] rounded focus:border-[#3A8CFF] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2 border-2 border-[#A0A0A0] rounded focus:border-[#3A8CFF] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border-2 border-[#A0A0A0] rounded focus:border-[#3A8CFF] focus:outline-none h-32 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0831D9] hover:bg-[#0A40FF] text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};
