import { Angular4InventoryAppPage } from './app.po';

describe('angular4-inventory-app App', () => {
  let page: Angular4InventoryAppPage;

  beforeEach(() => {
    page = new Angular4InventoryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
