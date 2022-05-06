import { Page } from '@playwright/test';

export class SearchAmazon {

  page: Page;
  date!: string;
  title!: string;
  url!: string;
  price!: number;
  data!: {title: string, url: string, date: string, price: number}[];
  bestPrices!: {title: string, url: string, date: string, price: number}[];

  constructor(page: Page) {
    this.page = page;
  }

  public async navigate(text: string) {
    await this.page.goto(`https://amazon.com/s?k=${text}`);
  }

  public async listItems() {
    this.bestPrices = []
    const listings = await this.page.evaluate(() => {
      const items: NodeListOf<Element> = document.querySelectorAll('.s-card-container');
      this.data = [];
      items.forEach((item) => {
        let price: number = Number(item.querySelector('.a-offscreen')?.innerHTML.substring(1).replace(/,/g,''));
        let date: string = new Date().toLocaleDateString();
        let title: string = item.querySelector('h2')?.innerText;
        let url: string = item.querySelector('a')?.getAttribute('href');
        this.data.push({title, url, price, date});
      });
      this.data.sort((a, b) => a.price-b.price);
      return this.data;
    });
    for (let i = 0; i < 3; i++) {
      this.bestPrices.push(listings[i]);
    };
    return this.bestPrices;
  };

};
