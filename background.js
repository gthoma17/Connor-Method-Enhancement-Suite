chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
    	if (request.action.match("openURL-") != null) {
        	thisUrl = request.action.split("-")[1];
        	chrome.tabs.create(
        		{url : thisUrl}, 
        		function(tab) { 
      				chrome.tabs.executeScript(tab.id, {file: 'injectInPopup.js'});
    			}
    		);
    	}
	}
);