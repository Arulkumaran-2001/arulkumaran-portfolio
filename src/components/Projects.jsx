import React, { useEffect } from 'react';
// Import the profile data we created below
import { projectsData } from '../data/projectData'; 


export default function Projects() {
    useEffect(() => {
        const handleSync = () => {
            if (window.innerWidth <= 767) return;
            syncRowHeights(".projects__slider", [
            ".project-card__title",
            ".project-card__description",
            ]);
        };

        const timeoutId = setTimeout(handleSync, 100);
        window.addEventListener("resize", handleSync);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleSync);
        };
    }, []);

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">Featured Projects</h2>
                    <p className="section__subtitle">
                        A showcase of my work demonstrating modern web development practices and user-centered design.
                    </p>
                </div>   
                
                <div className="projects__carousel">
                    <div className="projects__slider" id="projectsSlider">
                        {projectsData.map((project, index) => (
                            <div className="projects__slide" key={index}>
                                <article className="project-card glass-card">
                                    <div className="project-card__image">
                                        {project.icon}
                                    </div>
                                    <div className="project-card__content">
                                        {/* Status Badge Logic for Ongoing Projects */}
                                        <div style={{ marginBottom: '10px' }}>
                                            {project.isCompleted ? (
                                                <span className="badge badge--completed" style={{ background: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>Completed</span>
                                            ) : (
                                                <span className="badge badge--ongoing" style={{ background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>Ongoing</span>
                                            )}
                                        </div>

                                        <h3 className="project-card__title">{project.title}</h3>
                                        <p className="project-card__description">{project.description}</p>
                                        
                                        <div className="project-card__tech">
                                            {project.tech.map((item, i) => (
                                                <span key={i} className="project-card__tech-item">{item}</span>
                                            ))}
                                        </div>

                                        {/* Only show link if project is completed */}
                                        {project.isCompleted && project.link && (
                                            <a href={project.link} 
                                               target="_blank" 
                                               rel="noopener" 
                                               className="project-card__link">
                                                View Live
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15,3 21,3 21,9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}