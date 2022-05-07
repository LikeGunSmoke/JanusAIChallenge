import { Page } from '@playwright/test';
import { ScrapeBestPrice } from '../models/ScrapeBestPrice';
import generateReport  from './generateReport';
import { SiteInterface } from '../interfaces/SiteInterface';

const getLowestPrice = async (page: Page, site: SiteInterface, testName: string = 'NewTest', resultsPerListing: number = 3) => {

  let lowestPrice = [];
  for (const term of site.terms) {
    const test = new ScrapeBestPrice(page);
    await test.navigate(site.navigate(term));
    const listings = await test.listItems(site.selectors, resultsPerListing);
    lowestPrice.push(listings);
  };
  lowestPrice = lowestPrice.flat(2);
  generateReport(site.baseURL, lowestPrice, testName);
};

export default getLowestPrice;