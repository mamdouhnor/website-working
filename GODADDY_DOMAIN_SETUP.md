# 🌐 Connect GoDaddy Domain to Vercel

Complete guide to publish your Vercel website using your GoDaddy domain.

## ⚠️ Prerequisites

- ✅ Website already deployed on Vercel
- ✅ GoDaddy domain purchased
- ✅ Access to both Vercel and GoDaddy accounts

---

## 📋 Step-by-Step Process

### Step 1: Get Your Vercel Deployment URL

After deploying to Vercel, you should have a URL like:
- `https://mrmnsalt-website.vercel.app`

Make sure your website is working at this URL before proceeding.

---

### Step 2: Add Domain in Vercel

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Navigate to your project dashboard

2. **Go to Domain Settings**
   - Click on your project (`mrmnsalt-website`)
   - Click **Settings** (top menu)
   - Click **Domains** (left sidebar)

3. **Add Your Domain**
   - In the "Add Domain" field, enter your domain
   - Examples:
     - `mrmnsalt.com` (for root domain)
     - `www.mrmnsalt.com` (for www subdomain)
   - Click **Add**

4. **Vercel Will Show DNS Configuration**
   - Vercel will display the DNS records you need to add
   - **Keep this page open** - you'll need these values

---

### Step 3: Configure DNS in GoDaddy

#### A. Login to GoDaddy

1. Go to [godaddy.com](https://www.godaddy.com)
2. Click **Sign In**
3. Enter your credentials

#### B. Access DNS Management

1. Click on your **profile icon** (top right)
2. Select **My Products**
3. Find your domain in the list
4. Click **DNS** button next to your domain
   - Or click the **three dots (...)** → **Manage DNS**

#### C. Configure DNS Records

You need to add **TWO** records:

---

### 🔴 Record 1: Root Domain (yourdomain.com)

**Add an A Record:**

| Field | Value |
|-------|-------|
| **Type** | A |
| **Name** | @ |
| **Value** | `76.76.21.21` |
| **TTL** | 600 seconds (or 1/2 Hour) |

**Steps:**
1. Click **Add** button (or **Add New Record**)
2. Select **Type**: `A`
3. **Name**: Enter `@` (this represents your root domain)
4. **Value**: Enter `76.76.21.21` (Vercel's IP address)
5. **TTL**: Select `600 seconds` or `1/2 Hour`
6. Click **Save**

---

### 🔵 Record 2: WWW Subdomain (www.yourdomain.com)

**Add a CNAME Record:**

| Field | Value |
|-------|-------|
| **Type** | CNAME |
| **Name** | www |
| **Value** | `cname.vercel-dns.com` |
| **TTL** | 1 Hour |

**Steps:**
1. Click **Add** button again
2. Select **Type**: `CNAME`
3. **Name**: Enter `www`
4. **Value**: Enter `cname.vercel-dns.com`
5. **TTL**: Select `1 Hour`
6. Click **Save**

---

### 🗑️ Step 4: Remove Conflicting Records

**Important:** Delete any existing A or CNAME records that conflict:

1. Look for existing records with:
   - Name: `@` (Type: A or CNAME)
   - Name: `www` (Type: A or CNAME)

2. Click the **trash/delete icon** next to these records

3. **DO NOT DELETE:**
   - MX records (needed for email)
   - TXT records (needed for verification)
   - NS records (nameservers)

4. Click **Save All Changes** or **Save**

---

### Step 5: Verify Domain in Vercel

1. **Go back to Vercel**
   - Navigate to Settings → Domains
   - Find your domain in the list

2. **Click "Verify" or "Refresh"**
   - Vercel will check if DNS is configured correctly

3. **Wait for Verification**
   - This can take **5 minutes to 48 hours**
   - Usually happens within **10-30 minutes**

4. **Check Status**
   - ✅ Green checkmark = Domain is active
   - ⏳ Pending = Still propagating
   - ❌ Error = Check DNS configuration

---

### Step 6: Test Your Domain

1. **Wait 10-30 minutes** for DNS propagation

2. **Check DNS Propagation**
   - Go to [dnschecker.org](https://dnschecker.org)
   - Enter your domain: `mrmnsalt.com`
   - Select **A** record type
   - Click **Search**
   - Should show `76.76.21.21` globally

3. **Visit Your Domain**
   - Open browser (use incognito/private mode)
   - Go to `http://yourdomain.com`
   - Should redirect to `https://yourdomain.com` (HTTPS automatic)
   - Your website should load!

4. **Test WWW Version**
   - Go to `http://www.yourdomain.com`
   - Should also work and redirect to HTTPS

---

## 🎯 What You Should See

### In Vercel Dashboard:
```
Domains:
✅ mrmnsalt.com (Primary)
✅ www.mrmnsalt.com (Redirects to mrmnsalt.com)
✅ mrmnsalt-website.vercel.app (Original)
```

### In GoDaddy DNS:
```
Type    Name    Value                   TTL
A       @       76.76.21.21            600
CNAME   www     cname.vercel-dns.com   3600
```

---

## 🔧 Advanced Configuration

### Set Primary Domain

In Vercel → Settings → Domains:
1. Find your preferred domain (e.g., `mrmnsalt.com`)
2. Click **Set as Primary**
3. All other domains will redirect to this one

### Add Multiple Domains

You can add multiple domains to the same Vercel project:
1. Repeat Step 2 for each domain
2. Configure DNS for each domain
3. All domains will show the same website

### Force HTTPS

Vercel automatically:
- Issues SSL certificate (free)
- Redirects HTTP to HTTPS
- Renews certificates automatically

---

## ⏱️ DNS Propagation Timeline

| Time | Status |
|------|--------|
| **0-5 min** | DNS records saved in GoDaddy |
| **5-30 min** | Usually propagates (most cases) |
| **1-4 hours** | Propagating globally |
| **24-48 hours** | Maximum propagation time |

**Check propagation:** [whatsmydns.net](https://www.whatsmydns.net)

---

## 🐛 Troubleshooting

### Domain Not Working After 48 Hours

**Check DNS Records:**
```
Expected:
Type: A, Name: @, Value: 76.76.21.21
Type: CNAME, Name: www, Value: cname.vercel-dns.com

Common Mistakes:
❌ Wrong IP address
❌ Extra spaces in values
❌ Conflicting records not deleted
❌ Using CNAME for @ (root domain)
```

**Fix:**
1. Go to GoDaddy DNS Management
2. Verify records match exactly
3. Delete any conflicting records
4. Save changes
5. Wait 30 minutes
6. Try again

### "Invalid Configuration" in Vercel

**Causes:**
- DNS records not added yet
- Wrong DNS values
- Conflicting records in GoDaddy

**Fix:**
1. Double-check GoDaddy DNS records
2. Wait 30 minutes after making changes
3. Click "Refresh" in Vercel
4. Contact Vercel support if persists

### Website Shows "404 Not Found"

**Causes:**
- Domain not verified in Vercel
- DNS not propagated yet

**Fix:**
1. Check Vercel domain status (should be green ✅)
2. Wait for DNS propagation
3. Clear browser cache (Ctrl + Shift + Delete)
4. Try incognito/private browsing

### SSL Certificate Issues

**Vercel automatically handles SSL, but if you see warnings:**

**Fix:**
1. Wait 24 hours (SSL takes time to issue)
2. Check domain is verified in Vercel
3. Visit `https://` version directly
4. Clear browser cache

### Email Stops Working

**If you use GoDaddy email:**

**Fix:**
1. Make sure you didn't delete MX records
2. Go to GoDaddy DNS
3. Check MX records are still there
4. If deleted, contact GoDaddy support to restore

---

## 📞 Support Resources

### Vercel Support
- **Documentation**: [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)
- **Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### GoDaddy Support
- **Help Center**: [godaddy.com/help](https://www.godaddy.com/help)
- **DNS Help**: [godaddy.com/help/dns](https://www.godaddy.com/help/manage-dns)
- **Phone Support**: Available 24/7

### DNS Tools
- **Check Propagation**: [dnschecker.org](https://dnschecker.org)
- **Alternative Checker**: [whatsmydns.net](https://www.whatsmydns.net)
- **DNS Lookup**: [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx)

---

## ✅ Final Checklist

- [ ] Website deployed and working on Vercel
- [ ] Domain added in Vercel (Settings → Domains)
- [ ] A record added in GoDaddy (@ → 76.76.21.21)
- [ ] CNAME record added in GoDaddy (www → cname.vercel-dns.com)
- [ ] Conflicting DNS records removed
- [ ] DNS changes saved in GoDaddy
- [ ] Domain verified in Vercel (green checkmark)
- [ ] Waited 30+ minutes for propagation
- [ ] Website accessible via custom domain
- [ ] HTTPS working automatically
- [ ] WWW version redirects properly

---

## 💡 Pro Tips

1. **Use Root Domain**: Set `yourdomain.com` as primary, not `www.yourdomain.com`
2. **Keep Vercel URL**: The `.vercel.app` URL still works for testing
3. **Preview Deployments**: Each branch gets `branch-name.yourdomain.com`
4. **Analytics**: Enable Vercel Analytics to track visitors
5. **Monitor Uptime**: Use [uptimerobot.com](https://uptimerobot.com) (free)

---

## 🎉 Success!

Once everything is configured, your website will be:
- ✅ Live at your custom domain
- ✅ Secured with HTTPS (automatic)
- ✅ Globally distributed via CDN
- ✅ Auto-deployed on every git push
- ✅ Professional and fast!

---

**Questions?** Check the troubleshooting section or contact Vercel/GoDaddy support.
