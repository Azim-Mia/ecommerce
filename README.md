
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Components Stucture :

src/
 ├── app/
 │    ├── dashboard/
 │    │     ├── page.tsx
 │    │     └── components/
 │    │           ├── Sidebar.tsx
 │    │           └── Header.tsx
 │
 ├── components/
 │    ├── ui/
 │    │     ├── Button.tsx
 │    │     └── Input.tsx
 │
 │    ├── shared/
 │    │     ├── Navbar.tsx
 │    │     └── Footer.tsx
 │
 │    └── features/
 │          ├── product/
 │          └── auth/
 🔥 2. Category অনুযায়ী component ভাগ করো
👉 (A) UI Components (small, reusable)

➡ button, input, card — এগুলো pure design components

👉 (B) Shared Components (global use)

➡ Navbar, Footer — সব page-এ লাগে

👉 (C) Feature-based Components (specific কাজ)

➡ Dashboard, Product, Auth related

📁 রাখবে:
