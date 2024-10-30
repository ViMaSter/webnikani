document.getElementById('apiTokenForm').addEventListener('submit', function(event) {
    debugger;
    event.preventDefault();
    const apiToken = document.getElementById('apiToken').value;
    chrome.storage.sync.set({ wanikaniApiToken: apiToken }, function() {
        alert('API Token saved!');
        window.close(); // Close the popup
    });
});