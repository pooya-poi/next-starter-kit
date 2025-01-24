/**
 * Generate the index file from the icons in the animated-icon directory
 * @command run command in terminal(be in the directory that this file is located) `node generatedIndex.js` 
 */

import { readdirSync, writeFileSync } from 'fs';
import { resolve, basename } from 'path';

// Folder where your icons are stored
const iconsDir = resolve('./'); // Adjust the path as needed
const indexFile = resolve(iconsDir, 'index.ts');

// Get all `.tsx` files in the folder
const files = readdirSync(iconsDir).filter(file => file.endsWith('.tsx'));

function toPascalCase(str) {
  return str
    .replace(/-./g, match => match.charAt(1).toUpperCase())
    .replace(/^\w/, c => c.toUpperCase());
}

const exports = files
  .map(file => {
    const name = basename(file, '.tsx'); // File name without extension
    const toPascalCaseName = toPascalCase(name);
    return `export { ${toPascalCaseName}Icon as ${toPascalCaseName} } from './${name}';`;
  })
  .join('\n');

// Write to the `index.ts` file
writeFileSync(indexFile, exports);

console.log('✅ Generated index.ts! 🔥');
