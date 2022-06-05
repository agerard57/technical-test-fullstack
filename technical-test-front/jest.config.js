export const testTimeout = 30000;
export const testMatch = ["**/?(*.)+(spec|test).[t]s"];
export const preset = "jest-puppeteer";
export const transform = {
  "^.+\\.ts$": "ts-jest",
};
export const testPathIgnorePatterns = ["/node_modules/", "dist"];
