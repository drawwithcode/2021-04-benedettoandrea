let privacyStatementP5;
let agreeAndSave;
let agreeAndSaveEmoji;
let learnMore;
let learnMoreEmoji;

let privacyStatementJS;
let privacyStatementBoundingClientRect;
let privacyStatementBoundingClientRectBottom;
let difference;
let posY;

function setup() {
  // create the canvas inside #container"
  createCanvas(windowWidth, windowHeight).parent("container");

  // styling
  noFill();
  rectMode(CENTER);
  strokeWeight(1);
  stroke(255);

  getDivAndCanvas();
}

function draw() {
  clear();
  line(0, 0, width, height);
  line(width, 0, 0, height);

  /* - draws a rectangle inside the canvas
     - sadly its top border isn't viewable on some browsers (Chrome on Android)
     - temporarily substituted by a div (.boundingBox), which has a similar problem
  */
  // push();
  // strokeWeight(2);
  // rect(width / 2, height / 2, windowWidth, windowHeight);
  // pop();

  privacyStatementP5 = select(".privacyStatement");
  agreeAndSave = select("#agreeAndSave");
  agreeAndSaveEmoji = select("#agreeAndSaveEmoji");
  learnMore = select("#learnMore");
  learnMoreEmoji = select("#learnMoreEmoji");

  // div animation
  if (width > height) {
    // horizontal viewport
    posY = difference * Math.pow(sin((frameCount / width) * 4), 2);
  } else {
    // vertical viewport
    posY = difference * Math.pow(sin(frameCount / height / 2), 2);
  }
  privacyStatementP5.position(0, -posY);

  // desktop callback functions
  agreeAndSave.mouseOver(agreeAndSaveEmojiShow);
  agreeAndSave.mouseOut(agreeAndSaveEmojiHide);
  learnMore.mouseOver(learnMoreEmojiShow);
  learnMore.mouseOut(learnMoreEmojiHide);

  // smartphone callback functions
  agreeAndSave.touchStarted(agreeAndSaveEmojiShow);
  agreeAndSave.touchMoved(agreeAndSaveEmojiShow);
  agreeAndSave.touchEnded(agreeAndSaveEmojiHide);
  learnMore.touchStarted(learnMoreEmojiShow);
  learnMore.touchMoved(learnMoreEmojiShow);
  learnMore.touchEnded(learnMoreEmojiHide);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // reset the position of #privacyStatement
  privacyStatementP5.position(0, 0);

  getDivAndCanvas();
}

function learnMoreToggle() {
  if (privacyStatementP5.class() == "privacyStatement hide") {
    privacyStatementP5.class("privacyStatement show");
  } else if (privacyStatementP5.class() == "privacyStatement show") {
    privacyStatementP5.class("privacyStatement hide");
  }
}

function agreeAndSaveEmojiShow() {
  agreeAndSaveEmoji.class("emoji show");
}

function agreeAndSaveEmojiHide() {
  agreeAndSaveEmoji.class("emoji hide");
}

function learnMoreEmojiShow() {
  learnMoreEmoji.class("emoji show");
}

function learnMoreEmojiHide() {
  learnMoreEmoji.class("emoji hide");
}

// this function calculates the dimensions of #privacyStatement", which can then be used to move it with its contents
// it restates the variables so that the div moves correctly even when the viewport changes dimensions.
// for further info, see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
function getDivAndCanvas() {
  privacyStatementJS = document.getElementById("privacyStatement");
  privacyStatementBoundingClientRect =
    privacyStatementJS.getBoundingClientRect();
  privacyStatementBoundingClientRectBottom =
    privacyStatementBoundingClientRect.bottom;
  difference = privacyStatementBoundingClientRectBottom - height;
}

function savingPage() {
  window.open("/2021-04-benedettoandrea/savingPage/savingPage.html", "_self");
}
