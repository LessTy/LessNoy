# AGENTS.md

This file provides guidance to Qoder (qoder.com) when working with code in this repository.

Общаться с пользователем только на русском языке.
Не выполнять bun run dev пока пользователь не скажет об этом.

## Project Overview

This is a React + TypeScript + Vite web application called "У Лешего" (LessNoy), built with shadcn/ui components and Tailwind CSS. It's a content-focused site about toroidal philosophy, permaculture principles, and personal transformation, featuring a blog, products section, user authentication, and admin dashboard.

## Common Commands

### Development
- `bun run dev` - Start Vite development server on port 5173
- `npm run build` - Production build
- `npm run build:dev` - Development mode build
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint (checks .ts and .tsx files)
- `npm run format` - Format code with Prettier (src/**/*.{ts,tsx,css,md})

## Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **UI Framework**: React 18 with React Router for routing
- **Styling**: Tailwind CSS with custom theme, shadcn/ui component library
- **Type System**: TypeScript with relaxed compiler settings (noImplicitAny: false, strictNullChecks: false)
- **State Management**: React Context API for Auth and Theme, TanStack Query for server state
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `/src/pages/` - Route components (Index, About, Products, Blog, BlogPost, Contacts, Dashboard, Admin, Login, Register, NotFound)
- `/src/components/` - Reusable components (Header, Footer, ParallaxHeader, Hero, ThemeToggle, NavLink, etc.)
- `/src/components/ui/` - shadcn/ui primitives (50+ components from Radix UI)
- `/src/contexts/` - React contexts (AuthContext, ThemeContext)
- `/src/lib/` - Utility functions (utils.ts for cn(), blogUtils.ts for blog content management)
- `/src/hooks/` - Custom hooks (use-toast, use-mobile)
- `/src/content/blog/` - Markdown blog posts with frontmatter

### Key Architecture Patterns

**Routing & Code Splitting**
- Uses React Router v6 with lazy loading for all routes except Index
- LoadingFallback component shows spinner during lazy load
- ScrollToTop component ensures page starts at top on route change

**Authentication System**
- Mock authentication via AuthContext (localStorage-based)
- Login with `admin@admin.com` grants admin role
- User object: { id, email, name, role, purchases, progress }
- Protected routes should check user.role === 'admin' for admin access

**Theming**
- ThemeContext manages 'dark' | 'light' theme (defaults to dark)
- Tailwind configured with class-based dark mode
- CSS custom properties in index.css for theme colors
- Uses HSL color system for all theme variables

**Blog Content Management**
- Blog posts are markdown files in `/src/content/blog/`
- blogUtils.ts uses gray-matter to parse frontmatter
- Required frontmatter: id, title, slug, author, date, category, excerpt
- Posts sorted by date (newest first)

**Component Library**
- Extensive shadcn/ui component library installed
- All UI components use cn() utility (clsx + tailwind-merge)
- Radix UI primitives for accessibility
- Component variants managed by class-variance-authority

**Import Aliases**
- `@/*` maps to `./src/*` (configured in tsconfig.json and vite.config.ts)

### Important Files
- `vite.config.ts` - Dev server on 0.0.0.0:5173, file watching enabled, manual chunk splitting
- `tailwind.config.ts` - Custom theme with extended colors, font families (Merriweather, Inter)
- `components.json` - shadcn/ui configuration
- `App.tsx` - Main app wrapper with providers (Auth, Theme, Query, Tooltip, Router)
- `main.tsx` - React 18 entry point with createRoot

## Development Notes

- TypeScript strict mode is disabled for this project
- Development server uses polling for file watching (interval: 500ms)
- Build output uses esbuild minifier and manual chunk splitting for React vendors
- The project was generated from a Vite + React template with shadcn/ui
- Uses bun for package management (bun.lockb present)
- При команде "коммитить" сразу выполнять коммит без проверки статуса

## Technical Analysis Summary

### Project Structure
The project follows a feature-based organization:
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui component library
│   └── *.tsx            # Custom application components
├── pages/               # Application pages (routes)
├── contexts/            # React Context providers
├── hooks/               # Custom hooks
├── lib/                 # Utilities and helper functions
├── content/             # Content (markdown blog posts)
├── assets/              # Static assets
└── index.css            # Global styles
```

### Technology Stack
- React ^18.3.1
- TypeScript ^5.8.3
- Vite ^5.4.19
- Tailwind CSS ^3.4.17
- shadcn/ui
- React Router ^6.30.2
- TanStack Query ^5.90.11
- React Hook Form ^7.61.1

### Architecture Highlights
1. Modern component architecture with functional components and hooks
2. Context API for global state (authentication, theming)
3. TanStack Query for server state management
4. React Router v6 with lazy loading and route protection
5. Markdown-based content management with frontmatter
6. Tailwind CSS with custom theme and HSL color system
7. Radix UI primitives for accessibility

### Key Components
1. **AuthContext** - Authentication and session management
2. **ThemeProvider** - Theme switching (dark/light modes)
3. **shadcn/ui Button** - Versatile button component with variants
4. **Header** - Navigation header with conditional rendering
5. **BlogPost** - Markdown content display with dynamic routing

### Quality Aspects
- ESLint with minimal rules (strict checks disabled)
- Prettier for code formatting
- Basic TypeScript typing (strict mode disabled)
- No unit/integration tests
- No e2e tests

### Recommendations
1. Enable strict TypeScript mode
2. Add unit tests for critical components
3. Extend ESLint rules for better code quality
4. Add component documentation
5. Implement proper content management system

### Complexity Level
Middle friendly - suitable for developers with moderate experience due to modern practices and clear structure.