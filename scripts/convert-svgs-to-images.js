const fs = require('fs');
const path = require('path');

// This script converts SVG placeholders to JPG/PNG
// Requires: npm install sharp (or use ImageMagick)

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('⚠️  Sharp not installed. Install with: npm install sharp');
  console.log('Alternatively, use ImageMagick:');
  console.log('  find public/assets/img -name "*.svg" -exec convert "$1" "${1%.svg}.jpg" _ {} \\;');
  process.exit(1);
}

function convertSVGToImage(svgPath, outputPath, format = 'jpg') {
  return sharp(svgPath)
    .toFormat(format, { quality: 90 })
    .toFile(outputPath);
}

function findAndConvertSVGs(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      findAndConvertSVGs(fullPath);
    } else if (file.name.endsWith('.svg')) {
      const outputPath = fullPath.replace('.svg', file.name.includes('brand') || file.name.includes('testimonial') ? '.png' : '.jpg');
      
      convertSVGToImage(fullPath, outputPath)
        .then(() => {
          console.log(`✅ Converted: ${path.relative(process.cwd(), fullPath)} → ${path.relative(process.cwd(), outputPath)}`);
        })
        .catch(err => {
          console.error(`❌ Failed to convert ${fullPath}:`, err.message);
        });
    }
  }
}

const imgDir = path.join(__dirname, '..', 'public', 'assets', 'img');
console.log('🖼️  Converting SVG placeholders to images...\n');
findAndConvertSVGs(imgDir);
console.log('\n✅ Conversion complete!');


