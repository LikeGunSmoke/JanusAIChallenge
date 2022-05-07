import { SiteInterface } from '../interfaces/SiteInterface';

const ebay: SiteInterface = {
  baseURL: '',
  navigate: (term: string) => `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${term}&_sacat=0`,
  selectors: {items: 'ul>.s-item', title: 'h3', url: '.s-item__link', price: '.s-item__price'},
  terms: ['nvidia 3060', 'nvidia 3070', 'nvidia 3080'],
};

export default ebay;