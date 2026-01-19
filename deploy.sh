#!/bin/bash

# CheetahNet Website Deployment Script
# Run this script on the VPS server

echo "🚀 Starting CheetahNet Deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) is installed${NC}"

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git is installed${NC}"

# Set deployment directory (change this to your web directory)
DEPLOY_DIR="${1:-/var/www/html}"
REPO_URL="https://github.com/Ngwero/cheetah.git"
PROJECT_NAME="cheetah"

echo -e "${YELLOW}📁 Deployment directory: $DEPLOY_DIR${NC}"

# Create directory if it doesn't exist
mkdir -p "$DEPLOY_DIR"
cd "$DEPLOY_DIR"

# Clone or update repository
if [ -d "$PROJECT_NAME" ]; then
    echo -e "${YELLOW}📦 Updating existing repository...${NC}"
    cd "$PROJECT_NAME"
    git pull origin main
else
    echo -e "${YELLOW}📦 Cloning repository...${NC}"
    git clone "$REPO_URL" "$PROJECT_NAME"
    cd "$PROJECT_NAME"
fi

# Install dependencies
echo -e "${YELLOW}📥 Installing dependencies...${NC}"
npm install

# Build the project
echo -e "${YELLOW}🔨 Building project...${NC}"
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed! Please check the errors above.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Check if PM2 is installed
if command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}🔄 Restarting with PM2...${NC}"
    pm2 stop cheetahnet 2>/dev/null
    pm2 delete cheetahnet 2>/dev/null
    pm2 start npm --name "cheetahnet" -- start
    pm2 save
    echo -e "${GREEN}✅ Application started with PM2${NC}"
    echo -e "${GREEN}📊 Run 'pm2 status' to check status${NC}"
    echo -e "${GREEN}📋 Run 'pm2 logs cheetahnet' to view logs${NC}"
else
    echo -e "${YELLOW}⚠️  PM2 is not installed. Starting with npm start...${NC}"
    echo -e "${YELLOW}⚠️  Note: This will stop when you close the terminal.${NC}"
    echo -e "${YELLOW}⚠️  Install PM2 for production: npm install -g pm2${NC}"
    npm start
fi

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your website should be running on http://localhost:3000${NC}"

