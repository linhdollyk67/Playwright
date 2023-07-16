import { expect, test } from "@playwright/test";

test('Assertions Demo', async({page}) => {
await page.goto('https://kitchen.applitools.com/')

// 06:37  Check element Present/Not present
await expect(page.locator('text=The Kitchen')).toHaveCount(1)
await page.$('text=The Kitchen')

// 11:30  Check element Visible/Hidden
await expect(page.locator('text=The Kitchen')).toBeVisible()
await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

// 12:17  Check element  Enabled/Disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled()
await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

// 15:23  How to add Soft Assertions
// do not terminate test execution
// mark the test as failed
await expect.soft(page.locator('text=The Kitchen')).toHaveText('XYZ')

// 16:50  Check element Text matches value or not
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

// 18:12  *Assert Element attribute 
 await expect(page.locator('selector')).toHaveAttribute('class', /.*value/)
await expect(locator).toHaveClass('selected row');

// 23:10  *Screenshot Moment

// 23:12  Check Url of the page
await expect(page).toHaveURL(/kitchen.applitools.com/);

// 24:28  Check Title of the page
await expect(page).toHaveTitle(/.*Kitchen/);

// 25:36  Check Page matches screenshot Visual Validation
await expect(page).toHaveScreenshot();

await page.close
})