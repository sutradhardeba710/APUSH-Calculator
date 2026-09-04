import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const outDir = path.resolve('public');

// Vector Master SVG Icon
// Concept:
// - Professional sapphire blue rounded squircle with fine edge glow
// - Academic Graduation Mortarboard cap at the top (symbolizing AP college course / credit)
// - Golden tassel flowing down the right
// - Bold modern geometric 'AP' monogram
// - Ascending score status dots / calculator pulse
export const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="45%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" flood-color="#0f172a" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Base Rounded Squircle -->
  <rect x="5" y="5" width="118" height="118" rx="28" fill="url(#bgGrad)"/>
  <rect x="6" y="6" width="116" height="116" rx="27" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>

  <!-- Academic Graduation Cap (Mortarboard) -->
  <g filter="url(#badgeShadow)">
    <!-- Mortarboard Diamond Top -->
    <polygon points="64,18 106,34 64,50 22,34" fill="url(#capGrad)"/>
    
    <!-- Cap Skull Base -->
    <path d="M37,40.5 L37,51 C37,60 91,60 91,51 L91,40.5 C78,47.5 50,47.5 37,40.5 Z" fill="#cbd5e1"/>

    <!-- Golden Tassel Ribbon -->
    <path d="M64,34 Q82,37 94,43 Q99,49 100,58" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="64" cy="34" r="3.5" fill="url(#goldGrad)"/>
    
    <!-- Golden Tassel Drop Ribbon & Fringe -->
    <circle cx="100" cy="60" r="3" fill="url(#goldGrad)"/>
    <rect x="98" y="62" width="4" height="6" rx="1.5" fill="url(#goldGrad)"/>
  </g>

  <!-- Bold Modern 'AP' Monogram Typography -->
  <g fill="url(#textGrad)" filter="url(#badgeShadow)">
    <!-- Letter 'A' -->
    <path d="M29,106 L43.5,59 L56.5,59 L71,106 L58.5,106 L55,93.5 L45,93.5 L41.5,106 Z M47.8,83.5 L52.2,83.5 L50,72 Z" fill-rule="evenodd"/>
    
    <!-- Letter 'P' -->
    <path d="M72.5,106 L72.5,59 L89.5,59 C97.5,59 102.5,63.5 102.5,71 C102.5,78.5 97.5,83 89.5,83 L84,83 L84,106 Z M84,73.5 L89,73.5 C91.8,73.5 93.2,72.3 93.2,71 C93.2,69.7 91.8,68.5 89,68.5 L84,68.5 Z" fill-rule="evenodd"/>
  </g>

  <!-- Score 5 Excellence Star Badge (Golden Star in Bottom Right) -->
  <g filter="url(#badgeShadow)" transform="translate(104, 98)">
    <circle cx="0" cy="0" r="6" fill="url(#goldGrad)"/>
    <polygon points="0,-3.5 1,-1 3.5,-0.8 1.6,1 2.2,3.5 0,2.1 -2.2,3.5 -1.6,1 -3.5,-0.8 -1,-1" fill="#ffffff"/>
  </g>
</svg>`;

async function run() {
  // 1. Write favicon.svg
  fs.writeFileSync(path.join(outDir, 'favicon.svg'), logoSvg);
  console.log('Wrote public/favicon.svg');

  // 2. Generate multi-size PNGs and favicon.ico
  const buf16 = await sharp(Buffer.from(logoSvg)).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(Buffer.from(logoSvg)).resize(32, 32).png().toBuffer();
  const buf48 = await sharp(Buffer.from(logoSvg)).resize(48, 48).png().toBuffer();
  const buf64 = await sharp(Buffer.from(logoSvg)).resize(64, 64).png().toBuffer();
  const buf128 = await sharp(Buffer.from(logoSvg)).resize(128, 128).png().toBuffer();
  const buf192 = await sharp(Buffer.from(logoSvg)).resize(192, 192).png().toBuffer();
  const buf512 = await sharp(Buffer.from(logoSvg)).resize(512, 512).png().toBuffer();

  fs.writeFileSync(path.join(outDir, 'favicon-32x32.png'), buf32);
  fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), buf192);

  // Write a 32x32 PNG as favicon.ico (modern browsers and platforms accept PNG-based ICOs)
  // Or write basic ICO header with 32x32 and 16x16 PNG entries
  function createIco(images) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // ICO type
    header.writeUInt16LE(images.length, 4); // number of images

    let offset = 6 + (16 * images.length);
    const directoryEntries = [];
    const imageBuffers = [];

    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // size of image data
      entry.writeUInt32LE(offset, 12); // offset of image data

      directoryEntries.push(entry);
      imageBuffers.push(img.buffer);
      offset += img.buffer.length;
    }

    return Buffer.concat([header, ...directoryEntries, ...imageBuffers]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 },
  ]);

  fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);
  console.log('Generated public/favicon.ico (multi-size: 16x16, 32x32, 48x48)');

  // Also save a high-res brand icon in public/images/logo.svg and public/images/logo.png
  fs.mkdirSync(path.join(outDir, 'images'), { recursive: true });
  fs.writeFileSync(path.join(outDir, 'images', 'logo.svg'), logoSvg);
  fs.writeFileSync(path.join(outDir, 'images', 'logo.png'), buf512);
  console.log('Saved public/images/logo.svg and public/images/logo.png');
}

run().catch(console.error);
