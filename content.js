chrome.storage.sync.get({
    urlPattern: 'https://www.linkedin.com/profile',
    delay: '10000',
  }, function(items) {
  	var pattern = items.urlPattern;
    var delay = items.delay;
  	console.log("Opening URLs matching pattern: " + pattern);
  	var allURLs = document.getElementsByTagName("a");
    var matchingURLs = [];
  	for (var i = allURLs.length - 1; i >= 0; i--) {
  		if (allURLs[i].href.match(pattern) != null) {
  			console.log("Match: " + allURLs[i].href);
        matchingURLs.push(allURLs[i].href)
  			//window.open(allURLs[i].href,'_blank');
        //window.open(matchingURLs.pop(),'_blank');
      };
    };
    console.log("#of Matching links: " + matchingURLs.length);
    console.log("Interval between openings (ms): " + parseInt(delay));
    setInterval(function(){if (matchingURLs.length>0) {window.open(matchingURLs.pop(),'_blank');};}, parseInt(delay));
  });
