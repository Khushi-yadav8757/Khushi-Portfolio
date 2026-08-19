import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Data Analyst Intern",
      company: "Labmentix Private Limited",
      period: "Sep 2025 - Oct 2025",
      location: "Remote",
      desc: [
        "Analyzed datasets using SQL queries and joins.",
        "Created KPI dashboards using Power BI.",
        "Worked on data analysis, visualization, and reporting."
      ]
    },
    {
      id: "02",
      role: "Power BI Intern",
      company: "Hunar Intern",
      period: "Jan 2026 - Feb 2026",
      location: "Remote",
      desc: [
        "Created interactive Power BI dashboards and reports.",
        "Worked with SQL and Excel for data cleaning and analysis.",
        "Developed KPI-based visualizations to present meaningful business insights."
      ]
    },
    {
      id: "03",
      role: "Data Analyst Intern",
      company: "Dhwaja Flare",
      period: "2026",
      location: "Remote",
      current: true,
      desc: [
        "Conducted market research and data collection.",
        "Analyzed campaign and business data.",
        "Assisted with content development and data-driven decision making.",
        "Collaborated with the team on digital marketing and analytics activities."
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section py-24 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="experience-timeline space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`experience-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline marker */}
              <div className={`experience-marker flex items-center justify-center w-10 h-10 rounded-full border bg-[#121212] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 ${exp.current ? 'experience-marker-current' : ''}`}>
                <Briefcase className="w-4 h-4 text-gray-400" />
              </div>
              
              {/* Content card */}
              <div className="experience-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-3">
                  <div>
                    <h3 className="experience-role font-bold text-white text-xl">{exp.role}</h3>
                    <div className="experience-company text-gray-300 font-medium mt-1">{exp.company}</div>
                  </div>
                  <span className="experience-period text-xs font-mono text-gray-300 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="experience-location text-gray-500 text-xs font-mono mb-4">{exp.location}</div>
                <ul className="experience-description text-gray-400 leading-relaxed font-sans text-sm list-disc pl-5 space-y-1">
                  {exp.desc.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
