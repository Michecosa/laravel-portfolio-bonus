import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12"/><path d="M2 20h20"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
        </svg>
      ),
      color: 'bg-blue-500',
      techs: ['React', 'Next.js', 'JavaScript', 'Bootstrap', 'Blade (Templating)']
    },
    {
      category: 'Backend',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
        </svg>
      ),
      color: 'bg-emerald-500',
      techs: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'REST APIs']
    },
    {
      category: 'Other Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      color: 'bg-orange-500',
      techs: ['Git & GitHub', 'Postman', 'Vite']
    }
  ];

  return (
    <section id="skills" className="py-5 mb-5 bg-body-tertiary">
      <div className="container py-lg-5 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-5 pb-4">
            <h2 className="display-5 fw-bold text-slate-900 mb-3 animate-fade-in">Skills & Tools</h2>
            <div className="title-underline mx-auto rounded-pill mb-4"></div>
            <p className="lead text-slate-600 max-w-2xl mx-auto animate-fade-in">
              A comprehensive toolkit of modern technologies and frameworks to
              build robust, scalable applications
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex align-items-stretch">
            {skillsData.map((skill, index) => (
              <div className="col d-flex" key={index}>
                <div className="skill-card soft-transition w-100 h-100 bg-white rounded-4 p-4 p-xl-5 shadow-sm transition-all d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className={`skill-icon-container ${skill.color} rounded-3 p-2 text-white d-flex align-items-center justify-content-center`}>
                      {skill.icon}
                    </div>
                    <h3 className="h4 fw-bold text-slate-900 mb-0">{skill.category}</h3>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="badge-tech px-3 py-2 rounded-3 text-slate-700 fw-medium bg-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;