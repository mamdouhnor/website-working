# 🚀 Quick Start - Deploy to Vercel in 5 Minutes

## Step 1: Initialize Git (30 seconds)

```powershell
cd c:\md7t\lunching\MRMNSALT-Website
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Push to GitHub (2 minutes)

### Create GitHub Repository:
1. Go to https://github.com/new
2. Repository name: `mrmnsalt-website`
3. Click **Create repository** (don't add README/gitignore)

### Push your code:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/mrmnsalt-website.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (2 minutes)

### Option A: Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Click **"Add New Project"**
3. Import your `mrmnsalt-website` repository
4. Click **"Deploy"** (all settings auto-detected)
5. Done! 🎉

### Option B: Vercel CLI
```powershell
npm install -g vercel
vercel login
vercel --prod
```

## ✅ That's It!

Your website is now live at: `https://mrmnsalt-website.vercel.app`

---

## 🌐 Step 4: Connect GoDaddy Domain (Optional - 10 minutes)

### In Vercel:
1. Go to Settings → Domains
2. Add your domain (e.g., `mrmnsalt.com`)

### In GoDaddy:
1. Go to My Products → DNS
2. Add A record: `@` → `76.76.21.21`
3. Add CNAME record: `www` → `cname.vercel-dns.com`
4. Save changes

### Wait & Verify:
- Wait 10-30 minutes for DNS propagation
- Check at [dnschecker.org](https://dnschecker.org)
- Your site will be live at your custom domain!

**For detailed GoDaddy setup, see [GODADDY_DOMAIN_SETUP.md](./GODADDY_DOMAIN_SETUP.md)**

---

**For detailed instructions, see [VERCEL_DEPLOYMENT_STEPS.md](./VERCEL_DEPLOYMENT_STEPS.md)**
