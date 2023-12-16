describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Login");
  });
  it("has login button disabled", () => {
    cy.get('[data-cy="email-field"]').invoke("val", "");
    cy.get('[data-cy="password-field"]').invoke("val", "");
    cy.get('[data-cy="sign-in"]').should("be.disabled");
  });
  it("has validation attr", () => {
    cy.get('[data-cy="email-field"]').should("not.be.empty");
    cy.get('[data-cy="password-field"]').should("not.be.empty");
  });
  it("should fail the login with wrong email", async () => {
    cy.get('[data-cy="email-field"]').type("Email");
    cy.get("form").submit();
    await cy
      .get('[data-cy="error-message"]')
      .should("contain", "No user with that email");
  });
  it("should fail the login with wrong email or password", async () => {
    cy.get('[data-cy="email-field"]').type("admin@gmail.com");
    cy.get('[data-cy="password-field"]').type("password");
    cy.get("form").submit();
    await cy
      .get('[data-cy="error-message"]')
      .should("contain", "Username or password incorrect!");
  });
  it("should login successfully", async () => {
    cy.get('[data-cy="email-field"]').type("admin@gmail.com");
    cy.get('[data-cy="password-field"]').type("admin");
    cy.get("form").submit();
  });
});
