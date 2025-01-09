import { test, expect } from '@playwright/test';



test('api request test',async({request})=>{

   const response= await request.get('https://reqres.in/api/users/2')
   expect(response.status()).toBe(200)


   const text = await response.text()
   expect(text).toContain('janet')

   console.log(response)
})

test('Post request test',async({request})=>{

    const response= await request.post('https://reqres.in/api/users',{
        
        data:
        {
            "name": "raghav",
            "job": "leader"
        }
        
    })
    expect(response.status()).toBe(201)
 
 
    const text = await response.text()
    expect(text).toContain('raghav')
 
    console.log(response)
 })

 test('API PUT request test',async({request})=>{

    const response= await request.put('https://reqres.in/api/users/2',{
        
        data:
        {
            "name": "RASHI",
            "job": "leader"
        }
        
    })
    expect(response.status()).toBe(200)
 
 
    const text = await response.text()
    expect(text).toContain('RASHI')
 
    console.log(response)
 })


 test.only('API DELETE request test',async({request})=>{

    const response= await request.put('https://reqres.in/api/users/2')
 
    expect(response.status()).toBe(200)
 
 
    // const text = await response.text()
    // expect(text).toContain('RASHI')
 
    console.log(response)
 })