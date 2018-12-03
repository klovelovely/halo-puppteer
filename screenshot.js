const puppeteer = require('puppeteer');

(async () => {
    console.log(process.argv)
    let url = process.argv[2] || 'https://www.baidu.com/';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: `screenshot-${Date.now()}.png`});

    await browser.close();
})();