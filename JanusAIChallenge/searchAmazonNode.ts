import { chromium } from 'playwright';
import { SearchAmazon }from './models/SearchAmazon';
import generateReport from './generateReport';


const searchAmazonNode = (() => {
  async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const nvidia3060_searchPage = new SearchAmazon(page);
    // await nvidia3060_searchPage.navigate();
    // await nvidia3060_searchPage.search('nvidia 3060');
    const nvidia3060_listings = await nvidia3060_searchPage.listItems();
    generateReport(nvidia3060_listings, 'nvidia3060');
  };
});

export default searchAmazonNode;