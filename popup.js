(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
    // do something with response here, not outside the function
    console.log("response here " , response);
  })();

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
                console.group("GOT IT " , request)
      if (typeof request === "object")
      document.getElementById("rating").textContent = request.imdbRating;
        
        sendResponse({farewell: "goodbye"});
    }
  );
console.log("IMAGE " , image)
//document.getElementById('image').appendChild(image);
console.log(document)
//console.log(string);
console.log(ratingOutside)
document.getElementById("rating").textContent = ratingOutside;