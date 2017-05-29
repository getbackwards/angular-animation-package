import { AngularAnimationPackagePage } from './app.po';

describe('angular-animation-package App', () => {
  let page: AngularAnimationPackagePage;

  beforeEach(() => {
    page = new AngularAnimationPackagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
