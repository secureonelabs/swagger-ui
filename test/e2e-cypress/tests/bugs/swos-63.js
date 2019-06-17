describe("SWOS-63: Schema/Model labeling", () => {
  describe("SchemaS/Models section", () => {
    it("should render `schemas` for OpenAPI 3", () => {
      cy
        .visit("/?url=/documents/petstore-expanded.openapi.yaml")
        .get("section.models > h4 > span")
        .contains("Schemas")
    })
    it("should render `models` for OpenAPI 2", () => {
      cy
        .visit("/?url=/documents/petstore.swagger.yaml")
        .get("section.models > h4 > span")
        .contains("Models")
    })
  })
  describe("ModelExample within Operation", () => {
    it("should render `Schemas` for OpenAPI 3", () => {
      cy
        .visit("/?url=/documents/petstore-expanded.openapi.yaml")
        .get("#operations-default-findPets")
        .click()
        .get("a.tablinks[data-name=model]")
        .contains("Schema")
    })
    it("should render `Models` for OpenAPI 2", () => {
      cy
        .visit("/?url=/documents/petstore.swagger.yaml")
        .get("section.models > h4")
        .get("#operations-pet-addPet")
        .click()
        .get("a.tablinks[data-name=model]")
        .contains("Model")
    })
  })
})