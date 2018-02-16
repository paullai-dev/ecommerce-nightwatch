//  testFactory.js
//  Created by Paul Lai on 12/11/2016.
//  Copyright (c)

'use strict';

module.exports = function (browser) {

  this.goToFeatures = function() {
    browser
	  .useCss()
      // .click('//div[2]/div/ul/li/a/span') // Xpath example
	  // .click("//span[text()='Features']") // Xpath example
	  .click('ul#menu-menu-1 li:nth-child(1)')
      .waitForElementVisible('h1', 3000)
    return browser;
  };

  this.goToRates = function() {
    browser
	  .click('ul#menu-menu-1 li:nth-child(2)')	  
      // .click('//div[2]/div/ul/li[2]/a/span') // Xpath example
      .waitForElementVisible('h1', 3000)
    return browser;
  };

  this.goToSupport = function() {
    browser
	  .click('ul#menu-menu-1 li:nth-child(8)')	  
      // .click('//li[8]/a/span') // Xpath example
      .waitForElementVisible('h1', 3000)
    return browser;
  };

  this.goToCareers = function() {
    browser
	  .click('ul#menu-menu-1 li:nth-child(7)')	  
      // .click('//li[7]/a/span') // Xpath example
      .waitForElementVisible('h1', 3000)
    return browser;
  };

  this.goBack = function() {
    browser
	  .back()
      .waitForElementVisible('h1', 3000)
    return browser;
  };
  
  this.goToSignup = function() {
    browser
      // .click('//div[2]/a') // Xpath example
	  .click('a.btn.btn-warning.header-button.hidden-sm')
      .waitForElementVisible('h1', 3000)
    return browser;
  };
    
};