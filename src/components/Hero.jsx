import React from 'react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
        <section className="hero section section--visible" id="hero" role="banner">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__avatar">
                        <img src="/src/assets/images/arul-profile.jpg" alt="Arulkumaran R - Senior UI Developer"/>
                    </div>
                    <h1 className="hero__title">Arulkumaran R</h1>
                    <p className="hero__subtitle">
                        <span className="typing-text" id="typingText">Senior UI Developer</span>
                        <span className="typing-cursor">|</span>
                    </p>
                    <p className="hero__description">
                        Passionate and detail-oriented Senior UI Developer with 3 years of experience 
                        specializing in accessible, SEO-optimized, and responsive web applications. 
                        Skilled in React.js, WordPress, Shopify, and designing high-performance user-centric solutions.
                    </p>
                    
                    <div className="hero__actions">
                        <a href="/src/assets/images/Arulkumaran_Rajaram.pdf" 
                            download="Arulkumaran_Rajaram.pdf" 
                            className="btn btn--primary"
                            aria-label="Download resume PDF">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7,10 12,15 17,10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download Resume
                        </a>
                        <a href="tel:+917639568734" className="btn btn--outline">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Call Me
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Get In Touch
                        </a>
                    </div>
                    
                    <div className="hero__contact">
                        <div className="hero__contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Chennai, Tamil Nadu, India
                        </div>
                        <div className="hero__contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:arulkumaranvp@gmail.com">arulkumaranvp@gmail.com</a>
                        </div>
                        <div className="hero__contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <a href="https://www.linkedin.com/in/arulkumaran-r" target="_blank" rel="noopener">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}