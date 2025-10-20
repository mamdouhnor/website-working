# ✅ Complete Deployment Checklist

Use this checklist to deploy your website from start to finish.

---

## 📦 Phase 1: Deploy to Vercel

### ☐ Step 1: Setup Git Repository
```powershell
cd c:\md7t\lunching\MRMNSALT-Website
git init
git add .
git commit -m "Initial commit"
```

### ☐ Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `mrmnsalt-website`
3. Click "Create repository"

### ☐ Step 3: Push to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/mrmnsalt-website.git
git branch -M main
git push -u origin main
```

### ☐ Step 4: Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import `mrmnsalt-website` repository
4. Click "Deploy"
5. Wait 2-5 minutes

### ☐ Step 5: Verify Deployment
- [ ] Build completed successfully
- [ ] Website loads at `https://mrmnsalt-website.vercel.app`
- [ ] All pages work correctly
- [ ] Images and styles load properly

---

## 🌐 Phase 2: Connect GoDaddy Domain

### ☐ Step 6: Add Domain in Vercel
1. Go to Vercel project dashboard
2. Click Settings → Domains
3. Enter your domain: `mrmnsalt.com`
4. Click "Add"
5. **Keep this page open** (you'll need the DNS info)

### ☐ Step 7: Configure GoDaddy DNS
1. Login to https://godaddy.com
2. Go to My Products → Your Domain → DNS

### ☐ Step 8: Add A Record (Root Domain)
```
Type:  A
Name:  @
Value: 76.76.21.21
TTL:   600 seconds
```
Click "Save"

### ☐ Step 9: Add CNAME Record (WWW)
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   1 Hour
```
Click "Save"

### ☐ Step 10: Remove Conflicting Records
- [ ] Delete old A records for `@`
- [ ] Delete old CNAME records for `www`
- [ ] Keep MX records (email)
- [ ] Keep TXT records
- [ ] Click "Save All Changes"

### ☐ Step 11: Verify in Vercel
1. Go back to Vercel → Settings → Domains
2. Click "Refresh" or "Verify"
3. Wait for green checkmark ✅

### ☐ Step 12: Wait for DNS Propagation
- [ ] Wait 10-30 minutes (usually)
- [ ] Check at https://dnschecker.org
- [ ] Enter your domain
- [ ] Should show `76.76.21.21`

### ☐ Step 13: Test Your Domain
- [ ] Visit `http://yourdomain.com` (should redirect to HTTPS)
- [ ] Visit `https://yourdomain.com` (should load website)
- [ ] Visit `http://www.yourdomain.com` (should work)
- [ ] Check HTTPS padlock icon in browser

---

## 🎯 Final Verification

### ☐ Website Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Styles/CSS applied correctly
- [ ] Mobile responsive (test on phone)

### ☐ Domain Configuration
- [ ] Root domain works (`yourdomain.com`)
- [ ] WWW subdomain works (`www.yourdomain.com`)
- [ ] HTTPS enabled (padlock icon)
- [ ] No SSL warnings
- [ ] Vercel URL still works (`.vercel.app`)

### ☐ Deployment Pipeline
- [ ] GitHub repository connected
- [ ] Auto-deploy enabled
- [ ] Test: Make a small change, push to GitHub
- [ ] Verify: Vercel auto-deploys the change

---

## 📊 Post-Deployment Tasks

### ☐ Optional Enhancements
- [ ] Set primary domain in Vercel
- [ ] Enable Vercel Analytics
- [ ] Add environment variables (if needed)
- [ ] Setup custom error pages
- [ ] Configure redirects (if needed)

### ☐ Monitoring
- [ ] Setup uptime monitoring (e.g., UptimeRobot)
- [ ] Test website speed (PageSpeed Insights)
- [ ] Check mobile compatibility
- [ ] Test in different browsers

### ☐ Documentation
- [ ] Update README with live URL
- [ ] Document any custom configurations
- [ ] Save DNS settings for reference

---

## 🆘 If Something Goes Wrong

### Vercel Build Fails
→ See [VERCEL_DEPLOYMENT_STEPS.md](./VERCEL_DEPLOYMENT_STEPS.md) - Troubleshooting section

### Domain Not Working
→ See [GODADDY_DOMAIN_SETUP.md](./GODADDY_DOMAIN_SETUP.md) - Troubleshooting section

### Need Help
- Vercel Support: https://vercel.com/support
- GoDaddy Support: https://godaddy.com/help
- Check DNS: https://dnschecker.org

---

## 🎉 Success Criteria

When everything is complete, you should have:

✅ Website live on Vercel  
✅ Custom domain working  
✅ HTTPS enabled automatically  
✅ Auto-deployment from GitHub  
✅ Fast global CDN delivery  
✅ Professional domain name  

---

## 📝 Quick Reference

### Your URLs:
- **Vercel URL**: `https://mrmnsalt-website.vercel.app`
- **Custom Domain**: `https://yourdomain.com`
- **GitHub Repo**: `https://github.com/yourusername/mrmnsalt-website`

### DNS Records:
```
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

### Deployment Command:
```powershell
git add .
git commit -m "Update website"
git push origin main
# Vercel auto-deploys!
```

---

**Print this checklist and check off items as you complete them!** ✓
