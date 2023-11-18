function saveOptions(e) {
  e.preventDefault();
  chrome.storage.sync.set({
    apikey: document.getElementById("apikey").value
  }, function(d) {});
}

function restoreOptions() {
  chrome.storage.sync.get("apikey", function(data) {
  	document.getElementById("apikey").value = data["apikey"];
  });
 
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("optionsForm").addEventListener("submit", saveOptions);
