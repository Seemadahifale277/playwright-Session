import {Locator ,Page }from "@playwright/test"


export class Day2
{

 private readonly titleValue : Locator

constructor(page:Page)
{
    this.titleValue = page.getByTitle('Total test runs');
}





gettitleValue(): Locator
{
    // return this.titleValue

   const text = this.titleValue
   return text
}


}