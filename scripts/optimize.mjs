import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

async function optimizeImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimizeImages(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      console.log(`Optimizing: ${entry.name}`);
      
      try {
        const inputBuffer = await fs.readFile(fullPath);
        const image = sharp(inputBuffer);
        const metadata = await image.metadata();

        // Only resize if the image is huge to avoid upscaling
        const needsResize = metadata.width > 2000 || metadata.height > 2000;
        
        let processedImage = image;
        if (needsResize) {
          processedImage = image.resize({
            width: metadata.width > metadata.height ? 2000 : null,
            height: metadata.height >= metadata.width ? 2000 : null,
            fit: 'inside',
            withoutEnlargement: true
          });
        }

        const outputBuffer = await processedImage
          .jpeg({ quality: 75, progressive: true, mozjpeg: true })
          .toBuffer();

        // Overwrite the original file with the optimized buffer
        await fs.writeFile(fullPath, outputBuffer);
        
        console.log(`✅ Optimized: ${entry.name}`);
      } catch (error) {
        console.error(`❌ Failed to optimize ${entry.name}:`, error);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await optimizeImages(IMAGES_DIR);
  console.log('Done!');
}

main();
