🎬 MovieStorm — Modern Movie Catalog App
MovieStorm is a high-performance, responsive movie catalog web application built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS v4. The application seamlessly interfaces with The Movie Database (TMDB) API to let users browse popular movies, search by keywords, filter by genres, view detailed movie metrics, and manage custom favorites list.

🚀 Key Features
⚡ Server-First Architecture (App Router): Core catalog grid, individual movie pages, and genres navigation are rendered on the server as Server Components, yielding near-instant First Contentful Paint (FCP) and rich SEO.

🔍 Deep-Linked Search & Pagination: Query strings (?query=...) and active pagination (?page=...) are synchronized directly with URL parameters via next/navigation, allowing shareable search results and preserving navigation context.

❤️ Interactive Favorites Management: Client-side favorite movies management backed by localStorage and synchronized across browser tabs using native storage events.

🏷️ Dynamic Genres Filtering: Dynamic navigation bar allowing users to filter movies by official TMDB genres with active state indicators.

👤 Profile Management: Client-side profile updating with real-time validation powered by React Hook Form and Joi.

🌙 Dark / Light Theme: Persistent dark mode toggling using Tailwind v4 utility classes and local state.

🎨 Modern UI/UX: Fully responsive layout designed with adaptive grid systems, backdrop blur effects, smooth scroll behavior, and image placeholder optimization.

🛠️ Tech Stack & Architecture
Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS v4 with @tailwindcss/postcss

Form Handling & Validation: React Hook Form, Joi, @hookform/resolvers

Data Source: TMDB API v3

Icons & Visuals: Native Unicode & Next.js Image Optimization

📐 Project Structure & Optimization
Plaintext
├── app/
│ ├── layout.tsx # Root layout with global metadata & theme setup
│ ├── page.tsx # Main server page (Movie Grid, Search & Pagination)
│ ├── movies/
│ │ ├── [id]/
│ │ │ └── page.tsx # Dynamic server movie detail page with metadata
│ │ └── favorites/
│ │ └── page.tsx # Client page for user favorites list
├── src/
│ ├── components/
│ │ ├── header/ # Server Header housing client interactive islands
│ │ │ ├── Header.tsx # Server Component
│ │ │ ├── ThemeToggle.tsx # Client Component Island
│ │ │ └── FavoritesBadge.tsx # Client Component Island
│ │ ├── movies-list/ # Grid, Cards & Rating components
│ │ │ ├── MoviesListCards.tsx
│ │ │ ├── MovieListCard.tsx
│ │ │ └── FavoriteButton.tsx # Client Component Island
│ │ ├── search/ # Client Search form with URL sync
│ │ ├── user-info/ # Client Profile manager (RHF + Joi)
│ │ ├── genres-list/ # Genres scrollbar navigation
│ │ └── pagination/ # Smooth scrolling pagination control
│ ├── services/
│ │ ├── movie.service.ts # TMDB API service layer
│ │ └── local.service.ts # LocalStorage abstraction wrapper
│ ├── models/ # TypeScript interfaces & types
│ └── validator/ # Joi validation schemas
⚙️ Getting Started

1. Prerequisites
   Node.js: v18.x or higher

Package Manager: npm / yarn / pnpm

2. Environment Setup
   Create a .env.local file in the root directory and insert your TMDB API Bearer Token / API Key:

Code snippet
MDB_TOKEN=your_tmdb_bearer_token_here 3. Installation
Clone the repository and install dependencies:

Bash
git clone https://github.com/your-username/moviestorm.git
cd moviestorm
npm install 4. Development Server
Run the local development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

5. Production Build
   Verify standard TypeScript checks and build for production:

Bash
npm run build
npm run start
📝 License
This project was built for educational purposes as part of the Web Development assignment curriculum.
