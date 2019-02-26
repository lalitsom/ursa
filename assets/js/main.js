var imgURL = "assets/images/";
var currentComic = 0

function init() {
  // currentComic = TOTAL_COMICS;
  currentComic = 1;
  fetchCurrentComic();
}
init();


function fetchCurrentComic(comicNum = 1) {

  currentComic = comicNum
  if(currentComic>TOTAL_COMICS){
    return;
  }
  extractDataFromJson(JSON_DATA[currentComic]); // Max limit on Try again Request
}


function extractDataFromJson(data) {
  console.log(data)
  newComic = {}
  newComic.img = imgURL+data.img
  newComic.title = data.title
  newComic.num = data.num
  showComic(newComic)
}

function showComic(comic) {
  console.log(comic.img);
  document.getElementById('comic_img').src = comic.img;
}



function show_first(){
    fetchCurrentComic(1);
}

function show_last(){
    fetchCurrentComic(TOTAL_COMICS);
}

function show_next(){
  fetchCurrentComic(currentComic+1)
}


function show_prev(){
  fetchCurrentComic(currentComic-1)
}


function show_random(){

  fetchCurrentComic(
    Math.floor(Math.random() * Math.floor(TOTAL_COMICS-1))+1
  );
}
