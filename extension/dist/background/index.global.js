(()=>{chrome.runtime.onInstalled.addListener(async()=>{let e=chrome.runtime.getURL("./dist/popup/index.html");await chrome.tabs.create({url:e})});async function a(e){return new Promise((t,n)=>{try{chrome.storage.local.set(e,()=>{t()})}catch(r){n(r)}})}chrome.webRequest.onBeforeSendHeaders.addListener(e=>{var t=localStorage.getItem("twitter_filter");if(t||t==0,t==1&&new String(e.initiator).includes("twitter.com"))return console.log(e),{cancel:!0};if(e.url.includes("twitter.com"))return e.requestHeaders.forEach(r=>{r.name==="Origin"&&(r.value="https://twitter.com")}),{requestHeaders:e.requestHeaders}},{urls:["<all_urls>"]},["blocking","requestHeaders","extraHeaders"]);chrome.webRequest.onSendHeaders.addListener(async e=>{let t=new String(e.url);var n=localStorage.getItem("twitter_filter");if(n||n==0,n==1&&new String(e.initiator).includes("twitter.com"))return console.log(e),{cancel:!0};if(t.includes("i/api/2/notifications/all.json")){let r=o(e.requestHeaders,"x-csrf-token"),i=o(e.requestHeaders,"authorization");await a({header:{"x-csrf-token":r,"x-twitter-active-user":"yes","x-twitter-auth-type":"OAuth2Session","x-twitter-client-language":"en",authorization:i}})}},{urls:["<all_urls>"]},["requestHeaders"]);var o=function(e,t){let n=t.toLowerCase();for(let r=0;r<e.length;r++)if(e[r].name.toLowerCase()===n)return e[r].value;return null};chrome.webRequest.onBeforeRequest.addListener(e=>{var t=localStorage.getItem("twitter_filter");if(t||t==0,t==1&&new String(e.initiator).includes("twitter.com"))return console.log(e),{cancel:!0}},{urls:["<all_urls>"]},["blocking","requestBody","extraHeaders"]);})();
