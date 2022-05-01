import { test } from '@playwright/test';
import { SearchAmazon } from '../models/SearchAmazon';
import generateReport  from '../generateReport';

/*

Write a playwright automation (https://playwright.dev/) in TypeScript that navigates to amazon.com and searches for the 3 following items:

nvidia 3060
nvidia 3070
nvidia 3080

It should find the 3 best prices (shown on the first page only) for each of the searches, and save the item, url, and current date to a csv file.

*/

test('Find best price', async ({ page }) => {

  const nvidia3060_searchPage = new SearchAmazon(page);
  await nvidia3060_searchPage.navigate();
  await nvidia3060_searchPage.search('nvidia 3060');
  const nvidia3060_listings = await nvidia3060_searchPage.listItems();
  generateReport(nvidia3060_listings, 'nvidia3060');

  const nvidia3070_searchPage = new SearchAmazon(page);
  await nvidia3070_searchPage.navigate();
  await nvidia3070_searchPage.search('nvidia 3070');
  const nvidia3070_listings = await nvidia3070_searchPage.listItems();
  generateReport(nvidia3070_listings, 'nvidia3070');

  const nvidia3080_searchPage = new SearchAmazon(page);
  await nvidia3080_searchPage.navigate();
  await nvidia3080_searchPage.search('nvidia 3080');
  const nvidia3080_listings = await nvidia3080_searchPage.listItems();
  generateReport(nvidia3080_listings, 'nvidia3080');

});
