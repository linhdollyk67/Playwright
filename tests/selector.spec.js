const { test, expect } = require("@playwright/test");

test('Selectors Demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    // await page.pause()
    await page.click('id=user-name')
    await page.locator("#user-name").fill('standard')
    await page.locator('xpath = //input[@id="user-name"]').fill('standard_user')
    await page.click('id=password')
    await page.locator('[id="password"]').fill('standard_user')
    await page.locator('id=password').fill('sauce')
    await page.locator('//input[@id="password"]').fill('secret_sauce')
    // await page.click('#login-button')

    await page.waitForSelector('input:has-text("LOGIN")')
    await expect(page.locator('input:has-text("LOGIN")')).toHaveCount(1)
    await page.locator('input:has-text("LOGIN")').click()

    page.close;

}
)