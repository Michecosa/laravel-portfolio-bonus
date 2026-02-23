import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/storage/";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/projects');
        setProjects(response.data.data);
      } catch (error) {
        console.error("Errore durante il recupero dei progetti:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500";

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container py-lg-5 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-slate-900 mb-3">Featured Projects</h2>
            <div className="title-underline bg-cyan-500 mx-auto rounded-pill mb-4"></div>
            <p className="lead text-slate-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              creating exceptional web experiences
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {!loading ? (
              projects.map((project) => (
                <div className="col" key={project.id}>
                  <Link to={`/projects/${project.id}`} className="text-decoration-none">
                    <div className="project-card soft-transition w-100 h-100 bg-white rounded-4 overflow-hidden shadow-sm transition-all border border-light">
                      <div className="project-image-wrapper position-relative overflow-hidden">
                        <img 
                          src={project.cover_image 
                            ? (project.cover_image.startsWith('http') ? project.cover_image : `${BASE_URL}${project.cover_image}`)
                            : fallbackImage
                          } 
                          alt={project.title} 
                          className="project-img w-100 h-100 object-fit-cover"
                          style={{ minHeight: '200px' }}
                        />
                        
                        <div className="project-overlay d-flex align-items-end justify-content-center pb-4 gap-3">
                          <div className="btn-project-icon bg-transparent text-white border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15 3 21 3 21 9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 text-start">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="h5 fw-bold text-slate-900 mb-0 project-title-hover">
                            {project.title}
                          </h3>
                          {project.type && (
                            <span className="badge border text-purple-600 rounded-pill bg-light" style={{ fontSize: '0.75rem' }}>
                              {project.type.name}
                            </span>
                          )}
                        </div>
                        <p className="mb-0 small leading-relaxed text-dark">
                          {project.description?.length > 100 
                            ? `${project.description.substring(0, 100)}...` 
                            : project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center py-5" style={{margin:"auto"}}>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            
            {!loading && projects.length === 0 && (
              <div className="col-12 text-center py-5"  style={{margin:"auto"}}>
                <p className="text-muted">No projects found. Stay tuned!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;