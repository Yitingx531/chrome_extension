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
      if (typeof request === "object"){
      const ratingsArray = request.Ratings;
      
      document.getElementById("imdbRating").textContent = request.imdbRating;
      const poster = document.getElementById("image");
      console.log(poster);
      document.getElementById('plot').textContent = request.Plot;
      
      //const image = document.createElement("img");
      image.src = request.Poster;
      console.log(image);
      //td.appendChild(image);
        sendResponse({farewell: "goodbye"});
        // document.getElementById('mainTable').style.borderRadius = '15rem';
        // document.getElementById('mainTable').style.border = '2px solid blue';
        document.getElementById('mainTable').style.width = 'fill';
        document.getElementById('mainTable').style.height = 'fill';
        document.getElementById('mainTable').style.backgroundColor = 'black';
        document.getElementById('mainTable').style.border = '3px solid gold';
        document.getElementById('mainTable').style.boxShadow = `0px -25px 20px -15px rgba(10,25,242,0.82),
        25px 0px 20px -15px rgba(10,25,242,0.82),
        0px 25px 20px -15px rgba(10,25,242,0.82),
        -25px 0px 20px -15px rgba(10,25,242,0.82)`
        document.getElementById('mainTable').style.borderRadius = '1rem';
        // document.getElementById('top').style.font = "italic bold 20px arial,serif";
        document.getElementById("top").setAttribute("align", "center");
        // document.getElementById('top').style.color = '#5c00e6';
        document.getElementById('top').style.fontWeight = '1000';
        document.getElementById('plot').style.padding = '1.3rem';
        document.getElementById("imdbRating").style.padding = '1rem'

        // for (let i = 0; i < ratingsArray.length; i++){
        //   console.log("RATINGS ARRAY ELEMENTS " , ratingsArray[i]);
        //   if (i == 0){
        //     document.getElementById("imdbRating").textContent = ratingsArray[i].Value;
        //   }
        //   // else if (i == 1){
        //   //   document.getElementById("rottenRating").textContent = ratingsArray[i].Value;
        //   // }
        //   // else if (i == 2){
        //   //   document.getElementById("metacriticRating").textContent = ratingsArray[i].Value;
        //   // }
  
        // }
      }
    }
  );

console.log("IMAGE " , image)
//document.getElementById('image').appendChild(image);
console.log(document)
//console.log(string);
console.log(ratingOutside)
document.getElementById("rating").textContent = ratingOutside;

// table {
//   border-radius: 25rem;
//   border: 1px, solid blue;
// }

// #top {
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 2rem;
// }