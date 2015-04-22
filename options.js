// Saves options to chrome.storage
function save_options() {
  var url_pattern = document.getElementById('url_pattern').value;
  var ignore_pattern = document.getElementById('ignore_pattern').value;
  var delay_time = document.getElementById('delay_length').value;
  var class_pattern = document.getElementById('class_pattern').value;
  chrome.storage.sync.set({
    urlPattern: url_pattern,
    ignorePattern: ignore_pattern,
    delay: delay_time,
	  classPattern: class_pattern,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}



function restore_options() {
  // Use default value url_pattern = 'https://www\.linkedin\.com/profile/view\?id=.*.
  chrome.storage.sync.get({
    urlPattern: '.*linkedin.com/profile/view.*',
    ignorePattern: '(?=a)b', //this regex will never match
    delay: '10000',
	  classPattern: ".*", //this regex will always match
  }, function(items) {
    document.getElementById('url_pattern').value = items.urlPattern;
    document.getElementById('ignore_pattern').value = items.ignorePattern;
    document.getElementById('delay_length').value = items.delay;
	document.getElementById('class_pattern').value = items.classPattern;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);