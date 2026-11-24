

import {test,expect, chromium} from "@playwright/test";

test("video capture", async ()=>
{

const browser = await chromium.launch()

const context = await browser.newContext({
    recordVideo:
    {
        dir : 'video',
        size  :
        {
            width : 1280,
            height : 800
        }
    }

})




})