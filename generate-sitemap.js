const sm = require('sitemap')
const path = require('path')
const fs = require('fs');
import { getMetaInfo } from "../../shared/seo";

const sitemap = sm.createSitemap({
    hostname: 'https://www.cuistotducoin.com',
    cacheTime: 600000
})

const metaInfo = getMetaInfo();
metaInfo.forEach(function (metaPage) {
    if (metaPage.noindex !== true) {
        sitemap.add({
            changefreq: "daily",
            priority: 0.9,
            url: `${metaPage.href}`,
        });
    }
});

fs.writeFileSync("static/sitemap.xml", sitemap.toString());