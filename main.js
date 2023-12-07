
console.log("blah TEST");
console.log(document);
const titleField = document.querySelector("title");
console.log(titleField);


// setTimeout(function printTitle() {
//     console.log(document.querySelector("title"))
// }, 2000);







document.addEventListener("click", (event) => {
    
    console.log("CHANGING " , document.querySelector("title"));
    console.log(event);


    setTimeout(() => {
        console.log("Delayed for 3 seconds.");
      
        let urlBefore = "https://www.omdbapi.com/?t="
        let title = document.querySelector("title").innerText;
        console.log("title NAME " + title);
        title = title.replace(' - Netflix','');
        console.log("title NAME CHANGED " + title);
        let urlAfter = "&apikey=448456a7"
        let fullUrl = urlBefore+title+urlAfter;
        console.log(fullUrl);
        //let url = 'https://www.omdbapi.com/?t=no+country+for+old+men&apikey=448456a7';
        if (title.trim() !== "Home"){
            callApi(fullUrl);
        }

    }, 3000);
    // function callApi(){
    //     fetch(fullUrl, { method: 'GET' })
    //         .then(Result => Result.json())
    //         .then(string => {
        
    //             console.log(string);
        
    //             console.log(`Title of our response : ` + string.Title);

                
    //         })
    //         .catch(errorMsg => { console.log(errorMsg); });
    //         //result.textContent = `You like ${event.target.value}`;
    // }
  });
  var ratingOutside  = "nothing";

  function callApi(fullUrl){
    fetch(fullUrl, { method: 'GET' })
        .then(Result => Result.json())
        .then(string => {
    
            console.log(string);
    
            console.log(`Title of our response : ` + string.Title);
            
            const td = document.getElementById("image");
            console.log(td);
            const image = document.createElement("img");
            image.src = string.Poster;
            console.log(image);
            document.appendChild(image);
            var yo = "YO HERE";
            var ratingHere = string.imdbRating;
            ratingOutside = string.imdbRating;
        })
        .catch(errorMsg => { console.log(errorMsg); });
        //result.textContent = `You like ${event.target.value}`;
}


  