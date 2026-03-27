const fs = require('fs');
const https = require('https');

const icons = [
  { name: 'woocommerce', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/woocommerce.svg' },
  { name: 'shopify', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/shopify.svg' },
  { name: 'prestashop', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/prestashop.svg' },
  { name: 'magento', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/magento.svg' },
  { name: 'stripe', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/stripe.svg' },
  { name: 'google-analytics', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/googleanalytics.svg' }
];

icons.forEach(icon => {
  https.get(icon.url, (res) => {
    let raw = '';
    res.on('data', chunk => raw += chunk);
    res.on('end', () => {
      fs.writeFileSync(`./public/icons/${icon.name}.svg`, raw);
      console.log(`Saved ${icon.name}`);
    });
  });
});
