// @ts-check
const { test, expect } = require('@playwright/test');

let context;
let page;
test.beforeAll(async ({browser}) => {
  context = await browser.newContext();
  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    }
  );
  page = await context.newPage();
})

test.afterAll(async () => {
  await context.tracing.stop({ path: 'test2.zip' })

})

test('has title', async ({}) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  // Click the get started link.
  await page.getByRole('link', { name: 'star' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

});
