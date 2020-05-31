let SportsApi = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0f83bfae73324f299c0448ace93ff3a1`;
//let entertainmentApi =
  `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0f83bfae73324f299c0448ace93ff3a1`;

//let healthApi = `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

//let businessApi = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;
//let technologyApi = `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0f83bfae73324f299c0448ace93ff3a1`;



//let scienceApi = `http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

// ====sports section starts=====//
let defaultOpitions={
    url:"",
    method:"GET",
    mode:"cors",
    headers:{
        "Access-Control-Allow-Origin": "*",
    },
    body:null,
};
window.fetch(sportsApi)
.then((sportsData) => {
     sportsData.json()
     .then((sports) => {
         //console.log(sports.articles);
         let sportsInfo = sports.articles;
         let output = [];
         for(let sport of sportsInfo) {
             console.log(sport);
             output += `
                <div class>
                <img src="${sport.urlToImage}" alt="Sports Image">
                    <h1>${sport.title}</h1>
                    <a href="${sport.url}" target="_blank">Details</a>
                </div>
             `;
             document.getElementById("sportsSection").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));
// ====sports section ends=====//