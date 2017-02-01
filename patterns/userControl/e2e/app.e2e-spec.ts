import { UserControlPage } from './app.po';

describe('user-control App', function() {
  let page: UserControlPage;

  beforeEach(() => {
    page = new UserControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
