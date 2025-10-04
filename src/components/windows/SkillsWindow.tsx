interface Skill {
  category: string;
  items: string[];
}

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

interface SkillsWindowProps {
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}

export const SkillsWindow: React.FC<SkillsWindowProps> = ({ skills, experience, education }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-md border-2 border-[#0831D9]">
        <h2 className="text-2xl font-bold text-[#0831D9] mb-2">Skills & Experience</h2>
        <p className="text-gray-600">My technical expertise and professional journey</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#0831D9]">
        <h3 className="text-xl font-bold text-[#0831D9] mb-4">Technical Skills</h3>
        <div className="space-y-4">
          {skills.map((skillSet) => (
            <div key={skillSet.category}>
              <h4 className="font-bold text-gray-800 mb-2">{skillSet.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#ECE9D8] border-2 border-[#A0A0A0] rounded text-sm font-semibold text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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