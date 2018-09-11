function opengl(sid) {
	document.getElementById("loginForm1").action = 'http://jwxt.gduf.edu.cn/Logon.do?method=logonFromJsxsd'
	var userid = sid;
	var userpsw = 'fuckoff';
	document.getElementById("ticket").value = userid+"#"+userpsw;
	document.getElementById("useraccount").value = userid;
	document.getElementById("loginForm1").submit();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if( request.sid ) {
		opengl(request.sid)
	}
})
