const { test } = require('@playwright/test');



test.skip('skip test', async({page})=>{
 // skip the test
})

   

test('test not yet ready', async({page})=>{
    test.fail() 
    // mark test as failure  , it will show error if test does not fail
})


test.fixme('test to be fixed', async({page})=>{

    //test will be aborted
   })

   
test.slow('slow test', async({page})=>{
    test.slow()

    //slow the test and triple the test timeout
   })

   test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');
   

   
test('tags test @smoke', async({page})=>{
    // skip the test
   })