import { chromium } from 'playwright';
import getLowestPrice from './functions/getLowestPrice';
import amazon from './sites/amazon';
import ebay from './sites/ebay';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await getLowestPrice(page, amazon, 'amazon', 5);
  await getLowestPrice(page, ebay, 'ebay');
  await browser.close();
})();
