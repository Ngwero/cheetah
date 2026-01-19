# Server Deployment Instructions for Developer

## Repository Information

**GitHub Repository:** `https://github.com/Ngwero/cheetah.git`  
**Branch:** `main`

## Prerequisites

- SSH access to the VPS server (139.59.43.147)
- Node.js 18+ installed on the server
- Git installed on the server
- PM2 or similar process manager (recommended)

## Step-by-Step Deployment Instructions

### Step 1: SSH into the Server

```bash
ssh user@139.59.43.147
# Or use the credentials provided by the server administrator
```

### Step 2: Navigate to Web Directory

```bash
# Navigate to your web directory (adjust path as needed)
cd /var/www/html
# OR
cd /home/webadmin
# OR wherever your web files are located
```

### Step 3: Clone the Repository

```bash
git clone https://github.com/Ngwero/cheetah.git
cd cheetah
```

### Step 4: Install Dependencies

```bash
npm install
```

This will install all required packages from `package.json`.

### Step 5: Build the Production Version

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Step 6: Start the Production Server

#### Option A: Using PM2 (Recommended - Keeps server running)

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Start the application
pm2 start npm --name "cheetahnet" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on server reboot
pm2 startup
```

#### Option B: Using npm start (Temporary - stops when terminal closes)

```bash
npm start
```

The application will run on port 3000 by default.

### Step 7: Configure Nginx Reverse Proxy (If needed)

If you want to access the site via port 80/443, configure Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then restart Nginx:
```bash
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

### Step 8: Verify Deployment

1. Check if the app is running:
   ```bash
   # If using PM2
   pm2 status
   pm2 logs cheetahnet
   
   # Or check if port 3000 is listening
   netstat -tulpn | grep 3000
   ```

2. Visit the website:
   - `http://139.59.43.147:3000` (if no reverse proxy)
   - `http://yourdomain.com` (if Nginx is configured)

## Updating the Website (Future Updates)

When you need to update the website:

```bash
cd /path/to/cheetah
git pull origin main
npm install  # If package.json changed
npm run build
pm2 restart cheetahnet  # If using PM2
# OR
npm start  # If not using PM2
```

## Environment Variables (If needed)

If the application needs environment variables, create a `.env.local` file:

```bash
cd /path/to/cheetah
nano .env.local
```

Add variables like:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Troubleshooting

### Port Already in Use
```bash
# Find what's using port 3000
lsof -i :3000
# Kill the process or change the port in package.json
```

### Build Errors
- Ensure Node.js version is 18+
- Check `node --version`
- Clear cache: `rm -rf .next node_modules && npm install`

### PM2 Issues
```bash
pm2 logs cheetahnet  # Check logs
pm2 restart cheetahnet  # Restart
pm2 delete cheetahnet  # Remove and start fresh
```

### Permission Issues
```bash
# Ensure proper permissions
chown -R webadmin:webadmin /path/to/cheetah
chmod -R 755 /path/to/cheetah
```

## Server Information

- **Server IP:** 139.59.43.147
- **FTP Access:** Available (webadmin / MicroCheetah@1900)
- **Framework:** Next.js 14.2.5
- **Node Version Required:** 18+

## Contact

If you encounter any issues during deployment, please contact the repository owner.

---

**Note:** The repository does NOT include `node_modules` (as per .gitignore). Always run `npm install` after cloning.

