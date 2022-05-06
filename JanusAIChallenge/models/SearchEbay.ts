import { Page } from "playwright";

export class SearchEbay {

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
    await this.page.goto(`https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${text}&_sacat=0`);
  }

  public async listItems() {
    this.bestPrices = []
    const listings = await this.page.evaluate(() => {
      const items: NodeListOf<Element> = document.querySelectorAll('ul>.s-item');
      this.data = [];
      items.forEach((item) => {
        let price: number = Number(item.querySelector('.s-item__price')?.innerHTML.substring(1).replace(/,/g,''));
        let date: string = new Date().toLocaleDateString();
        let title: string = item.querySelector('h3')?.innerText;
        let url: string = item.querySelector('.s-item__link')?.getAttribute('href');
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