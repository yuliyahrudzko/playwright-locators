const { test, expect } = require('@playwright/test');

test('Test xpath locator', async ({page}) => {
  await page.goto(`file:///D:/ItechArt/%D0%A6%D0%B5%D0%BB%D0%B8/JavaScript/playwright/2.Locators/locators/Table.html`);

  await expect(page
    .locator('//table//tr[count(//table//td[2]/*[text()="SimpleDataset"]/preceding::tr)]//td[count(//*/th[@data-title="Updated"]/preceding-sibling::th) +1]'))
    .toBeVisible();
})