// Saves options to chrome.storage
function save_options() {
  var url_pattern = document.getElementById('url_pattern').value;
  chrome.storage.sync.set({
    urlPattern: url_pattern,
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
  // Use default value url_pattern = '.*linkedin.com/profile.*'.
  chrome.storage.sync.get({
    urlPattern: '.*linkedin.com/profile.*',
  }, function(items) {
    document.getElementById('url_pattern').value = items.urlPattern;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);