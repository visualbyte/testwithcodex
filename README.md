# Modern Blog

This repository contains a simple blog built with [Next.js](https://nextjs.org/).
Styling is powered by [Tailwind CSS](https://tailwindcss.com/).
The blog uses static generation to render posts defined in `data/posts.js` and includes basic navigation with a reusable layout component. A dark-mode toggle is available in the layout, and an **About** page provides additional example content.

## Getting Started

1. Install dependencies (requires Node.js):

   ```bash
   npm install
   ```
   This will install Tailwind CSS along with other packages.

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the blog.

4. Run tests:

   ```bash
   npm test
   ```

## Project Structure

- `pages/` – Next.js pages, including a custom 404 page.
- `components/Layout.js` – Shared layout component with a header and navigation. Includes a dark/light theme toggle.
- `data/posts.js` – Example post data.
- `styles/` – Global styles powered by Tailwind.
- `tailwind.config.js` & `postcss.config.js` – Tailwind and PostCSS configuration.

Feel free to customize and extend the blog as you like!
