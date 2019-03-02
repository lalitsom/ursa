var comicImgURL = "assets/images/comics/";
var scribblesImgURL = "assets/images/scribbles";
var currentComic = 0
var loadingImg = 'assets/images/load1.jpg'

function showLoadingScreen(){
  document.getElementById('img_elem').src = loadingImg;
}


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
  extractDataFromJson(COMIC_JSON[currentComic]); // Max limit on Try again Request
}


function extractDataFromJson(data) {
  newComic = {}
  newComic.img = comicImgURL+data.img
  newComic.title = data.title
  newComic.num = data.num
  newComic.transcript = data.transcript
  showComic(newComic)
}

function showComic(comic) {
  document.getElementById('img_elem').src = comic.img;
  document.getElementById('img_title').innerHTML = comic.num + ": " + comic.title;
  document.getElementById('img_transcript').innerHTML = "[ "+comic.transcript+" ]";

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
