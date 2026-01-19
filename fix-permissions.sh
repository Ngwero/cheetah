#!/bin/bash

echo "Fixing Next.js permissions issue..."
echo "This script requires sudo access to fix macOS file permissions."
echo ""

cd "$(dirname "$0")"

# Stop any running server
echo "Stopping any running server..."
lsof -ti:3000 | xargs kill -9 2>&1

# Remove extended attributes
echo "Removing extended attributes from node_modules..."
sudo xattr -rc node_modules

# Fix file permissions
echo "Fixing file permissions..."
sudo chmod -R u+r node_modules
sudo find node_modules -type d -exec chmod 755 {} \;

# Clear Next.js cache
echo "Clearing Next.js cache..."
rm -rf .next

echo ""
echo "✓ Permissions fixed!"
echo "You can now run: npm run dev"
echo ""


