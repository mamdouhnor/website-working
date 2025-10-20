# MRMNSALT Website - Vercel Deployment Guide

Complete step-by-step guide to deploy this isolated website to Vercel.

## 📁 What's in This Folder

This is the **isolated website** from the MRMNSALT project, ready for deployment to Vercel.

**Contents:**
- `src/` - React source code
- `public/` - Static assets
- `package.json` - Dependencies and scripts
- `vercel.json` - Vercel configuration
- `.gitignore` - Git ignore rules (if exists)

## 🚀 Deployment Steps

### Step 1: Initialize Git Repository

```powershell
# Navigate to this folder
cd c:\md7t\lunching\MRMNSALT-Website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - MRMNSALT website"
```

### Step 2: Push to GitHub

**Option A: Create New Repository via GitHub Website**

1. Go to [github.com](https://github.com) and login
2. Click the **+** icon → **New repository**
3. Name it: `mrmnsalt-website` (or your choice)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**
6. Copy the repository URL (e.g., `https://github.com/yourusername/mrmnsalt-website.git`)

**Then run these commands:**

```powershell
# Add remote repository
git remote add origin https://github.com/yourusername/mrmnsalt-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub CLI (if installed)**

```powershell
# Create and push in one go
gh repo create mrmnsalt-website --public --source=. --remote=origin --push
```

### Step 3: Deploy to Vercel

**Method 1: Vercel Dashboard (Recommended)**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** (you can use your GitHub account)
3. **Click "Add New Project"**
4. **Import your GitHub repository:**
   - Select `mrmnsalt-website` from the list
   - Click **Import**

5. **Configure Project Settings:**
   - **Project Name**: `mrmnsalt-website` (or your choice)
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. **Environment Variables** (if needed):
   - Click "Add Environment Variable"
   - Add any variables like `REACT_APP_API_URL` if your app needs them
   - Example: `REACT_APP_API_URL` = `https://your-backend.com`

7. **Click "Deploy"**
   - Wait 2-5 minutes for the build to complete
   - You'll get a URL like: `https://mrmnsalt-website.vercel.app`

**Method 2: Vercel CLI**

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from this folder)
cd c:\md7t\lunching\MRMNSALT-Website
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [Select your account]
# - Link to existing project? N
# - Project name? mrmnsalt-website
# - In which directory? ./
# - Override settings? N

# For production deployment
vercel --prod
```

### Step 4: Connect Custom Domain (Optional)

If you have a domain from GoDaddy or another provider:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **Settings** → **Domains**
   - Enter your domain (e.g., `mrmnsalt.com`)
   - Click **Add**

2. **In GoDaddy (or your DNS provider):**
   - Go to DNS Management
   - Add these records:

   **For Root Domain (`mrmnsalt.com`):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 600
   ```

   **For WWW (`www.mrmnsalt.com`):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Verify in Vercel:**
   - Click **Verify** next to your domain
   - Wait 5 minutes to 48 hours for DNS propagation
   - Check status at [dnschecker.org](https://dnschecker.org)

## 🔄 Continuous Deployment

Once deployed, every push to GitHub automatically triggers a new deployment:

```powershell
# Make changes to your code
# Then:
git add .
git commit -m "Update website"
git push origin main

# Vercel automatically builds and deploys!
```

## 🛠️ Local Development

Before deploying, you can test locally:

```powershell
# Install dependencies
npm install

# Start development server
npm start

# Build for production (test)
npm run build
```

## ✅ Post-Deployment Checklist

- [ ] Website deployed successfully
- [ ] Deployment URL works (e.g., `https://mrmnsalt-website.vercel.app`)
- [ ] All pages load correctly
- [ ] Images and assets display properly
- [ ] Routing works (if using React Router)
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS certificate active (automatic)
- [ ] Environment variables set (if needed)

## 📊 Vercel Features You Get

- ✅ **Automatic HTTPS** - SSL certificate included
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic Deployments** - Every git push deploys
- ✅ **Preview Deployments** - Every branch gets a URL
- ✅ **Analytics** - Free traffic insights
- ✅ **Zero Configuration** - Works out of the box

## 🐛 Troubleshooting

### Build Fails

**Error: "Command failed: npm run build"**

1. Test locally first:
   ```powershell
   npm install
   npm run build
   ```
2. Check build logs in Vercel dashboard
3. Ensure all dependencies are in `package.json`
4. Check Node.js version compatibility

### 404 Errors on Routes

If React Router routes show 404:

1. The `vercel.json` file should handle this (already included)
2. Verify `vercel.json` has the catch-all route:
   ```json
   {
     "routes": [
       { "src": "/(.*)", "dest": "/index.html" }
     ]
   }
   ```

### Environment Variables Not Working

1. In Vercel Dashboard → Settings → Environment Variables
2. Add variables with `REACT_APP_` prefix
3. Redeploy after adding variables
4. Example: `REACT_APP_API_URL=https://api.example.com`

### Domain Not Connecting

1. Wait 24-48 hours for DNS propagation
2. Check DNS records match exactly
3. Use [whatsmydns.net](https://www.whatsmydns.net) to verify
4. Clear browser cache (Ctrl + Shift + Delete)

## 📞 Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **React Documentation**: [react.dev](https://react.dev)

## 💡 Pro Tips

1. **Preview Deployments**: Every branch/PR gets its own preview URL
2. **Rollback**: Can instantly rollback to any previous deployment
3. **Analytics**: Enable Vercel Analytics for free traffic insights
4. **Performance**: Vercel automatically optimizes images and assets
5. **Logs**: Check real-time logs in Vercel dashboard

## 🔐 Security Best Practices

1. **Never commit secrets** - Use environment variables
2. **Use .gitignore** - Don't commit `node_modules`, `.env` files
3. **Keep dependencies updated** - Run `npm audit` regularly
4. **Enable HTTPS only** - Vercel does this automatically

---

## Quick Reference Commands

```powershell
# Setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Deploy with Vercel CLI
npm install -g vercel
vercel login
vercel --prod

# Local testing
npm install
npm start
npm run build
```

---

**Ready to deploy?** Follow Step 1 above! 🚀
