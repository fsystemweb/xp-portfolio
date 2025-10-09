interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface ExperienceWindowProps {
  experience: Experience[];
  education: Education[];
}

export const ExperienceWindow: React.FC<ExperienceWindowProps> = ({ experience, education }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#0831D9]">
        <h2 className="text-2xl font-bold text-[#0831D9] mb-2">Experience & Education</h2>
        <p className="text-gray-600">My professional and Academic journey</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Work Experience</h3>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-[#3A8CFF] pl-4">
              <h4 className="font-bold text-gray-800">{exp.position}</h4>
              <p className="text-[#0831D9] font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-600 mb-2">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Education</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-[#3A8CFF] pl-4">
              <h4 className="font-bold text-gray-800">{edu.degree}</h4>
              <p className="text-[#0831D9] font-semibold">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
