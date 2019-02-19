var imgURL = "assets/images/";
var timeline = document.getElementById('timeline_id');
var currentComic = 0
var activeCalls = 0;

function init() {
  startScrollListener();
  fetchNextComic();
}
init();

function startScrollListener() {
  //detects when user reaches the end
  window.addEventListener("scroll", function() {
    var contentHeight = timeline.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    if (y >= contentHeight) {
      //load new content
      fetchNextComic();
    }
  })
}

function fetchNextComic(comicNumber = -1) {

  if (comicNumber == -1) {
    comicNumber = currentComic + 1 // if no comic is specified fetch the next one
  }

  if(comicNumber>TOTAL_COMICS){
    return;
  }
  currentComic = comicNumber
  extractDataFromJson(JSON_DATA[comicNumber]); // Max limit on Try again Request
}


function extractDataFromJson(data) {
  console.log(data)
  newComic = {}
  newComic.img = imgURL+data.img
  newComic.title = data.title
  newComic.num = data.num
  addToTimeliene(newComic)
}

function addToTimeliene(comic) {
  createNode(comic).appendTo(".timeline");
}

function createNode(comic) {
  newComicNode = $(document.getElementById('first_comic').cloneNode(true))
  newComicNode.find(".comicURL")[0].innerHTML = "#" + comic.num + ". " + comic.title;
  newComicNode.find(".comic_image")[0].src = comic.img
  newComicNode.find(".comic_image")[0].alt = comic.title
  return newComicNode;
}

function setcomic() {
  comicSetElem = document.getElementById('comicSet');
  _comicnumber = parseInt(comicSetElem.value);
  if (isNaN(_comicnumber) || _comicnumber < 1 || _comicnumber > 9999) {
    comicSetElem.value = currentComic;
  } else {
    currentComic = _comicnumber;
  }
}
