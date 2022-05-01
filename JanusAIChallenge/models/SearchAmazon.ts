import { Locator, Page } from '@playwright/test';

export class SearchAmazon {

  page: Page;
  searchTermInput: Locator;
  data: any[];
  date: string;
  title: string;
  url: string;
  price: number;
  sortedData: any[];

  constructor(page: Page) {
    this.page = page;
    this.searchTermInput = page.locator('[aria-label="Search"]')
  }

  public async navigate() {
    await this.page.goto('https://amazon.com/');
  }

  public async search(text: string) {
    await this.searchTermInput.fill(text);
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.locator('[aria-label="Search"]').press('Enter')
  ]);
  }

  public async listItems() {
    const listings = await this.page.$$eval('.s-card-container', items => {
      this.data = [];
      items.forEach((item) => {
        // listing may be displayed without price, only include purchasable listings
        if (item.querySelector('.a-offscreen') !== null) {
          let date = new Date().toLocaleDateString();
          let title = item.querySelector('h2').innerText;
          let url = item.querySelector('a').getAttribute('href');
          let price = Number(item.querySelector('.a-offscreen').innerHTML.substring(1).replace(/,/g,''));
          this.data.push({title, url, price, date});
        };
      });
      this.sortedData = this.data.sort((a,b) => a.price-b.price);
      return this.sortedData;
    });
    return listings
  };

};
