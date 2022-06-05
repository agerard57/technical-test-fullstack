import puppeteer from "puppeteer";

jest.useFakeTimers();

describe("Should go to the user profile page and render", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("navigates to the about page", async () => {
    await page.goto("http://localhost:3000/user/243051");
    await page.waitForSelector("#userProfile");
    const text = await page.$eval(
      "#userProfile",
      (e: { textContent: unknown }) => e.textContent
    );
    expect(text).toContain("Profile page");
  }, 50000);
  afterAll(() => browser.close());
});
