import { test } from '@playwright/test';
import getLowestPrice from '../functions/getLowestPrice';
import amazon from '../sites/amazon';
import ebay from '../sites/ebay';

/*

Write a playwright automation (https://playwright.dev/) in TypeScript that navigates to amazon.com and searches for the 3 following items:

nvidia 3060
nvidia 3070
nvidia 3080

It should find the 3 best prices (shown on the first page only) for each of the searches, and save the item, url, and current date to a csv file.

*/

test('Find best price', async ({ page }) => {

  await getLowestPrice(page, amazon, 'amazon', 5);
  await getLowestPrice(page, ebay, 'ebay');

});
