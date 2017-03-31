import { FishlyPage } from './app.po';

describe('fishly App', () => {
  let page: FishlyPage;

  beforeEach(() => {
    page = new FishlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
