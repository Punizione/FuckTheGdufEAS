function sendMessageToContentScript(message, callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, message, function(response){
			if(callback){
				callback(response)
			}
		})
	})
}

document.getElementById('send').onclick = function() {
	var sid = document.getElementById('sid').value
	if (/\d{7}/.test(sid)||/\d+-\d+/.test(sid)) {
		sendMessageToContentScript({
			"sid": sid
		}, function(response){
			
		})
	}
}

