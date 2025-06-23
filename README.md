# Modern Blog

This repository contains a simple blog built with [Next.js](https://nextjs.org/).
Styling is provided by [Tailwind CSS](https://tailwindcss.com/).
The blog uses static generation to render posts defined in `data/posts.js` and includes basic navigation with a reusable layout component.

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
- `components/Layout.js` – Shared layout component with a header and navigation.
- `data/posts.js` – Example post data.
- `styles/` – Global styles.

Feel free to customize and extend the blog as you like!
