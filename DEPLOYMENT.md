# Website Deployment Guide

## Server Information

**VPS Server Details:**
- **Server Type:** VPS (Virtual Private Server)
- **FTP Host:** 139.59.43.147
- **FTP Port:** 21
- **FTP Username:** webadmin
- **FTP Password:** MicroCheetah@1900

## Deployment Options

You have two options for deployment:

### Option 1: Deploy via Git (Recommended)
The developer can clone your Git repository directly to the server.

### Option 2: Deploy via FTP
Upload the built files using the FTP credentials provided above.

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed locally
- All dependencies installed (`npm install`)
- FTP client (FileZilla, Cyberduck, or similar) for FTP deployment
- Git repository set up (for Git deployment)

## Build the Website

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the production version**:
   ```bash
   npm run build
   ```

3. **Test the production build locally**:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` to verify everything works.

## Deployment Methods

### Option 1: Deploy via Git (Recommended)

**Steps:**
1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Share the Git repository URL** with the developer (Nkuke Henry)

3. **The developer will:**
   - SSH into the VPS server
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build the project (`npm run build`)
   - Set up PM2 or similar process manager
   - Configure Nginx reverse proxy

**Advantages:**
- Version control
- Easy updates (just `git pull`)
- Better for collaboration

### Option 2: Deploy via FTP

**Steps:**
1. **Build the project locally:**
   ```bash
   cd netband
   npm install
   npm run build
   ```

2. **Connect via FTP:**
   - **Host:** 139.59.43.147
   - **Port:** 21
   - **Username:** webadmin
   - **Password:** MicroCheetah@1900

3. **Upload files:**
   - Upload the entire `netband` folder to the server
   - Make sure to upload:
     - `.next` folder (build output)
     - `public` folder (static assets)
     - `package.json` and `package-lock.json`
     - `node_modules` (or install on server)

4. **On the server, run:**
   ```bash
   cd /path/to/uploaded/netband
   npm install --production
   npm start
   ```

**Note:** You may need to install Node.js on the VPS if it's not already installed.

### Option 3: Deploy to Vercel (Alternative - Easiest)

Vercel is the recommended platform for Next.js applications:

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy from the project directory**:
   ```bash
   cd netband
   vercel
   ```

3. **Follow the prompts**:
   - Login to your Vercel account
   - Link to existing project or create new
   - Confirm settings

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

**Alternative: Deploy via Vercel Dashboard**
- Go to [vercel.com](https://vercel.com)
- Import your Git repository
- Vercel will automatically detect Next.js and deploy

### Option 4: Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 5: Deploy to Your Own Server (If you have SSH access)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Use a process manager** (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "cheetahnet" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure reverse proxy** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

If you need environment variables, create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Important Notes

1. **Build Output**: The `npm run build` command creates an optimized production build in the `.next` folder.

2. **Static Assets**: All images and assets in the `public` folder will be served automatically.

3. **Custom Domain**: After deployment, configure your custom domain in your hosting platform's dashboard.

4. **SSL Certificate**: Most platforms (Vercel, Netlify) provide free SSL certificates automatically.

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify all images display properly
- [ ] Check contact forms work
- [ ] Test mobile responsiveness
- [ ] Verify social media links
- [ ] Check footer links
- [ ] Test newsletter subscription (if implemented)
- [ ] Verify SEO metadata
- [ ] Check page load speed

## Troubleshooting

**Build Errors:**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `rm -rf .next node_modules` then `npm install`

**Deployment Issues:**
- Check build logs in your hosting platform dashboard
- Verify all environment variables are set
- Ensure all file paths are correct (case-sensitive on Linux servers)

## Support

For deployment issues, refer to:
- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

**Current Website Info:**
- Framework: Next.js 14.2.5
- React: 18
- Build Command: `npm run build`
- Start Command: `npm start`
- Output Directory: `.next` (auto-generated)

