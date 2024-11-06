describe("Primera prueba en angular", () => {
  it("Prueba", () => {
    cy.visit("http://localhost:4200");
    cy.reload();
    cy.get("h1").eq(0).should("be.visible").and("have.text", "Main");

    cy.get(".divider").should("have.attr", "role", "separator");
    expect(true).to.equal(true);
  });
});
