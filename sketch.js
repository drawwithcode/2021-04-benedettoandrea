let agreeAndSave;
let learnMore;
let privacyStatementP5;
let agreeAndSaveEmoji;
let learnMoreEmoji;

let privacyStatementJS;
let privacyStatementBoundingClientRect;
let posY;
let privacyStatementBoundingClientRectBottom;
let difference;

let urlString = window.location.href;
let url = new URL(urlString);

function setup() {
  createCanvas(windowWidth, windowHeight).parent("container");
  noFill();
  rectMode(CENTER);
  strokeWeight(1);
  stroke(255);

  getDivAndCanvas();

  privacyStatementBoundingClientRectBottom =
    privacyStatementBoundingClientRect.bottom;
  difference = privacyStatementBoundingClientRectBottom - height;
}

function draw() {
  clear();
  line(0, 0, width, height);
  line(width, 0, 0, height);
  push();
  strokeWeight(2);
  rect(width / 2, height / 2, windowWidth, windowHeight);
  pop();

  agreeAndSave = select("#agreeAndSave");
  agreeAndSaveEmoji = select("#agreeAndSaveEmoji");
  learnMore = select("#learnMore");
  learnMoreEmoji = select("#learnMoreEmoji");
  privacyStatementP5 = select(".privacyStatement");

  if (width > height) {
    //horizontal viewport
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
