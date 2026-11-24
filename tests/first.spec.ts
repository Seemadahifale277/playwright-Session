import{test, expect} from '@playwright/test';

test.describe('Test Suite 1', ()=> {

    test('Test Case 1', async ({page})=>  {  
        console.log("Test Case 1 executed")
});



    test('Test Case 2', async ({page})=>{
        console.log("Test Case 2 executed")
});

});



