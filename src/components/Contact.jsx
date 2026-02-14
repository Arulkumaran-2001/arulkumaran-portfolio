import React from 'react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
                <section className="contact section" id="contact">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Get In Touch</h2>
                        <p className="section__subtitle">
                            Let's discuss your next project and how I can help bring your vision to life.
                        </p>
                    </div>
                    
                    <form className="contact-form glass-card" aria-label="Contact form">
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Full Name *</label>
                            <input type="text" 
                                   id="name" 
                                   name="name" 
                                   className="form__input" 
                                   required 
                                   aria-required="true"
                                   autoComplete="name"/>
                        </div>
                        
                        <div className="form__group">
                            <label htmlFor="email" className="form__label">Email Address *</label>
                            <input type="email" 
                                   id="email" 
                                   name="email" 
                                   className="form__input" 
                                   required 
                                   aria-required="true"
                                   autoComplete="email"/>
                        </div>
                        
                        <div className="form__group">
                            <label htmlFor="subject" className="form__label">Subject *</label>
                            <input type="text" 
                                   id="subject" 
                                   name="subject" 
                                   className="form__input" 
                                   required 
                                   aria-required="true"/>
                        </div>
                        
                        <div className="form__group">
                            <label htmlFor="message" className="form__label">Message *</label>
                            <textarea id="message" 
                                      name="message" 
                                      className="form__textarea" 
                                      required 
                                      aria-required="true"
                                      rows="5"
                                      placeholder="Tell me about your project..."></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn--primary form__submit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
  )
}