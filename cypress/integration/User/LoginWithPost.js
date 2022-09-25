/// <reference types="Cypress" />
describe("Test sample API request", () => {
  beforeEach(function () {
    cy.fixture("UserSpec").then(function (user) {
      this.user = user;
    });
  });

  it("Login with POST method", () => {
    cy.request({
      method: "POST",
      url: "api/login/users",
      body: { email: Cypress.env("email"), password: Cypress.env("password") },
    }).then((response) => {
      cy.log(JSON.stringify(response));
    });
  });
});
