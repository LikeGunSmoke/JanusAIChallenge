/*

baseURL: if hrefs are relative pass in a base url ie: https://amazon.com/ for complete links, otherwise pass in an empty string

*/

export interface SiteInterface {
  baseURL: string,
  navigate: Function,
  selectors: {items: string, title: string, url: string, price: string},
  terms: string[]
};