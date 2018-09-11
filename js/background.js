chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    // 只有打开百度才显示pageAction
                    new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'jwxt.gduf.edu.cn/jsxsd/framework/xsMain.jsp'}})
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});