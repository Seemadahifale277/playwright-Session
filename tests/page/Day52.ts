import {Locator ,Page }from "@playwright/test"


export class Day52
{
private readonly email : Locator
private readonly password : Locator
private readonly submit : Locator
private readonly logOutText : Locator
private readonly validationError : Locator

constructor(page:Page)
{
    this.email =  page.locator("#Email")
    this.password =  page.locator('#Password')
    this.submit =  page.locator('[value="Log in"]')
    this.logOutText = page.locator('.ico-logout')
    this.validationError = page.locator('.validation-summary-errors')
}



async login(email : string , password : string , Validity : string)
{
await this.email.fill(email)
await this.password.fill(password)
await this.submit.click()
}


getValidation() : {logOutText : Locator, validationError : Locator }
{
    
return{
    logOutText : this.logOutText,
    validationError : this.validationError
}
}



}