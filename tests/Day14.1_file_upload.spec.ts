import {test,expect } from "@playwright/test";

test("Single File upload validation", async ({page})=>
{

    await page.goto("https://sdetqa.vercel.app/autoplay")
  const singleInput =  page.locator('#singleFileInput')
  const uploadSingleFile =  page.getByRole('button', {name : 'Upload Single File'})
  const singleFileUploadMessage =  page.locator('#singleFileStatus')

//await singleInput.setInputFiles('upload/test1.txt')
await singleInput.setInputFiles('upload/test1.pdf') // this will replace the previous file selection with new file selection
await uploadSingleFile.click()
await page.waitForTimeout(5000)

await expect(singleFileUploadMessage).toHaveText(/Single file selected/)


})



test.skip("Multiple File upload validation", async ({page})=>
{

await page.goto("https://sdetqa.vercel.app/autoplay")
  const multipleFilesInput =  page.locator('#multipleFilesInput') // file selection 
  const uploadMultipleFiles =  page.getByRole('button', {name : 'Upload Multiple Files'})
  const multipleFilesUploadMessage =  page.locator('#multipleFilesStatus')



await multipleFilesInput.setInputFiles(['upload/test1.txt', 'upload/test2.txt'])
await uploadMultipleFiles.click()
await page.waitForTimeout(5000)

await expect(multipleFilesUploadMessage).toHaveText(/Multiple files selected:/)


})