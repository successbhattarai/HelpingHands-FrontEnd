const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given("Test Register functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/register");
    await driver.findElement(By.id("userFullName")).sendKeys("test test");
    await driver.findElement(By.id("userContactNumber")).sendKeys("9808775863");
    await driver.findElement(By.id("userEmailAddress")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("userPassword")).sendKeys("test1234");
    await driver.findElement(By.id("userConfirmPassword")).sendKeys("test1234");
  await driver.sleep(delay);
  await driver.findElement(By.id("register1")).click();

  await driver.wait(until.elementLocated(By.id("SignupForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("SignupForm"))));
  // await driver.quit();
});
Given("Test Login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("userEmailAddress")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("userPassword")).sendKeys("test1234");
  await driver.sleep(delay);
  await driver.findElement(By.id("login1")).click();

  await driver.wait(until.elementLocated(By.id("LoginForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("LoginForm"))));
  // await driver.quit();
});
