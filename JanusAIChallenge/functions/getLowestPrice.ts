import { Page } from '@playwright/test';
import { ScrapeLowestPrice } from '../models/ScrapeLowestPrice';
import generateReport  from './generateReport';
import { SiteInterface } from '../interfaces/SiteInterface';

const getLowestPrice = async (page: Page, site: SiteInterface, testName: string = 'NewTest', resultsPerTerm: number = 3) => {

  let lowestPrice = [];
  for (const term of site.terms) {
    const test = new ScrapeLowestPrice(page);
    await test.navigate(site.navigate(term));
    const listings = await test.listItems(site.selectors, resultsPerTerm);
    lowestPrice.push(listings);
  };
  lowestPrice = lowestPrice.flat(2);
  generateReport(site.baseURL, lowestPrice, testName);
};

export default getLowestPrice;
