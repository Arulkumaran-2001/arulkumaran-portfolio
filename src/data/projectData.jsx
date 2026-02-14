import React from 'react';

export const projectsData = [
    {
        title: "Noms Shop",
        description: "Modern, performant e-commerce shop with HTML, custom cart functionality, product gallery, and fully responsive design.",
        tech: ["HTML", "E-commerce"],
        link: "https://new-website-gilt.vercel.app/",
        isCompleted: true,
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
            </svg>
        )
    },
    {
        title: "Smart Menu Frontend",
        description: "Interactive dynamic menu platform with advanced menu logic, accessibility features, and modern React implementation.",
        tech: ["TypeScript", "React", "Tailwind"],
        link: "https://github.com/Arulkumaran-2001/smart-menu-frontend",
        isCompleted: false, // Ongoing project: will show "Ongoing" badge and hide live link
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2ZM12 4.14L20 8.09V10C20 14.6 17.09 18.1 12 19.1C6.91 18.1 4 14.6 4 10V8.09L12 4.14Z"/>
                <path d="M9 12L11 14L15 10"/>
            </svg>
        )
    },
    {
        title: "Sample Layout Components",
        description: "Reusable React layout components library with modern design patterns and comprehensive documentation.",
        tech: ["React", "CSS3", "Components"],
        link: "https://github.com/Arulkumaran-2001/sample-layout-component-element",
        isCompleted: false,
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M7 10h10M10 13h4"/>
            </svg>
        )
    },
    {
        title: "Calculator",
        description: "Clean, accessible calculator application with comprehensive error handling and modern user interface design.",
        tech: ["HTML5", "JavaScript", "CSS3"],
        link: "https://github.com/Arulkumaran-2001/Calculator",
        isCompleted: true,
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <path d="M9 9h6v6H9V9z"/>
                <path d="M21 6H3M6 21V3M18 21V3M21 18H3"/>
            </svg>
        )
    }
];