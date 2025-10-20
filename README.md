# MRMNSALT Website

This is the isolated website component from the MRMNSALT project, ready for deployment to Vercel.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 📦 Deploy to Vercel

### 📚 Deployment Guides Available:

1. **[QUICK_START.md](./QUICK_START.md)** - 5-minute quick deployment
2. **[COMPLETE_DEPLOYMENT_CHECKLIST.md](./COMPLETE_DEPLOYMENT_CHECKLIST.md)** - Step-by-step checklist
3. **[VERCEL_DEPLOYMENT_STEPS.md](./VERCEL_DEPLOYMENT_STEPS.md)** - Detailed Vercel guide
4. **[GODADDY_DOMAIN_SETUP.md](./GODADDY_DOMAIN_SETUP.md)** - Connect GoDaddy domain

### Quick Deploy:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🛠️ Tech Stack

- **React** 18.2.0
- **React Router** 6.16.0
- **React Icons** 4.11.0
- **Create React App** 5.0.1

## 📁 Project Structure

```
MRMNSALT-Website/
├── public/              # Static files
├── src/                 # React source code
│   ├── components/      # React components
│   ├── pages/          # Page components
│   └── App.js          # Main app component
├── package.json        # Dependencies
├── vercel.json         # Vercel configuration
└── README.md          # This file
```

## 🌐 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 📝 License

This project is part of the MRMNSALT application.

---

**Need help deploying?** Check [VERCEL_DEPLOYMENT_STEPS.md](./VERCEL_DEPLOYMENT_STEPS.md)
