const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image dimensions and categories
const imageConfig = {
  hero: { width: 1920, height: 1080, count: 9, format: 'jpg' },
  about: { width: 800, height: 600, count: 7, format: 'jpg' },
  team: { width: 400, height: 400, count: 10, format: 'jpg' },
  news: { width: 600, height: 400, count: 8, format: 'jpg' },
  shop: { width: 600, height: 600, count: 4, format: 'jpg' },
  product: { width: 600, height: 600, count: 4, format: 'jpg' },
  shows: { width: 600, height: 800, count: 17, format: 'jpg' },
  actor: { width: 400, height: 500, count: 6, format: 'jpg' },
  banner: { width: 1920, height: 600, count: 3, format: 'jpg' },
  testimonial: { width: 200, height: 200, count: 9, format: 'png' },
  brand: { width: 200, height: 100, count: 2, format: 'png' },
};

// Colors for different categories (using placeholder.com compatible colors)
const categoryColors = {
  hero: ['02095b', 'ff8c00', '0066cc'],
  about: ['02095b', 'ff8c00'],
  team: ['02095b', 'ff8c00', '0066cc'],
  news: ['02095b', 'ff8c00'],
  shop: ['02095b', 'ff8c00'],
  product: ['02095b', 'ff8c00'],
  shows: ['02095b', 'ff8c00', '0066cc'],
  actor: ['02095b', 'ff8c00'],
  banner: ['02095b', 'ff8c00'],
  testimonial: ['02095b', 'ff8c00'],
  brand: ['ffffff', '02095b'],
};

function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        https.get(response.headers.location, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

function generatePlaceholderURL(width, height, bgColor, textColor, text) {
  // Using placeholder.com service
  const encodedText = encodeURIComponent(text);
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function generateAllImages() {
  const publicDir = path.join(__dirname, '..', 'public', 'assets', 'img');
  
  console.log('🖼️  Generating placeholder images from placeholder service...\n');
  
  for (const [category, config] of Object.entries(imageConfig)) {
    const categoryDir = path.join(publicDir, category);
    ensureDirectoryExists(categoryDir);
    
    const colors = categoryColors[category] || ['02095b'];
    
    for (let i = 1; i <= config.count; i++) {
      const bgColor = colors[i % colors.length];
      const textColor = bgColor === 'ffffff' ? '02095b' : 'ffffff';
      
      let filename;
      if (category === 'hero') {
        filename = `hero-${i}.${config.format}`;
      } else if (category === 'brand') {
        filename = i === 1 ? `01.${config.format}` : `${i.toString().padStart(2, '0')}.${config.format}`;
      } else if (i === 1 && category !== 'shows') {
        filename = `${category}.${config.format}`;
      } else {
        filename = `${category}-${i}.${config.format}`;
      }
      
      const filePath = path.join(categoryDir, filename);
      const text = `${category.toUpperCase()} ${i.toString().padStart(2, '0')}`;
      const url = generatePlaceholderURL(config.width, config.height, bgColor, textColor, text);
      
      try {
        await downloadImage(url, filePath);
        console.log(`✅ Generated: ${category}/${filename}`);
      } catch (error) {
        console.error(`❌ Failed to generate ${category}/${filename}:`, error.message);
        // Create a simple colored SVG as fallback
        const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(config.width, config.height) / 10}" 
        fill="#${textColor}" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
    ${text}
  </text>
</svg>`;
        fs.writeFileSync(filePath.replace(/\.(jpg|png)$/, '.svg'), svg);
        console.log(`⚠️  Created SVG fallback: ${category}/${filename.replace(/\.(jpg|png)$/, '.svg')}`);
      }
    }
  }
  
  // Generate additional specific images
  const additionalImages = [
    { path: 'shape.png', width: 500, height: 500, text: 'SHAPE', bg: '02095b', textColor: 'ffffff' },
    { path: 'breadcrumb.jpg', width: 1920, height: 400, text: 'BREADCRUMB', bg: '02095b', textColor: 'ffffff' },
    { path: 'contact-bg.jpg', width: 1920, height: 600, text: 'CONTACT BG', bg: '02095b', textColor: 'ffffff' },
    { path: 'choose-bg.jpg', width: 1920, height: 600, text: 'CHOOSE BG', bg: '02095b', textColor: 'ffffff' },
    { path: 'video_bg.jpg', width: 1920, height: 1080, text: 'VIDEO BG', bg: '02095b', textColor: 'ffffff' },
  ];
  
  for (const img of additionalImages) {
    const filePath = path.join(publicDir, img.path);
    const url = generatePlaceholderURL(img.width, img.height, img.bg, img.textColor, img.text);
    
    try {
      await downloadImage(url, filePath);
      console.log(`✅ Generated: ${img.path}`);
    } catch (error) {
      console.error(`❌ Failed to generate ${img.path}:`, error.message);
    }
  }
  
  console.log('\n✅ Image generation complete!');
  console.log('Note: Some images may be SVG fallbacks if download failed.');
}

// Run the generator
generateAllImages().catch(console.error);


