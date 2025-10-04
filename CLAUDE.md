# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a modern portfolio website template built with React, Vite, Tailwind CSS, and shadcn/ui components. The template features a fictitious profile (Alex Chen) that can be easily customized with personal information. The project uses pnpm as the package manager and follows modern React patterns with functional components and hooks.

## Development Commands

### Essential Commands
- `pnpm dev` - Start development server (runs on http://localhost:5173)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint to check code quality

### Package Management
- Use `pnpm install` to install dependencies
- Use `pnpm add <package>` to add new dependencies
- Use `pnpm add -D <package>` to add development dependencies

## Architecture

### Component Structure
The project follows a clean component architecture:

- **Layout Components** (`src/components/layout/`): Header and Footer
- **Section Components** (`src/components/sections/`): Main page sections (Hero, About, Skills, Projects, etc.)
- **UI Components** (`src/components/ui/`): Reusable shadcn/ui components
- **Hooks** (`src/hooks/`): Custom React hooks
- **Utils** (`src/lib/`): Utility functions and configurations

### Key Technologies
- **React 19**: Latest React with functional components and hooks
- **Vite**: Build tool and dev server
- **Tailwind CSS v4**: Styling with utility classes
- **Framer Motion**: Animations and transitions
- **shadcn/ui**: Pre-built accessible UI components
- **Radix UI**: Headless UI primitives
- **Lucide React**: Icon library

### Styling Approach
- Uses Tailwind CSS for styling with the "New York" shadcn/ui style variant
- Custom CSS variables for theming defined in `src/App.css`
- Path alias `@` points to `src/` directory
- Component variants use `class-variance-authority` and `clsx`/`tailwind-merge` utilities

### File Organization
- All source code in `src/` directory
- Assets stored in `src/assets/`
- Component organization follows feature-based structure
- Path aliases configured for clean imports (`@/components`, `@/lib`, etc.)

## Code Conventions

### Import Patterns
- Use path aliases (`@/components/ui/button` instead of relative paths)
- Import React utilities from 'react' (useState, useEffect, etc.)
- Import animations from 'framer-motion'

### Component Patterns
- Use functional components with arrow functions
- Implement proper TypeScript-style prop destructuring
- Use Framer Motion for animations with consistent variant patterns
- Follow shadcn/ui component composition patterns

### Styling Conventions
- Use Tailwind utility classes
- Responsive design with mobile-first approach (`sm:`, `lg:` breakpoints)
- Consistent spacing and color schemes
- Use `cn()` utility function for conditional class names

### Animation Patterns
The codebase uses consistent Framer Motion patterns:
- `containerVariants` for staggered children animations
- `itemVariants` for individual element animations
- Spring animations for interactive elements
- Scroll-triggered animations for section reveals