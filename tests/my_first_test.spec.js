const { test, expect } = require("@playwright/test");
// const { hello, helloworld } = require("./demo/hii");
// console.log(hello());
// console.log(helloworld());

test('My first test', async ({page}) => {
    await page.goto ('https://playwright.dev/docs/writing-tests')
    await expect(page).toHaveTitle('Writing tests | Playwright')
}
)