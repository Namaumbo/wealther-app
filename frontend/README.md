# Weather App Frontend

A modern React application built with Vite, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **clsx + tailwind-merge** - Utility for conditional CSS classes

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       └── input.jsx
│   ├── lib/
│   │   └── utils.js     # Utility functions (cn helper)
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your app.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding New shadcn/ui Components

To add more components from shadcn/ui, you can use their CLI:

```bash
npx shadcn@latest add <component-name>
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add select
```

## Available Components

Currently includes:
- Button (with multiple variants)
- Card (with Header, Title, Description, Content, Footer)
- Input

## Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Component Styling

All shadcn/ui components use Tailwind CSS and can be customized via:
1. The `className` prop
2. Modifying the component files in `src/components/ui/`
3. Updating Tailwind theme in `tailwind.config.js`

## Path Aliases

The project uses path aliases for cleaner imports:

```javascript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

Configured in:
- `jsconfig.json` - For IDE autocomplete
- `vite.config.js` - For build resolution

## Next Steps

1. Add routing with React Router
2. Set up API integration with the Flask backend
3. Add state management (Context API, Zustand, etc.)
4. Implement weather-specific components
5. Add more shadcn/ui components as needed

## License

MIT
