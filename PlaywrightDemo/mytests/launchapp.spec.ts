import{test,expect,Browser,Page}from'@playwright/test';
import type Locator = require('@playwright/test');
import{webkit,chromium,firefox}from'playwright';

test('launch application',async({})=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/');
    //validation
    await expect(page).toHaveTitle('Demo Web Shop');
    await browser.close();
});
