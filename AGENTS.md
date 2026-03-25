# AGENTS.md

This file provides guidance to AI coding assistants when working with this repository.

## Repository Overview

Personal blog and homepage for [m4rvin.xyz](https://m4rvin.xyz). Built with Astro 5, Svelte 5, and Tailwind CSS 4. Static site deployed to Cloudflare Pages.

The `old/` directory contains the previous iteration of the site and design mockups for reference. It is not part of the build.

## Tech Stack

- **Framework**: Astro 5 (static site generation)
- **UI Islands**: Svelte 5 (interactive components only)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` plugin
- **Content**: Astro Content Collections with `glob()` loader, plain Markdown files
- **Syntax Highlighting**: Shiki with `catppuccin-mocha` theme
- **Package Manager**: pnpm
- **TypeScript**: Strict mode
- **Deployment**: Cloudflare Pages (static output, no adapter needed)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server (hot reload)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format
```

## Project Structure

```
├── AGENTS.md                           # This file
├── astro.config.mjs                    # Astro configuration
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript (strict)
├── svelte.config.js                    # Svelte preprocessor config
├── old/                                # Previous site (reference only)
├── public/
│   ├── favicon.ico
│   └── robots.txt
└── src/
    ├── content.config.ts               # Content collection schema (Astro 5 Content Layer API)
    ├── lib/
    │   └── constants.ts                # Site metadata constants
    ├── content/
    │   └── blog/                       # Blog posts (.md files)
    ├── components/
    │   ├── layout/                     # TopBar, SideNav, StatusBar, PCBBackground
    │   ├── blog/                       # BlogEntry, FeaturedPost
    │   ├── ui/                         # BaseHead, Breadcrumbs, Icon
    │   └── interactive/                # Svelte islands (MobileNav, etc.)
    ├── layouts/
    │   ├── BaseLayout.astro            # Root layout shell
    │   └── BlogPost.astro             # Blog article layout with prose styling
    ├── pages/
    │   ├── index.astro                 # Homepage (blog listing + featured)
    │   ├── about.astro                 # About page
    │   ├── projects.astro              # Projects showcase
    │   ├── 404.astro                   # Custom 404
    │   └── blog/
    │       ├── index.astro             # Blog listing
    │       └── [id].astro              # Individual post pages
    └── styles/
        └── global.css                  # Tailwind 4 @theme tokens + prose styles
```

## Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with the following frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description of the post."
pubDate: "2024-01-15"
updatedDate: "2024-01-20"    # optional
heroImage: "/path/to/image"  # optional
draft: false                 # set true to hide from production
tags: ["tag1", "tag2"]       # optional, defaults to []
---

Post content in Markdown...
```

The schema is defined in `src/content.config.ts`. Required fields: `title`, `description`, `pubDate`.

Posts with `draft: true` are excluded from all listings and route generation.

## Design System

The site uses a dark-mode-only IDE/terminal aesthetic with Catppuccin Mocha-inspired colors. Design tokens are defined in `src/styles/global.css` using Tailwind 4's `@theme` directive.

Key color tokens:
- `background` / `surface`: `#121221`
- `primary`: `#b5cfff`, `primary-container`: `#89b4fa`
- `secondary`: `#99d595`
- `tertiary`: `#dfc3ff`
- `on-surface`: `#e3e0f7`

Typography:
- Headlines/labels: Space Grotesk
- Body text: Inter
- Code/mono: JetBrains Mono
- Icons: Material Symbols Outlined

## Deployment

The site is deployed to Cloudflare Pages as a static site:

- **Build command**: `pnpm build`
- **Output directory**: `dist/`
- **Domain**: `m4rvin.xyz`

No Cloudflare adapter is needed for static-only output. The `404.html` in `dist/` is automatically served by Cloudflare Pages for missing routes.

## Architecture Notes

- **Zero JS by default**: Most components are Astro (server-rendered to static HTML). Svelte islands are used only for interactive elements and hydrated with `client:media` or `client:load` directives to minimize shipped JavaScript.
- **Content Layer API**: Uses Astro 5's `glob()` loader in `src/content.config.ts` (not the legacy `src/content/config.ts`).
- **No Tailwind config file**: Tailwind 4 uses CSS-only configuration via `@theme` in `global.css`.
- **SEO**: BaseHead component handles meta tags, Open Graph, Twitter cards, canonical URLs, and structured data (JSON-LD on blog posts).
