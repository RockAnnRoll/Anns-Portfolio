import React, { useState, useEffect } from 'react';

function GitHubAnn() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/RockAnnRoll/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data); // Spara data i din state
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>GitHub Projects</h1>
      {projects.map(project => (
  <div key={project.id} className="project-item">  /*Klassnamn för varje repo*/
    <h2 className="project-name">{project.name}</h2>   //klassnman om du vill använda
    <p className="project-description">{project.description}</p>  //klassnamn om du vill använda
    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">Visit Repo</a>
  </div>
))}
    </div>
  );
}



export default GitHubAnn;