const fs = require('fs-extra');
const path = require('path');

const assetsSrc = path.resolve(__dirname, '../assets');
const assetsDest = path.resolve(__dirname, '../dist/assets');

fs.copy(assetsSrc, assetsDest)
  .then(() => console.log('Assets copied successfully.'))
  .catch(error => {
    console.error('Error copying assets:', error);
    process.exit(1);
  });
