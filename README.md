# UI Practice Project

A React + Tailwind CSS practice project recreating a modern digital banking platform landing page UI — built while learning React component composition, layout design, and responsive UI patterns.

## ✨ Overview

This project focuses on translating a design into clean, reusable React components. It includes a hero section with a "Prospective Customer Segmentation" layout, navigation, and content cards — all styled with Tailwind CSS.

## 🛠️ Tech Stack

- **React** – component-based UI
- **Vite** – fast dev server and build tool
- **Tailwind CSS** – utility-first styling
- **ESLint** – code linting

## 📁 Project Structure

```
UI-project/
├── src/
│   ├── components/
│   │   ├── Section1/
│   │   │   ├── Arrow.jsx
│   │   │   ├── HeroText.jsx
│   │   │   ├── LeftContent.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Page1Content.jsx
│   │   │   ├── RightCard.jsx
│   │   │   ├── RightCardContent.jsx
│   │   │   ├── RightContent.jsx
│   │   │   └── Section1.jsx
│   │   └── Section2/
│   │       └── Section2.jsx
│   ├── App.jsx
│   ├── UserData.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ashutosht0210/UI-Practice-Project.git

# Navigate into the project
cd UI-Practice-Project

# Install dependencies
npm install
```

### Running the project

```bash
npm run dev
```

This starts the Vite dev server — open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 📦 Deployment

This project will be deployed via **GitHub Pages**. *(Live link coming soon!)*

## 📚 What I Practiced

- Breaking a UI design into modular, reusable components
- Structuring components within nested folders (`Section1`, `Section2`)
- Styling with Tailwind CSS utility classes
- Managing layout and content with parent/child component patterns
- Working with Vite as a build tool

## 📝 License

This project is for learning purposes and is open to use under the [MIT License](LICENSE).