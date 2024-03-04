// describe('api testing', () => {
    
//     it('signup and login', () => {
//         const requestBody = {
//             name: Math.random().toString(36).substring(2),
//             email: Math.random().toString(36).substring(2) + "@gmail.com",
//             password: Math.random().toString(36),
//             phone: Math.random().toString(36)
//         };

//         cy.request({
//             method: 'POST',
//             url: 'http://localhost:8080/api/register', // Make sure to include http:// or https://
//             body: requestBody
//         }).then((response) => {
//             expect(response.status).to.equal(201);
//             expect(response.body.name).to.equal(requestBody.name);
//             expect(response.body.email).to.equal(requestBody.email);
//             expect(response.body.password).to.equal(requestBody.password);
//             expect(response.body.phone).to.equal(requestBody.phone);
//         });
//     });
// });
