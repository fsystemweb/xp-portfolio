import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactWindowProps {
  data: {
    email: string;
    location: string;
  };
}

export const ContactWindow: React.FC<ContactWindowProps> = ({ data }) => {
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
    </div>
  );
};
