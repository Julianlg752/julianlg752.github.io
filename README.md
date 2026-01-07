# Julian LG - Portfolio Website

A minimalistic dark-themed portfolio website built with Jekyll and hosted on GitHub Pages.

## 🚀 Features

- **Minimalistic Dark Theme**: Professional dark color scheme with excellent contrast
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Fast & Lightweight**: Static site generation with Jekyll
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with keyboard navigation support

## 🛠️ Technologies

- **Jekyll** - Static site generator
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Vanilla JS for interactions
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family
- **GitHub Pages** - Hosting platform

## 📦 Installation

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Julianlg752/julianlg752.github.io.git
   cd julianlg752.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4000`

### Build for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site/` directory.

## 📁 Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _data/               # Structured data files
│   ├── contact.yml      # Contact information
│   ├── projects.yml     # Project listings
│   └── skills.yml       # Skills and technologies
├── _includes/           # Reusable components
│   ├── about.html       # About section
│   ├── contact.html     # Contact section
│   ├── footer.html      # Footer component
│   ├── hero.html        # Hero/landing section
│   ├── nav.html         # Navigation bar
│   ├── projects.html    # Projects showcase
│   └── skills.html      # Skills display
├── _layouts/            # Page layouts
│   └── default.html     # Main layout template
├── assets/              # Static assets
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   └── js/
│       └── main.js      # JavaScript functionality
├── .gitignore          # Git ignore rules
├── Gemfile             # Ruby dependencies
├── index.html          # Homepage
└── README.md           # This file
```

## ✏️ Customization

### Update Personal Information

Edit the following files to customize with your information:

- `_config.yml` - Site title, description, social links
- `_data/contact.yml` - Contact information
- `_data/projects.yml` - Project portfolio
- `_data/skills.yml` - Skills and technologies

### Modify Styling

All styles are in `assets/css/main.css`. The theme uses CSS variables for easy customization:

```css
:root {
  --bg-primary: #0a0a0a;
  --text-primary: #e5e5e5;
  --accent-primary: #2563eb;
  /* ... more variables */
}
```

### Add New Sections

1. Create a new include file in `_includes/`
2. Add the section to `index.html`
3. Style it in `assets/css/main.css`

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Commit and push your changes
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. GitHub Pages will automatically build and deploy your site

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Julian LG**

- Website: [julianlg752.github.io](https://julianlg752.github.io)
- GitHub: [@Julianlg752](https://github.com/Julianlg752)
- LinkedIn: [julianlg752](https://www.linkedin.com/in/julianlg752)

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for the Inter font family
- Jekyll and GitHub Pages for the awesome platform