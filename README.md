# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/867a7000-4c40-40f4-a893-68c50f735905

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/867a7000-4c40-40f4-a893-68c50f735905) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/867a7000-4c40-40f4-a893-68c50f735905) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## CI & GitHub Actions Secrets

This repo includes CI (build, Playwright smoke, Axe a11y, Lighthouse CI, and an @apply rule check). To enable full PR previews and comments, add these repository secrets:

- Vercel (recommended for preview URLs):
  - VERCEL_TOKEN
  - VERCEL_ORG_ID
  - VERCEL_PROJECT_ID
- Netlify (alternative):
  - NETLIFY_AUTH_TOKEN
  - NETLIFY_SITE_ID
- Lighthouse CI GitHub App (optional PR annotations):
  - LHCI_GITHUB_APP_TOKEN

Notes:
- Node version is pinned via .nvmrc (20).
- Preview server uses `vite preview` on http://localhost:4173 in CI.
- Browserslist DB is updated in CI via `npx update-browserslist-db@latest` (non-blocking).

