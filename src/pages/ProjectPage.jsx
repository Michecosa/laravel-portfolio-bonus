import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
      .then(response => {
        setProject(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Errore:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container">Loading...</div>;
  if (!project) return <div className="container">Project Not Found.</div>;

  return (
    <div className="container">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        &larr; Back to List
      </Link>

      <div className="row">
        <div className="col-md-8">
          <h1>{project.title}</h1>
          <p className="badge text-bg-light">{project.type?.name}</p>
          
          <div className="mt-3">
            {project.technologies?.map(tech => (
              <span 
                key={tech.id} 
                className="badge me-2" 
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>

          <p className="mt-4 lead">{project.description}</p>
        </div>

        <div className="col-md-4">
          <img 
            src={project.cover_image} 
            alt={project.title} 
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}