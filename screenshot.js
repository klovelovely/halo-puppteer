const puppeteer = require('puppeteer');
const filenamify = require('filenamify');

(async () => {
    console.log(process.argv);
    let url = process.argv[2] || 'https://www.bing.com/';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: `screenshot-${filenamify(url)}-${Date.now()}.png`});

    await browser.close();
})();