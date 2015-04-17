matchingURLs = [];
chrome.storage.sync.get({
    urlPattern: 'https://www.linkedin.com/profile',
  }, function(items) {
  	var pattern = items.urlPattern;
  	console.log("Opening URLs matching pattern: " + pattern);
  	var allURLs = document.getElementsByTagName("a");
    var matchingURLs = [];
  	for (var i = allURLs.length - 1; i >= 0; i--) {
  		//console.log(allURLs[i].href);
  		if (allURLs[i].href.match(pattern) != null) {
  			console.log("Match: " + allURLs[i].href);
        matchingURLs.push(allURLs[i].href)
  			//window.open(allURLs[i].href,'_blank');
        //window.open(matchingURLs.pop(),'_blank');
    setInterval(function(){ window.open(matchingURLs.pop(),'_blank'); }, 1500);
  		};
  	};
  });
