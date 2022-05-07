import { SiteInterface } from '../interfaces/SiteInterface';

const amazon: SiteInterface = {
  baseURL: 'https://amazon.com',
  navigate: (term: string) => `https://amazon.com/s?k=${term}`,
  selectors: {items: '.s-card-container', title: 'h2', url: 'a', price: '.a-offscreen'},
  terms: ['nvidia 3060', 'nvidia 3070', 'nvidia 3080'],
};

export default amazon;