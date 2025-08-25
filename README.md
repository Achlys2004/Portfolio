# 🌟 Personal Portfolio

A modern, responsive portfolio website built with React and Vite, featuring beautiful space-themed animations and a dynamic light/dark theme system.

## ✨ Features

### 🎨 Design & UI

- **Responsive Design**: Works seamlessly across all devices
- **Modern Interface**: Clean, professional layout with space aesthetics
- **Smooth Animations**: Dynamic background effects with stars and meteors
- **Interactive Elements**: Hover effects and smooth transitions

### 🌙 Theme System

- **Dual Theme Support**: Light and dark modes with independent styling
- **Dynamic Background**: Separate animated backgrounds for each theme
  - **Dark Theme**: Classic white stars and meteors
  - **Light Theme**: Colorful stars (7 colors) and meteors (5 colors)
- **Persistent Theme**: Saves user preference in localStorage
- **Instant Switching**: Reactive theme changes without page reload

### 🚀 Performance

- **Vite Build Tool**: Lightning-fast development and optimized production builds
- **Modern React**: Built with React 19 and modern hooks
- **Optimized Animations**: CSS keyframes for smooth, performant animations
- **Lazy Loading**: Efficient resource loading

### 📱 Sections

- **Hero Section**: Eye-catching introduction with animated background
- **About Me**: Personal introduction and background
- **Skills Section**: Technical skills and expertise
- **Projects**: Portfolio projects with detailed modals
- **Contact Section**: Professional contact information
- **Resume Viewer**: Integrated PDF resume display

## 🛠️ Tech Stack

### Frontend

- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

### Styling & Animation

- **CSS Custom Properties**: Dynamic theming system
- **CSS Keyframes**: Smooth animations for stars and meteors
- **Tailwind Utilities**: Custom utility classes for consistent styling
- **Responsive Design**: Mobile-first approach

### Development Tools

- **ESLint**: Code linting and formatting
- **Git**: Version control
- **Modern JavaScript**: ES6+ features

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Achlys2004/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/           # React components
│   ├── AboutMe.jsx      # About section
│   ├── ContactSection.jsx # Contact information
│   ├── HeroSection.jsx  # Hero/landing section
│   ├── Navbar.jsx       # Navigation component
│   ├── ProjectSection.jsx # Projects showcase
│   ├── SkillsSection.jsx # Skills display
│   ├── StarBackground.jsx # Animated background
│   ├── ThemeToggle.jsx  # Theme switcher
│   └── ...
├── Pages/               # Page components
│   ├── Home.jsx         # Main page
│   └── NotFound.jsx     # 404 page
├── Files/               # Static assets
│   └── *.pdf           # Resume files
├── lib/                 # Utility functions
├── assets/             # Images and icons
├── index.css           # Global styles
└── main.jsx            # App entry point
```

## 🎯 Key Features Explained

### Theme System

The portfolio features a sophisticated dual-theme system:

- **Independent Backgrounds**: Each theme has completely separate star and meteor animations
- **Reactive Switching**: Uses MutationObserver to detect theme changes instantly
- **Conditional Rendering**: JavaScript-based theme detection for reliable functionality

### Animation System

- **Stars**: Gentle pulsing animation with random timing
- **Meteors**: Diagonal movement across screen with staggered appearance
- **Colors**: Light theme features vibrant colors (Blue, Purple, Pink, Cyan, Emerald, Amber, Red)
- **Performance**: CSS-based animations for optimal performance

### Project Showcase

- **Modal System**: Detailed project views with descriptions
- **GitHub Integration**: Direct links to source code
- **Technology Tags**: Clear tech stack indication
- **Responsive Images**: Optimized for all screen sizes

## 🎨 Customization

### Colors

Theme colors can be customized in `src/index.css`:

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --primary: 250 47% 60%;
  /* ... */
}
```

### Animations

Animation speeds and effects can be modified in the CSS keyframes:

```css
@keyframes meteor {
  /* Customize meteor movement */
}

@keyframes pulse-subtle {
  /* Customize star pulsing */
}
```

### Content

Update personal information in the respective component files:

- `HeroSection.jsx` - Name and title
- `AboutMe.jsx` - Personal description
- `SkillsSection.jsx` - Technical skills
- `ProjectSection.jsx` - Portfolio projects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aathil Nishad**

- GitHub: [@Achlys2004](https://github.com/Achlys2004)

