import React from 'react'
import { profile } from '../data/profile'

export default function Experience() {
  return (
    <section className="experience section" id="experience">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Professional Experience</h2>
                        <p className="section__subtitle">
                            My journey in frontend development, building scalable solutions and leading projects.
                        </p>
                    </div>
                    
                    <div className="timeline">
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <h3 className="timeline__role">Senior UI Developer</h3>
                                <p className="timeline__company">VINSINFO • Chennai</p>
                                <p className="timeline__date">Jul 2025 - Present</p>
                                <p className="timeline__summary">
                                    Created custom WordPress templates, engineered reusable React components, 
                                    managed Shopify storefronts, and led Webflow projects—all with a focus on SEO and accessibility.
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <h3 className="timeline__role">UI Developer</h3>
                                <p className="timeline__company">VINSINFO • Chennai</p>
                                <p className="timeline__date">Apr 2024 - Jul 2025</p>
                                <p className="timeline__summary">
                                    Built WordPress templates with Elementor &amp; ACF, optimized SEO from 47% to 98%, 
                                    and developed PHP site audit dashboards.
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline__item">
                            <div className="timeline__marker"></div>
                            <div className="timeline__content">
                                <h3 className="timeline__role">Associate Software Developer</h3>
                                <p className="timeline__company">VINSINFO • Chennai</p>
                                <p className="timeline__date">Apr 2023 - Mar 2024</p>
                                <p className="timeline__summary">
                                    Supported BigCommerce theme customizations and accessible WordPress content portfolios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}