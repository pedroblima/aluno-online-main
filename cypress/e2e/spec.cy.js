describe('teste aluno-online', () => {
  it('novo requerimento', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps')
    cy.get('#inputProva').select('A2')
    cy.get('#inputArgumentacao').type('eu mereço tirar 10')
    cy.get('.btn-danger')
  })
})