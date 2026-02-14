import React from 'react';
export default function Skills() {
  return (
    <section className="skills section" id="skills">
                    <div className="container">
                        <div className="section__header">
                            <h2 className="section__title">Technical Skills</h2>
                            <p className="section__subtitle">
                                Expertise in modern frontend technologies with a focus on accessibility, performance, and user experience.
                            </p>
                        </div>
                        
                        <div className="skills__grid">
                            <div className="skills__category glass-card">
                                <h3 className="skills__category-title">Frontend Development</h3>
                                <div className="skills__list">
                                    <span className="skills__item">HTML5</span>
                                    <span className="skills__item">CSS3</span>
                                    <span className="skills__item">SCSS</span>
                                    <span className="skills__item">JavaScript</span>
                                    <span className="skills__item">React.js</span>
                                    <span className="skills__item">Tailwind CSS</span>
                                    <span className="skills__item">jQuery</span>
                                    <span className="skills__item">SEO Audits</span>
                                    <span className="skills__item">Accessibility</span>
                                    <span className="skills__item">OOCSS</span>
                                    <span className="skills__item">BEM</span>
                                    <span className="skills__item">Semantic HTML5</span>
                                    <span className="skills__item">Responsive Design</span>
                                </div>
                            </div>
                            
                            <div className="skills__category glass-card">
                                <h3 className="skills__category-title">Backend &amp; Tools</h3>
                                <div className="skills__list">
                                    <span className="skills__item">PHP</span>
                                    <span className="skills__item">Shopify Liquid</span>
                                    <span className="skills__item">Webflow</span>
                                    <span className="skills__item">SQL (basic)</span>
                                    <span className="skills__item">WordPress</span>
                                    <span className="skills__item">Elementor</span>
                                    <span className="skills__item">cPanel</span>
                                    <span className="skills__item">SonarQube</span>
                                    <span className="skills__item">NVDA</span>
                                    <span className="skills__item">WAVE</span>
                                    <span className="skills__item">Git</span>
                                    <span className="skills__item">GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}