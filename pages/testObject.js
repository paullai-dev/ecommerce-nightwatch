//  testObject.js
//  Created by Paul Lai on 12/11/2016.
//  Copyright (c)

'use strict';

module.exports = function (browser) {
  this.goToHomepage = function() {
    browser
      .windowMaximize() // Works woth Firefox, buggy on Chrome
      .url("https://company.ticketscript.com/uk/")
      .waitForElementVisible('body', 1000)
    return browser;
  };

  this.validateWebsiteTitle = function() {
    browser
	  .assert.title('Sell more tickets with ticketscript - Sell Tickets Online')
    return browser;
  };

  this.validateheaderLogo = function() {
    browser
      // .waitForElementVisible("//img[@alt='Ticketscript']", 2000) // Xpath example
	  .waitForElementVisible("img[alt='Ticketscript']", 2000)
    return browser;
  };

  this.validateheaderFeatures = function() {
    browser
      .assert.containsText('h1', 'Features')
    return browser;
  };

  this.validateheaderRates = function() {
    browser
      .assert.containsText('h1', 'Rates')
    return browser;
  };

  this.validateheaderSupport = function() {
    browser
      .assert.containsText('h1', 'Support')
    return browser;
  };

  this.validateheaderCareers = function() {
    browser
      .assert.containsText('h4', 'MEET THE TRIBE')	  
    return browser;
  };
  
  this.validateheadergetStarted = function() {
    browser
      .assert.containsText('h1', 'Start selling tickets today')
    return browser;
  };
    
};