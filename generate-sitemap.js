const sm = require('sitemap')
const fs = require('fs');
const meta = require('./shared/seo');

const sitemap = sm.createSitemap({
    hostname: 'https://www.cuistotducoin.com',
    cacheTime: 600000
})

for (var metaPage in meta) {
    if (meta[metaPage].noindex !== true) {
        sitemap.add(meta[metaPage].href);
    }
};

console.log(__dirname);
console.log("/public/sitemap.xml");
console.log(__dirname + "/public/sitemap.xml")

fs.writeFileSync(__dirname + "/public/sitemap.xml", sitemap.toXML());