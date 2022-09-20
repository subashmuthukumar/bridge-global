/// <reference types="Cypress" />
describe("Test sample API request", () => {
  it("List the user using GET method", () => {
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
      expect
    });
  });
});
