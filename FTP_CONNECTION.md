# FTP Server Connection Guide

## FTP Server Details

- **Host:** 139.59.43.147
- **Port:** 21
- **Username:** webadmin
- **Password:** MicroCheetah@1900

## Method 1: Using FileZilla (Recommended - GUI)

1. **Download FileZilla Client:**
   - Visit: https://filezilla-project.org/download.php?type=client
   - Download and install for your operating system

2. **Connect:**
   - Open FileZilla
   - At the top, enter:
     - **Host:** `sftp://139.59.43.147` (or just `139.59.43.147`)
     - **Username:** `webadmin`
     - **Password:** `MicroCheetah@1900`
     - **Port:** `21`
   - Click "Quickconnect"

3. **Navigate:**
   - Left side: Your local files
   - Right side: Server files
   - Drag and drop files to upload/download

## Method 2: Using Cyberduck (Mac/Windows)

1. **Download Cyberduck:**
   - Visit: https://cyberduck.io/download/
   - Install the application

2. **Connect:**
   - Open Cyberduck
   - Click "Open Connection" button
   - Select "FTP (File Transfer Protocol)"
   - Enter:
     - **Server:** `139.59.43.147`
     - **Port:** `21`
     - **Username:** `webadmin`
     - **Password:** `MicroCheetah@1900`
   - Click "Connect"

## Method 3: Using Command Line (Terminal)

### On Mac/Linux:

```bash
ftp 139.59.43.147
```

When prompted:
- Username: `webadmin`
- Password: `MicroCheetah@1900`

### FTP Commands:
- `ls` - List files
- `cd <directory>` - Change directory
- `put <file>` - Upload file
- `get <file>` - Download file
- `quit` - Exit

## Method 4: Using VS Code (If you use VS Code)

1. Install "FTP-Sync" extension
2. Configure connection settings
3. Connect and sync files

## Method 5: Using Finder (Mac) - Quick Access

1. Open Finder
2. Press `Cmd + K` (or Go > Connect to Server)
3. Enter: `ftp://139.59.43.147`
4. Enter username: `webadmin`
5. Enter password: `MicroCheetah@1900`
6. Click "Connect"

## Troubleshooting

**Connection Issues:**
- Ensure port 21 is not blocked by firewall
- Check if FTP service is running on server
- Try using SFTP (port 22) if available

**Permission Issues:**
- Contact server administrator if you can't access certain directories
- Check file permissions on the server

**Security Note:**
- FTP is not encrypted. Consider using SFTP (port 22) if available for secure file transfer
- Never share your FTP credentials publicly

## What to Upload

When deploying your Next.js website via FTP:

1. **Build the project first:**
   ```bash
   npm run build
   ```

2. **Upload these folders/files:**
   - `.next` folder (build output)
   - `public` folder (static assets)
   - `package.json` and `package-lock.json`
   - `next.config.mjs`
   - All other source files

3. **Do NOT upload:**
   - `node_modules` (install on server with `npm install`)
   - `.git` folder
   - `.env.local` files

4. **On the server, run:**
   ```bash
   npm install --production
   npm start
   ```

## Recommended: Use Git Instead

For better deployment, consider using Git (as discussed with the developer):
- More secure
- Version control
- Easier updates
- Better for collaboration

The developer can clone your repository directly to the server.

