describe('Hello world project', () => {

  // ✅ Тест, який завжди проходить
  it('always pass test', () => {
    cy.on('uncaught:exception', () => false)
    cy.on('fail', () => false)

    cy.visit("https://medium.com/@someone/some-article", {
      timeout: 0,
      failOnStatusCode: false,
    })

    expect(1).to.equal(1) // цей тест завжди зелений
  })

  // ❌ Тест, який спеціально падає
  it('intentional fail test', () => {
    cy.visit("https://medium.com/@someone/some-article", {
      timeout: 0,
      failOnStatusCode: false,
    })

    // Робимо гарантований фейл
    expect(1).to.equal(2) 
  })

})