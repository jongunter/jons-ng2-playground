import { JonsNg2PlaygroundPage } from './app.po';

describe('jons-ng2-playground App', function() {
  let page: JonsNg2PlaygroundPage;

  beforeEach(() => {
    page = new JonsNg2PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
