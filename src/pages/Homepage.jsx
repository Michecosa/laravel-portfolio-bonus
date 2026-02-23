import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        setProjects(response.data.data);
      })
      .catch(error => {
        console.error("Errore durante il recupero:", error);
      });
  }

  useEffect(fetchProjects, []);

  return (
    <div className="container">
      <h1 className="mb-4">My Projects</h1>
      
      <div className="row g-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <Link to={`/projects/${project.id}`} className="text-decoration-none">
                <div className="card h-100">
                  <img
                    src={project.cover_image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-truncate flex-grow-1">{project.description}</p>
                    <span className="badge text-bg-primary">
                      {project.type?.name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}