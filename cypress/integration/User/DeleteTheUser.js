/// <reference types="Cypress" />
describe("Test sample API request", () => {

  beforeEach(function () {
    cy.fixture("UserSpec").then(function (user) {
      this.user = user;
    });
  });

  it("Delete the user", () => {
    cy.request({
      method: "DELETE",
      url: "api/users/2",
    }).then((response) => {
      expect(response.status).to.eq(204)
    });
  });
});
