import { RxJsDevPage } from './app.po';

describe('rx-js-dev App', () => {
  let page: RxJsDevPage;

  beforeEach(() => {
    page = new RxJsDevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
