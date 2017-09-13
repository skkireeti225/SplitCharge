import { RealtimeAppsPage } from './app.po';

describe('realtime-apps App', function() {
  let page: RealtimeAppsPage;

  beforeEach(() => {
    page = new RealtimeAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
