import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface AboutWindowProps {
  data: {
    personal: {
      fullname: string;
      title: string;
      bio: string;
      avatar: string;
      location: string;
      email: string;
    };
    social: {
      github: string;
      linkedin: string;
    };
  };
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={'images/' + data.personal.avatar}
            alt={data.personal.fullname}
            className="w-32 h-32 rounded-lg object-cover border-4 border-[#3A8CFF]"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0831D9] mb-1">{data.personal.fullname}</h2>
            <p className="text-lg text-gray-700 mb-3">{data.personal.title}</p>
            <p className="text-gray-600 leading-relaxed">{data.personal.bio}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Contact Information</h3>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Location:</span> {data.personal.location}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${data.personal.email}`} className="text-blue-600 hover:underline">
              {data.personal.email}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Connect With Me</h3>
        <div className="flex gap-4">
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
