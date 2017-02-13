import { FortipiPage } from './app.po';

describe('fortipi App', function() {
  let page: FortipiPage;

  beforeEach(() => {
    page = new FortipiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
