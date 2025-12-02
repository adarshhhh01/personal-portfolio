# Adarsh Namdeo - Personal Portfolio

This is the source code for my personal portfolio website, designed to showcase my skills, projects, and professional journey as a full-stack developer. The site is built with modern web technologies and features a clean, interactive, and animated user interface.

[![Portfolio Screenshot](https://via.placeholder.com/800x450.png?text=Portfolio+Screenshot+Here)](https://addy.github.io/personal-Portfolio/)
*Link to live demo and replace the placeholder image above.*

## ✨ Features

- **Interactive UI**: Smooth animations and transitions powered by Framer Motion to create an engaging user experience.
- **Responsive Design**: A mobile-first approach ensuring the portfolio looks great on all devices, from desktops to smartphones.
- **Projects Showcase**: A dedicated section to display my recent work with tags and descriptions.
- **Professional Journey**: An animated timeline that details my work experience and education.
- **Contact Form**: A functional contact form that captures user details and sends them to a backend service.
- **Component-Based Architecture**: Built with React for a modular and maintainable codebase.

## 🛠️ Technologies Used

This project is built with a modern, full-stack technology set:

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A next-generation frontend tooling for fast development and optimized builds.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A production-ready motion library for React to create fluid animations.
- **Lucide React**: A beautiful and consistent icon toolkit.

### Backend (as implied by the contact form)
- **Node.js**: A JavaScript runtime for the server-side.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database to store data (like contact form submissions).

### Deployment
- **Vercel / GitHub Pages**: The project is configured for easy deployment on platforms like Vercel or GitHub Pages.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/personal-Portfolio.git
    cd personal-Portfolio
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

### Building for Production

To create a production-ready build of the app, run:

```sh
npm run build
```

This command will generate a `dist` folder in the project root, which contains the optimized static files for deployment.

## 📝 Project Structure

The main source code is located in the `src/` directory:

- `src/pages/`: Contains the main page components of the portfolio (`Services.jsx`, `About.jsx`, `Projects.jsx`, `contact.jsx`).
- `src/components/`: Contains reusable React components like `Badge.jsx`.
- `src/assets/`: Contains static assets like images and icons.
- `vite.config.js`: The configuration file for the Vite build tool.
- `tailwind.config.js`: The configuration file for Tailwind CSS.

## 📬 Contact

Adarsh Namdeo
- **Email**: adarshnamdeo76@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/adarsh-namdeo-390700251/

Feel free to reach out if you have any questions or suggestions!