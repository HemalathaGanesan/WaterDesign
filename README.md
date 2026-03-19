# WaterDesign Next.js

A marketing website for Water Design Engineering built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Project Overview

- Pages include: Home, About, Blog, Clients, Contact, Projects, and Services (Design, Proposal, Technical, Treatment).
- Responsive navigation with mobile drawer + service dropdown.
- Live demo: https://waterdesignengg.in
- Deployed via Firebase Hosting (see `firebase.json`).

---

## 💻 Prerequisites

- Node.js 18+ (LTS)
- npm (or yarn / pnpm)

---

## 📦 Setup

From the `waterdesign/` folder:

```bash
npm install
```

---

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## ✅ Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start development server (hot reload) |
| `npm run build` | Build production assets               |
| `npm run start` | Run production build locally          |
| `npm run lint`  | Run ESLint checks                     |

---

## 🚀 Deploy (Firebase Hosting)

1. Log in to Firebase (if needed):

```bash
firebase login
```

2. Deploy to your configured Firebase project:

```bash
firebase deploy
```

> If you deploy to another provider, run `npm run build` first.

---

## 📁 Project Structure

- `app/` — Next.js App Router pages + layouts
- `components/` — UI components (Navbar, Footer, etc.)
- `public/` — Static assets (images, videos, sitemap, robots)
- `next.config.ts` — Next.js config
- `firebase.json` — Firebase Hosting config

---

## 📝 Notes

- Styling is handled with Tailwind CSS (see `app/globals.css`).
- Mobile menu uses a full-height overlay for a better mobile experience.

---

Happy building! 🛠️
