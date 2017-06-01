import { UdemyAssignmentPage } from './app.po';

describe('udemy-assignment App', () => {
  let page: UdemyAssignmentPage;

  beforeEach(() => {
    page = new UdemyAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
