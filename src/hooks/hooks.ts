import { BeforeAll,Before,AfterAll,After,AfterStep,BeforeStep, Status } from "@cucumber/cucumber";
import {chromium, Browser, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    //Inicializa el browser a usar, en este caso es Chromium.
    browser = await chromium.launch({headless: false,args:['--start-fullscreen']});
    //browser = await pageFixture['chromium'].launch({ headless: false,args:['--start-maximized']});
    //getEnv();
    //browser = await invokeBrowser();

})

//el evento Before anida todas las sentencias que se van a ejecutar antes del testeo.
Before(async function ({pickle}) {
    const scenarioName = pickle.name + "-" + pickle.id;
    context = await browser.newContext();
    //Inicializa la pagina de testeo
    //context.clearCookies();
    const page = await browser.newPage();   
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));

})

AfterStep(async function ( {pickle} ) {
    //Screenshots
    const img = await pageFixture.page.screenshot({ path:`./test-result/screenshots/${pickle.name}.png`, type: "png"});
    await this.attach(img,"image/png");

})

//el evento After anida todas las sentencias que se van a ejecutar despues del testeo.
After(async function( { pickle, result  }) {
    //Escribir en consola el status del testeo de scenario
    console.log(result?.status);
    if (result?.status == Status.FAILED)
    {
        //Screenshots
        const img = await pageFixture.page.screenshot({ path:`./test-result/screenshots/${pickle.name}.png`, type: "png"});
        await this.attach(img,"image/png");
    }
    //Cierra la pagina y el contexto
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function () {
        //CIerra el browser
        await browser.close(); 
})
