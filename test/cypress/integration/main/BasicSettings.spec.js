/// <reference path="cypress" />
/// <reference path="../../support/index.d.ts" />

describe('LanguageSelection', () => {
  beforeEach(() => {
  })
  it('.should() - 判断基础设置-语言切换简体中文是否有效', () => {
    cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
    cy.toBasic()
    cy.get('[data-cy="select-direct"]:nth()').click()
    cy.contains('简体中文').click()
    cy.get('.toolbar-title').contains('基础设置').click()
  })
  it('.should() - 判断基础设置-语言切换繁体中文是否有效', () => {
    cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
    cy.toBasic()
    cy.get('[data-cy="select-direct"]:nth()').click()
    cy.contains('繁體中文').click()
    cy.get('.toolbar-title').contains('基礎設置').click()
  })
  it('.should() - 判断基础设置-语言切换English是否有效', () => {
    cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
    cy.toBasic()
    cy.get('[data-cy="select-direct"]:nth()').click()
    cy.contains('English').click()
    cy.get('.toolbar-title').contains('Basic').click()
  })
})
