import React from 'react';
import { Code2, Library, PenTool as Tool, Database, Cpu,Server,Cloud, Container,FileJson, Flame, Boxes } from 'lucide-react';
import './Skills.css';
 
const SkillCard = ({ title, icon: Icon, skills, gradientClass }) => {
  const leftSkills = skills.filter(skill => skill.column === "left");
  const rightSkills = skills.filter(skill => skill.column === "right");
  

  return (
    <div className={`skill__card relative bg-black/40 backdrop-blur-sm rounded-xl p-6 transition-all hover:scale-105 hover:shadow-xl ${gradientClass}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-10" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-black/50">
            <Icon className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <div className="skill__content grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftSkills.map((skill, index) => (
              <div
                key={`left-${index}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className={`p-1.5 rounded-md ${skill.bgColor} group-hover:scale-110 transition-transform`}>
                  {skill.icon && <skill.icon className={`w-4 h-4 ${skill.iconColor}`} />}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-4">
            {rightSkills.map((skill, index) => (
              <div
                key={`right-${index}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className={`p-1.5 rounded-md ${skill.bgColor} group-hover:scale-110 transition-transform`}>
                  {skill.icon && <skill.icon className={`w-4 h-4 ${skill.iconColor}`} />}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradientClass: "hover:shadow-purple-500/20",
    skills: [
      { name: "C", icon: Code2, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "left" },
      { name: "C++", icon: Code2, bgColor: "bg-cyan-500/20", iconColor: "text-cyan-400", column: "left" },
      { name: "JavaScript", icon: FileJson, bgColor: "bg-yellow-500/20", iconColor: "text-yellow-400", column: "left" },
      { name: "TypeScript", icon: FileJson, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "right" },
      { name: "Python", icon: Code2, bgColor: "bg-green-500/20", iconColor: "text-green-400", column: "right" }
    ]
  },
  {
    title: "Lib/Frameworks",
    icon: Library,
    gradientClass: "hover:shadow-blue-500/20",
    skills: [
      { name: "React", icon: Flame, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "left" },
      { name: "ReactNative", icon: Flame, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "left" },
      { name: "Next.js", icon: Boxes, bgColor: "bg-gray-500/20", iconColor: "text-gray-400", column: "left" },
      { name: "TailwindCSS", icon: Tool, bgColor: "bg-cyan-500/20", iconColor: "text-cyan-400", column: "right" },
      { name: "Express.js", icon: Server, bgColor: "bg-orange-500/20", iconColor: "text-orange-400", column: "right" },
      { name: "Node.js", icon: Server, bgColor: "bg-orange-500/20", iconColor: "text-orange-400", column: "right" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradientClass: "hover:shadow-green-500/20",
    skills: [
      { name: "MySQL", icon: Database, bgColor: "bg-green-500/20", iconColor: "text-green-400", column: "left" },
      { name: "Appwrite", icon: Database, bgColor: "bg-gray-500/20", iconColor: "text-gray-400", column: "left" },
      { name: "MongoDB", icon: Database, bgColor: "bg-green-500/20", iconColor: "text-green-400", column: "right" },
      { name: "Redux", icon: Database, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "right" },
      { name: "Firebase", icon: Flame, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "right" }
    ]
  },
  {
    title: "AI ML & DevOps",
    icon: Cpu,
    gradientClass: "hover:shadow-red-500/20",
    skills: [
      { name: "Pandas", icon: Database, bgColor: "bg-purple-500/20", iconColor: "text-purple-400", column: "left" },
      { name: "NumPy", icon: Cpu, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "left" },
      { name: "PyTorch", icon: Flame, bgColor: "bg-orange-500/20", iconColor: "text-orange-400", column: "right" },
      { name: "Scikit-learn", icon: Cpu, bgColor: "bg-green-500/20", iconColor: "text-green-400", column: "right" },
      { name: "AWS", icon: Cloud, bgColor: "bg-yellow-500/20", iconColor: "text-yellow-400", column: "right" },
      { name: "Docker", icon: Container, bgColor: "bg-blue-500/20", iconColor: "text-blue-400", column: "right" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__container">
        <h1 className="shine skills__title">My Skills</h1>
        <div className="skill__grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              gradientClass={category.gradientClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;