const fs = require('fs');
const path = require('path');

// Image dimensions and categories
const imageConfig = {
  hero: { width: 1920, height: 1080, count: 9 },
  about: { width: 800, height: 600, count: 7 },
  team: { width: 400, height: 400, count: 10 },
  news: { width: 600, height: 400, count: 8 },
  shop: { width: 600, height: 600, count: 4 },
  product: { width: 600, height: 600, count: 4 },
  shows: { width: 600, height: 800, count: 17 },
  actor: { width: 400, height: 500, count: 6 },
  banner: { width: 1920, height: 600, count: 3 },
  testimonial: { width: 200, height: 200, count: 9 },
  brand: { width: 200, height: 100, count: 2 },
};

// Colors for different categories
const categoryColors = {
  hero: ['#02095b', '#ff8c00', '#0066cc'],
  about: ['#02095b', '#ff8c00'],
  team: ['#02095b', '#ff8c00', '#0066cc'],
  news: ['#02095b', '#ff8c00'],
  shop: ['#02095b', '#ff8c00'],
  product: ['#02095b', '#ff8c00'],
  shows: ['#02095b', '#ff8c00', '#0066cc'],
  actor: ['#02095b', '#ff8c00'],
  banner: ['#02095b', '#ff8c00'],
  testimonial: ['#02095b', '#ff8c00'],
  brand: ['#ffffff', '#02095b'],
};

function generateSVGPlaceholder(width, height, text, bgColor, textColor = '#ffffff') {
  const fontSize = Math.min(width, height) / 10;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${fontSize}" 
        fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
    ${text}
  </text>
</svg>`;
}

function generatePlaceholderImage(category, index, width, height) {
  const colors = categoryColors[category] || ['#02095b'];
  const bgColor = colors[index % colors.length];
  const textColor = bgColor === '#ffffff' ? '#02095b' : '#ffffff';
  const text = `${category.toUpperCase()} ${index.toString().padStart(2, '0')}`;
  
  return generateSVGPlaceholder(width, height, text, bgColor, textColor);
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateAllPlaceholders() {
  const publicDir = path.join(__dirname, '..', 'public', 'assets', 'img');
  
  Object.entries(imageConfig).forEach(([category, config]) => {
    const categoryDir = path.join(publicDir, category);
    ensureDirectoryExists(categoryDir);
    
    for (let i = 1; i <= config.count; i++) {
      const filename = i === 1 && category !== 'hero' && category !== 'shows' 
        ? `${category}.jpg` 
        : `${category}-${i}.jpg`;
      
      // For hero, use hero-1.jpg, hero-2.jpg, etc.
      if (category === 'hero') {
        const heroFilename = `hero-${i}.jpg`;
        const filePath = path.join(categoryDir, heroFilename);
        const svg = generatePlaceholderImage(category, i, config.width, config.height);
        fs.writeFileSync(filePath.replace('.jpg', '.svg'), svg);
        console.log(`Generated: ${category}/${heroFilename.replace('.jpg', '.svg')}`);
      } else if (category === 'brand') {
        const brandFilename = i === 1 ? '01.png' : `${i.toString().padStart(2, '0')}.png`;
        const filePath = path.join(categoryDir, brandFilename);
        const svg = generatePlaceholderImage(category, i, config.width, config.height);
        fs.writeFileSync(filePath.replace('.png', '.svg'), svg);
        console.log(`Generated: ${category}/${brandFilename.replace('.png', '.svg')}`);
      } else {
        const filePath = path.join(categoryDir, filename);
        const svg = generatePlaceholderImage(category, i, config.width, config.height);
        fs.writeFileSync(filePath.replace('.jpg', '.svg'), svg);
        console.log(`Generated: ${category}/${filename.replace('.jpg', '.svg')}`);
      }
    }
  });
  
  // Generate additional specific images
  const additionalImages = [
    { path: 'shape.png', width: 500, height: 500, text: 'SHAPE', bg: '#02095b' },
    { path: 'breadcrumb.jpg', width: 1920, height: 400, text: 'BREADCRUMB', bg: '#02095b' },
    { path: 'contact-bg.jpg', width: 1920, height: 600, text: 'CONTACT BG', bg: '#02095b' },
    { path: 'choose-bg.jpg', width: 1920, height: 600, text: 'CHOOSE BG', bg: '#02095b' },
    { path: 'video_bg.jpg', width: 1920, height: 1080, text: 'VIDEO BG', bg: '#02095b' },
  ];
  
  additionalImages.forEach(img => {
    const filePath = path.join(publicDir, img.path);
    const svg = generateSVGPlaceholder(img.width, img.height, img.text, img.bg);
    fs.writeFileSync(filePath.replace(/\.(jpg|png)$/, '.svg'), svg);
    console.log(`Generated: ${img.path.replace(/\.(jpg|png)$/, '.svg')}`);
  });
  
  console.log('\n✅ All placeholder images generated!');
  console.log('Note: These are SVG placeholders. For production, replace with actual images.');
}

// Run the generator
generateAllPlaceholders();


