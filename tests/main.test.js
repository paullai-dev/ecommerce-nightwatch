//  main.test.js
//  Created by Paul Lai on 12/11/2016.
//  Copyright (c)

'use strict';
	 
module.exports = {
	'@disabled': false, // This will prevent the test module from running.
	'@tags': ['regression'], //This will classify the level of test (sanity,smoke,regression).
		
	'Nightwatch.js demo Ticketscript.com' : function (browser) {
		browser
			.page.testObject().goToHomepage() // Navigate to Ticketscript's website (UK)

			.page.testObject().validateWebsiteTitle() // Check if Ticketscript's title is present
		  
			.page.testObject().validateheaderLogo() // Check if Ticketscript company logo is present

			.page.testFactory().goToFeatures() // Navigate to Features page
			.page.testObject().validateheaderFeatures() // Make sure we're really in Features page
		  
			.page.testFactory().goToRates() // Navigate to Rates page
			.page.testObject().validateheaderRates() // Make sure we're really in Rates page

			.page.testFactory().goToSupport() // Navigate to Support page
			.page.testObject().validateheaderSupport() // Make sure we're really in Support page
		
			.page.testFactory().goToCareers() // Navigate to Careers page
			.page.testObject().validateheaderCareers() // Make sure we're really in Careers page
			.page.testFactory().goBack() // Leave Careers page, go back to Ticketscript's website

			.page.testFactory().goToSignup() // Navigate to Sign-up page
			.page.testObject().validateheadergetStarted() // Make sure we're really in sign-up page

			.end();
		}
	  
};