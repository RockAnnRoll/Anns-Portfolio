import React, { useState, useEffect } from "react";


{/* GitHubAnn använder useState för att hålla koll på projektdata som hämtas från GitHub
och useEffect används för att faktiskt utföra hämtningen av datan från GitHub när komponenten laddas. 
Fetch används för att göra anrop till GitHub API, datan sparas i projects-statet med setProjects.
 Då kan komponenten uppdateras och visa den senaste informationen om projekten.*/}

function GitHubAnn() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/RockAnnRoll/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); 
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          {" "}
          <h2 className="project-name">{project.name}</h2>
          <p className="project-description">{project.description}</p>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Repo
          </a>
        </div>
      ))}
    </div>
  );
}

export default GitHubAnn;
