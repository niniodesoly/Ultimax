import {Given,When,Then, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium,Browser,Page, expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { LoginPage } from "../../hooks/login-page";

setDefaultTimeout(60 * 1000 * 2)

         
         Given('Usuario navega en la aplicacion', async function () {
           await pageFixture.page.goto("https://timesheet.ultimatix.net/timesheet/Login/bridge?");
           /*wait pageFixture.page.setViewportSize({
            width: 1920,
            height: 1080
          });*/
           await pageFixture.page.waitForTimeout(5000);
         });

         Given('Usuario ingresa el username as {string}', async function (username) {
            const loginPage = new LoginPage(pageFixture.page);
            await loginPage.filtraUsuario(username);
            //await pageFixture.page.locator("//input[@class='form-control userID']").fill(username);
            await pageFixture.page.waitForTimeout(3000);
         });
/*
         When('Usuario hace click en el boton de proceed', async function () {
            await pageFixture.page.locator("//button[text()[normalize-space()='Proceed']]").click();
            await pageFixture.page.waitForTimeout(3000);
           });*/
         
         When('Usuario hace click en el boton de easy', async function () {
            await pageFixture.page.locator("(//button[contains(@class,'btn auth-btns')])[1]").click();
            await pageFixture.page.waitForTimeout(10000);
         });

         When('Usuario hace click en el boton de autocode', async function () {
            await pageFixture.page.locator("(//button[contains(@class,'btn auth-btns')])[2]").click();
            await pageFixture.page.waitForTimeout(12000);
            await pageFixture.page.locator("//button[@type='submit']").click();
            await pageFixture.page.waitForTimeout(5000);
         });

         When('Usuario hace click en el boton de dia', async function () {
            const loginPage = new LoginPage(pageFixture.page);
            await loginPage.clicDia();
          /*
          await pageFixture.page.locator("(//div[@class='fullEffort'])[2]").click();
          await pageFixture.page.waitForTimeout(3000);
          await pageFixture.page.locator("(//input[@ng-disabled='isEffortEnabled(assignedtask.effortDisabled);'])[1]").scrollIntoViewIfNeeded();
          await pageFixture.page.waitForTimeout(2000);
          await pageFixture.page.locator("(//input[@ng-disabled='isEffortEnabled(assignedtask.effortDisabled);'])[1]").fill("0");
          await pageFixture.page.waitForTimeout(2000);
          await pageFixture.page.locator("(//input[@ng-disabled='isEffortEnabled(assignedtask.effortDisabled);'])[1]").fill("9");
          await pageFixture.page.waitForTimeout(2000);*/
         });

         When('Usuario hace click en el boton de submit', async function () {
            await pageFixture.page.locator("(//input[@class='button buttonClass'])[2]").scrollIntoViewIfNeeded();
            await pageFixture.page.waitForTimeout(2000);
            await pageFixture.page.locator("(//input[@class='button buttonClass'])[2]").click();
            await pageFixture.page.waitForTimeout(3000);
         });
         