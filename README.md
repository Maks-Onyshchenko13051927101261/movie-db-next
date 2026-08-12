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
├── src/
│ ├── app/ # Next.js App Router Structure
│ │ ├── (public)/
│ │ │ └── movies/
│ │ │ └── [id]/
│ │ │ ├── layout.tsx # Metadata layout for movie details
│ │ │ └── page.tsx # Dynamic server-rendered details page
│ │ ├── favorites/
│ │ │ ├── layout.tsx # Metadata layout for favorites page
│ │ │ └── page.tsx # Client-side user saved movies view
│ │ ├── favicon.ico
│ │ ├── globals.css # Tailwind CSS global import setup
│ │ ├── layout.tsx # Master root layout with Theme & Header
│ │ ├── loading.tsx # Dynamic route loading fallback skeleton
│ │ └── page.tsx # Main server landing page (Catalog Grid)
│ ├── components/ # Modular UI Component Architecture
│ │ ├── favorites-movies/
│ │ │ └── FavoritesMovies.tsx # Saved movies list container
│ │ ├── genres-nav/
│ │ │ └── GenresNav.tsx # Interactive genre filter pills bar
│ │ ├── header/
│ │ │ ├── FavoritesBadge.tsx # Dynamic LocalStorage bookmark counter
│ │ │ ├── Header.tsx # Main server layout navigation bar
│ │ │ ├── ThemeInitializer.tsx # Anti-flicker theme script injection
│ │ │ └── ThemeToggle.tsx # Dark/Light mode theme switcher button
│ │ ├── movie-card/
│ │ │ ├── FavoriteButton.tsx # Interactive LocalStorage favorite toggle
│ │ │ ├── GenreBadge.tsx # Category tag pill & TMDB map
│ │ │ ├── MovieInfo.tsx # Movie card textual metadata wrapper
│ │ │ ├── MovieListCard.tsx # Single catalog movie poster card
│ │ │ ├── PosterPreview.tsx # Optimized Next.js image poster wrapper
│ │ │ └── StarsRating.tsx # Rating visualization star icons
│ │ ├── movie-details/
│ │ │ └── MovieDetails.tsx # Comprehensive movie info presentation
│ │ ├── movies-list/
│ │ │ ├── MoviesList.tsx # Movie fetcher wrapper
│ │ │ └── MoviesListCards.tsx # Grid layout renderer for movie cards
│ │ ├── pagination/
│ │ │ └── Pagination.tsx # URL-synchronized page navigation bar
│ │ ├── search-form/
│ │ │ └── SearchForm.tsx # Dynamic router search input form
│ │ └── user-info/
│ │ └── UserInfo.tsx # Profile drawer dialog wrapper (RHF + Joi)
│ ├── constants/
│ │ └── events.tsx # Custom application event key constants
│ ├── models/ # TypeScript Interface Contract Specifications
│ │ ├── IGenreModel.tsx # Genre interface contract
│ │ ├── IMovieDetailsModel.tsx # Detailed movie schema specification
│ │ ├── IMovieModel.tsx # Primary catalog movie data interface
│ │ └── IResponseModel.tsx # Paginated TMDB API response wrapper
│ ├── services/ # Architectural Layer Abstractions
│ │ ├── api.service.tsx # Central Axios HTTP client configuration
│ │ ├── local.service.tsx # Type-safe LocalStorage helper abstraction
│ │ └── movie.service.tsx # TMDB endpoints API client implementation
│ └── validator/
│ └── user.validator.tsx # Joi schema validation rules for forms
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
