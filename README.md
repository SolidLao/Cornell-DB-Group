# Cornell Database Group Website

A modern, professional website for the Cornell Database Group, featuring research highlights, team members, publications, and projects.

## Features

- **Modern Design**: Gradient hero sections with Cornell red color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Collapsible publication sections by year
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Accessibility**: Keyboard navigation and ARIA labels

## Structure

```
Cornell-DB-Group/
├── index.html          # Main website file
├── static/
│   ├── css/
│   │   ├── bulma.min.css           # Bulma CSS framework
│   │   ├── fontawesome.all.min.css # Font Awesome icons
│   │   └── index.css               # Custom styles
│   ├── js/
│   │   ├── fontawesome.all.min.js  # Font Awesome JavaScript
│   │   └── index.js                # Custom JavaScript
│   └── images/
│       └── cornell-logo.png        # Cornell logo
└── README.md           # This file
```

## Sections

1. **Hero Section**: Main title with Cornell DB Group branding
2. **News**: Latest research achievements and milestones
3. **People**: Faculty, PhD students, graduates, and undergrads
4. **Projects**: Featured research projects with links
5. **Publications**: Organized by year (2026-2017) with collapsible sections
6. **Footer**: Contact information and social media links

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with Bulma framework
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Google Sans, Noto Sans)

## Local Development

To view the website locally:

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   cd Cornell-DB-Group
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser

## Deployment

This website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Customization

### Colors
The primary color scheme uses Cornell red (#b31b1b, #c41e3a). To change:
- Edit the gradient colors in `static/css/index.css`

### Content
- Update news items in the News section
- Add/remove people in the People section
- Update publications in the Publications section
- Add new projects in the Projects section

### Logo
- Replace `static/images/cornell-logo.png` with your preferred logo

## Credits

Design inspired by SemBench website with custom Cornell branding.

## License

© 2025 Cornell Database Group
