// This script downloads and optimizes images for the website
// It requires sharp for image processing
// npm install sharp node-fetch

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../public/assets');

// Ensure assets directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve(filepath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to optimize an image
async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    await sharp(inputPath)
      .resize(options.width || null, options.height || null, {
        fit: options.fit || 'cover',
        withoutEnlargement: true,
      })
      .toFormat(options.format || 'webp', { quality: options.quality || 80 })
      .toFile(outputPath);
    
    console.log(`Optimized: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    throw error;
  }
}

// Images to process
const images = [
  {
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    filename: 'hero-background',
    formats: ['webp'],
    sizes: [{ width: 1200, height: null, quality: 85 }]
  },
  {
    url: 'https://storage.googleapis.com/msgsndr/LXrM89iHSYvGb27k35cG/media/67a76467fc76858d0e110fef.png',
    filename: 'chelsea-bobbitt',
    formats: ['webp', 'jpg'],
    sizes: [{ width: 500, height: 600, quality: 85 }]
  }
];

// Process all images
async function processAllImages() {
  for (const image of images) {
    const tempPath = path.join(assetsDir, `${image.filename}-temp`);
    
    try {
      // Download the original image
      await downloadImage(image.url, tempPath);
      
      // Process each format and size
      for (const format of image.formats) {
        for (const size of image.sizes) {
          const outputPath = path.join(assetsDir, `${image.filename}.${format}`);
          await optimizeImage(tempPath, outputPath, {
            ...size,
            format
          });
        }
      }
      
      // Clean up temp file
      fs.unlinkSync(tempPath);
    } catch (error) {
      console.error(`Error processing ${image.filename}:`, error);
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
}

// Run the script
processAllImages().then(() => {
  console.log('All images processed successfully!');
}).catch(err => {
  console.error('Error processing images:', err);
});
