# Portfolio Website

A modern, responsive portfolio website built with React that can be easily deployed to GitHub Pages.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout for all devices
- ⚡ Fast and optimized performance
- 🎯 Smooth scrolling navigation
- 📝 Contact form (ready for backend integration)
- 🚀 Easy deployment to GitHub Pages

## Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **About** - Personal information and photo placeholder
3. **Skills** - Technical skills and technologies
4. **Projects** - Featured projects showcase
5. **Contact** - Contact form and information
6. **Footer** - Social links and copyright

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information
- Update the name "Oliver Tran" throughout the components
- Replace the placeholder profile photo in `About.js`
- Update the about text in `About.js`
- Modify skills in `Skills.js`
- Add your own projects in `Projects.js`
- Update social links in `Footer.js`

### Styling
- Modify colors in `App.css`
- Update fonts and spacing
- Customize animations and transitions

### Content
- Replace project descriptions with your actual projects
- Update the hero section text
- Modify the skills list to match your expertise

## Deployment to GitHub Pages

### Automatic Deployment

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project
- Deploy it to the `gh-pages` branch
- Make it available at `https://yourusername.github.io/portfolio`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Go to your GitHub repository settings
3. Navigate to "Pages" section
4. Set source to "Deploy from a branch"
5. Select the `gh-pages` branch
6. Save the settings

## Important Notes

- **Update the homepage URL**: In `package.json`, change the homepage URL to match your GitHub username and repository name
- **Repository name**: Make sure your GitHub repository is named `portfolio` or update the homepage URL accordingly
- **Custom domain**: If you have a custom domain, update the homepage URL in `package.json`

## File Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)
- `npm run deploy` - Deploys to GitHub Pages

## Technologies Used

- React 18
- Create React App
- CSS3 with modern features
- GitHub Pages for hosting

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions about deployment, please check the [GitHub Pages documentation](https://pages.github.com/) or open an issue in this repository.
