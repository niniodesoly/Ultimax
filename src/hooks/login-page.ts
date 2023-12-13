import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly user: Locator;
    readonly proceedBoton: Locator;
    readonly diaCalendario: Locator;
    readonly horas: Locator;

  constructor(page: Page) {
    this.page = page;
    this.user = page.locator("//input[@class='form-control userID']");
    this.proceedBoton = page.locator("//button[text()[normalize-space()='Proceed']]");
    this.diaCalendario = page.locator("(//div[@class='fullEffort'])[2]");
    this.horas = page.locator("(//input[@ng-disabled='isEffortEnabled(assignedtask.effortDisabled);'])[1]");
  }

  async filtraUsuario(username: string) {
    await this.user.fill(username);
    await this.page.waitForTimeout(3000);
    await this.proceedBoton.click();
    await this.page.waitForTimeout(3000);
  }

  async clicDia() {
    await this.diaCalendario.click();
    await this.page.waitForTimeout(3000);
    await this.horas.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);
    await this.horas.fill("0");
    await this.page.waitForTimeout(2000);
    await this.horas.fill("9");
    await this.page.waitForTimeout(2000);
  }
}