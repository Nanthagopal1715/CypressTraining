import CreateAccountPage from "../../PomConcept/CreateAccountPage"
require('cypress-xpath');

describe('PageObjectmodel',()=>{

    it('POM concept -Day Nov26',()=>{

        const ln= new CreateAccountPage
        ln.visit()
        ln.fullname('nantha')
        ln.rediffemail('Gopal')
        ln.password('Nantha1234')
        ln.RetypePassword('nantha1234')
        ln.AlternateEmail('nantha@gmail.com')
        ln.MobileNumber('9524877452')
        ln.Day('26')
        ln.Month('02')
        ln.Year('1998')
        ln.Gender() 
        ln.city('coimbatore')
        ln.verifyBuzz() 
      
      })
})