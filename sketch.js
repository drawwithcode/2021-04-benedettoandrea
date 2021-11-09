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

function setup() {
  createCanvas(windowWidth, windowHeight).parent("container");
  rectMode(CENTER);
  strokeWeight(1);
  stroke(255);

  getDivAndCanvas();

  privacyStatementBoundingClientRectBottom =
    privacyStatementBoundingClientRect.bottom;
  difference = privacyStatementBoundingClientRectBottom - height;

  // console.log("draw " + privacyStatementBoundingClientRect.bottom);
  // console.log("draw " + height);
  // console.log("draw " + difference);
}

function draw() {
  clear();
  line(0, 0, width, height);
  line(width, 0, 0, height);

  agreeAndSave = select("#agreeAndSave");
  agreeAndSaveEmoji = select("#agreeAndSaveEmoji");
  learnMore = select("#learnMore");
  learnMoreEmoji = select("#learnMoreEmoji");
  privacyStatementP5 = select(".privacyStatement");

  if (width > height) {
    //horizontal viewport
    posY = difference * Math.pow(sin(frameCount / width / 2), 2);
  } else {
    // vertical viewport
    posY = difference * Math.pow(sin(frameCount / height / 2), 2);
  }

  // console.log(difference);
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

  // console.log(privacyStatementBoundingClientRect.bottom);
  // console.log(height);
  // console.log(difference);
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
