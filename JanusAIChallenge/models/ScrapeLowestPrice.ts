import { Page } from '@playwright/test';

export class ScrapeLowestPrice {

  page: Page;
  date!: string;
  title!: string;
  url!: string;
  price!: number;
  data!: {title: string, url: string, date: string, price: number}[];
  lowestPrices!: {title: string, url: string, date: string, price: number}[];

  constructor(page: Page) {
    this.page = page;
  }

  public async navigate(text: string) {
    await this.page.goto(text);
  }

  public async listItems(selectors: {items: string, title: string, url: string, price: string}, resultsPerListing: number) {
    this.lowestPrices = []
    const listings = await this.page.evaluate((selectors) => {
      const items: NodeListOf<Element> = document.querySelectorAll(selectors.items);
      this.data = [];
      items.forEach((item: Element) => {
        let price: number = Number(item.querySelector(selectors.price)?.innerHTML.substring(1).replace(/,/g,''));
        let date: string = new Date().toLocaleDateString();
        let title: string = item.querySelector(selectors.title)?.innerText;
        let url: string = item.querySelector(selectors.url)?.getAttribute('href');
        this.data.push({title, url, price, date});
      });
      this.data.sort((a, b) => a.price-b.price);
      return this.data;
    }, selectors);
    for (let i = 0; i < resultsPerListing; i++) {
      this.lowestPrices.push(listings[i]);
    };
    return this.lowestPrices;
  };

};
