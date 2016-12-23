import { BindingsPage } from './app.po';

describe('bindings App', function() {
  let page: BindingsPage;

  beforeEach(() => {
    page = new BindingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
