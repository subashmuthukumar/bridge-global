/// <reference types="Cypress" />
describe("Test sample API request", () => {
  var data = require("../../fixtures/api/values/UserList.json");
  var postRequestBody = require("../../fixtures/api/values/UserRequestBody.json");

  beforeEach(function () {
    cy.fixture("UserSpec").then(function (user) {
      this.user = user;
    });
  });
  it("List the user using GET method", function () {
    cy.request("api/users?page=2", "GET").then((response) => {
      //cy.log(JSON.stringify(response)
      //----Check the high level validation
      expect(response.status).to.eq(200);
      expect(response).to.not.equal(null);
      expect(response).to.not.to.be.empty;

      //-----TO check all the keys present in the API responsse
      //cy.log(JSON.stringify(response.body));

      expect(response.body).to.have.all.keys(
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
      );

      expect(JSON.stringify(response.body.data) === JSON.stringify(data)).to.eq(
        true
      );
      expect(this.user.page).equal(2);
      expect(this.user.per_page).eq(6);
      expect(this.user.total).eq(12);
      expect(this.user.total_pages).eq(2);
    });
  });
  it("Create a user with POST method", () => {
    cy.request("POST",JSON.stringify(postRequestBody),"api/users").then((response)=>{

      
    })
  });
});
