var MPM = (function() {
  'use strict';

  function getHostName(url) {
    var tag = document.createElement('a');
    tag.href = url;
    return tag.hostname;
  }

  function getDomainFromHost(host) {
    return publicSuffixList.getDomain(host);
  }

  function createSalt(params) {
    var salt = params.websiteName + params.username;
    return salt;
  }

  function getWebsitePassword(params, callbackFunction) {
	
    // Inputs from form fields.
    var masterPassword = params.masterPassword;
    var salt = createSalt(params); // Concatenate website name, username, etc.
    var callback = callbackFunction;

    // Default values from https://dchest.github.io/scrypt-async-js/demo.html
    var logN = 11;
    var interruptStep = 200;
    var r = 8;

    // Other default values.
    var dkLen = 16; // Length of website password.
    var encoding = 'base64';

    // Finally, hash algorithm with callback function.
    scrypt(masterPassword, salt, logN, r, dkLen, interruptStep, callback, encoding);
  }

  return {
    getHostName: getHostName,
    getDomainFromHost: getDomainFromHost,
    getWebsitePassword: getWebsitePassword
  };

}());