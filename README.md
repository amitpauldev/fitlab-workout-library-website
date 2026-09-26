# FitLab — Workout Library

FitLab is a modern and responsive workout library website built with Next.js and TypeScript. It allows users to explore different workouts, view detailed exercise information, and build a personalized workout plan.

## 🔗 Live Demo

**Live Website:** [https://fitlabwebapp.vercel.app/]

## ✨ Features

- **Explore Workouts** — Browse a collection of exercises through a clean and responsive interface.
- **Workout Details** — View detailed information about individual workouts using dynamic routes.
- **Personal Workout Plan** — Add exercises to a personalized workout plan and manage selected workouts.
- **Responsive Design** — Optimized for mobile, tablet, and desktop screen sizes.
- **Error & 404 Handling** — User-friendly error and not-found pages for failed requests and unavailable workouts.

## 🛠️ Technologies Used

- **Next.js** — React framework with App Router
- **React** — Component-based UI development
- **TypeScript** — Type-safe JavaScript development
- **Tailwind CSS** — Styling and responsive design
- **Lucide React** — Icon library
- **REST API** — Fetching workout data
- **Next.js Server & Client Components** — Server-side data fetching and client-side interactivity

## 📂 Project Structure

```text
fitlab/
├── app/
│   ├── workouts/
│   ├── workout/
│   │   └── [id]/
│   ├── my-plan/
│   ├── loading.tsx
│   └── layout.tsx
├── components/
├── context/
├── public/
├── types/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/amitpauldev/fitlab-webapp
```

Navigate to the project directory:

```bash
cd fitlab
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🌐 Deployment

The project can be deployed using platforms such as Vercel or Netlify.

## 👨‍💻 Author

**Amit Paul**

Frontend / Full-Stack Web Developer

- GitHub: [@amitpauldev](https://github.com/amitpauldev)
- LinkedIn: [Amit Paul](https://www.linkedin.com/in/amitpauldev/)

## 📄 License

This project is created for educational and portfolio purposes.
