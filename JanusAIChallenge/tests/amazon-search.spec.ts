import { test } from '@playwright/test';
import { SearchAmazon } from '../models/SearchAmazon';
import { SearchEbay } from '../models/SearchEbay';
import generateReport  from '../generateReport';
import amazonSearchTerms from '../search_terms/amazon';
import ebaySearchTerms from '../search_terms/ebay';

/*

Write a playwright automation (https://playwright.dev/) in TypeScript that navigates to amazon.com and searches for the 3 following items:

nvidia 3060
nvidia 3070
nvidia 3080

It should find the 3 best prices (shown on the first page only) for each of the searches, and save the item, url, and current date to a csv file.

*/

test('Find best price', async ({ page }) => {

  const nvidiaBest = [];
  for (const term of amazonSearchTerms) {
    const nvidia = new SearchAmazon(page);
    await nvidia.navigate(term);
    const listings = await nvidia.listItems();
    nvidiaBest.push(listings)
  };
  generateReport('https://amazon.com', nvidiaBest.flat(), 'nvidia');

  const ebayBest = [];
  for (const term of ebaySearchTerms) {
    const ebay = new SearchEbay(page);
    await ebay.navigate(term);
    const listings = await ebay.listItems();
    ebayBest.push(listings)
  };
  generateReport("", ebayBest.flat(), 'ebay');

});
