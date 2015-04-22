chrome.storage.sync.get({
    urlPattern: 'https://www.linkedin.com/profile',
    ignorePattern: '',
    delay: '10000',
	  classPattern: '.*',
  }, function(items) {
  	var pattern = items.urlPattern;
    var badPattern = items.ignorePattern;
	  var classPattern = items.classPattern;
    var delay = items.delay;
  	console.log("Opening URLs matching pattern: " + pattern);
    console.log("--Where the class matches" + classPattern)
    console.log("--Unless they match pattern: " + badPattern);
  	var allURLs = document.getElementsByTagName("a");
    var possibleURLs = [];
  	for (var i = allURLs.length - 1; i >= 0; i--) {
  		if (allURLs[i].href.match(pattern) != null &&
          allURLs[i].className.match(classPattern) != null &&
          allURLs[i].href.match(badPattern) == null) {
  			console.log("Match: " + allURLs[i].href);
				possibleURLs.push(allURLs[i].href);
			};
		};
    matchingURLs = pruneURLs(possibleURLs,badPattern); //this is where site specific url pruning should occur
    console.log("#of Matching links: " + matchingURLs.length);
    console.log("Interval between openings (ms): " + parseInt(delay));
    setInterval(function(){openURLs();}, parseInt(delay)); //Commented out
  });
function openURLs(){
  if (matchingURLs.length>0) {
    var thisUrl = matchingURLs.pop();
    console.log("Opening: " + thisUrl + " " + matchingURLs.length + " links remaining");
    window.open(thisUrl,'_blank');
  };
}
function pruneURLs(array){
  var profile_ids = [];
  for (var i = array.length - 1; i >= 0; i--) {
    profileStart = array[i].indexOf("view?id=")+8;
    profileEnd = array[i].indexOf("&",profileStart);
    profile = array[i].substring(profileStart,profileEnd);
    if (profile_ids.indexOf(profile) != -1) {
      array.splice(i,1);
      console.log("Removing: " + array[i] + " ...already in array");
    } else{
      profile_ids.push(profile)
    };
  };
  return array;
}