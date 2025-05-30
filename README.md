# Digital Phonk Next.js Dashboard

A fully immersive, modular dashboard inspired by Power BI and Facebook UI, built with Next.js, TypeScript, ShadCN, and TailwindCSS. This project demonstrates a dark, modern neon aesthetic with responsive layouts, interactive widgets, and best practices for maintainability and scalability.

---

## 🚀 Features

- **Modular Components:** KPI cards, charts, tables, date pickers, file uploads, and more.
- **Three-Column Layout:** Structured left sidebar (navigation), expansive middle dashboard, adaptive right sidebar (quick actions, notifications, user settings).
- **Dark Neon Theme:** Futuristic, visually engaging design with glowing accents.
- **Interactive Widgets:** Bar charts, expandable widgets, keyboard shortcuts, and dynamic animations.
- **Responsive Design:** Optimized for all devices and screen sizes.
- **TypeScript & Best Practices:** Clean, maintainable, and scalable codebase.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (Node package manager)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```sh
   cd my-nextjs-dashboard
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Development Server

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your dashboard.

---

## 📁 Project Structure

- `src/app/page.tsx` — Main dashboard page (uses all modular components)
- `src/components/Sidebar.tsx` — Left navigation sidebar
- `src/components/RightSidebar.tsx` — Quick actions, notifications, user settings
- `src/components/DashboardHeader.tsx` — Dashboard header
- `src/components/KpiCardsGrid.tsx` — Grid of KPI cards
- `src/components/DateRangePicker.tsx` — Date range picker widget
- `src/components/FileUpload.tsx` — File upload widget
- `src/components/DashboardChart.tsx` — Data visualization/chart
- `src/components/DashboardTable.tsx` — Tabular data display
- `src/components/GlitchButton.tsx` — Neon animated action buttons
- `src/styles/globals.css` — Global and custom styles

---

## ✨ Usage & Customization

- All components are reusable and easy to extend.
- Keyboard shortcuts (e.g., `Ctrl+K` or `/`) focus the search bar.
- Easily add or swap widgets, cards, or sections for your own data and workflow.

---

## 📄 License

MIT License

---

**Built with Next.js, ShadCN, and TailwindCSS for a futuristic dashboard experience.**