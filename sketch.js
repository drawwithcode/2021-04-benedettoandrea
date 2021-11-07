let agreeAndSave;
let learnMore;
let privacyStatement;
let agreeAndSaveEmoji;
let learnMoreEmoji;

function setup() {
  createCanvas(windowWidth, windowHeight).parent("container");
  rectMode(CENTER);
  strokeWeight(1);
  stroke(255);
}

function draw() {
  clear();
  push();
  noStroke();
  text("culo", 0, 0);
  fill("rgb(13, 71, 161)");
  rect(
    width / 2,
    height / 2,
    windowWidth * sin(frameCount / 500),
    windowHeight * sin(frameCount / 500),
    5
  );
  pop();
  // line(0, 0, width, height);
  // line(width, 0, 0, height);
  agreeAndSave = select("#agreeAndSave");
  agreeAndSaveEmoji = select("#agreeAndSaveEmoji");
  learnMore = select("#learnMore");
  learnMoreEmoji = select("#learnMoreEmoji");
  privacyStatement = select(".privacyStatement");
  agreeAndSave.mouseOver(() => {
    agreeAndSaveEmoji.class("emoji show");
  });
  agreeAndSave.mouseOut(() => {
    agreeAndSaveEmoji.class("emoji hide");
  });
  learnMore.mouseOver(() => {
    learnMoreEmoji.class("emoji show");
  });
  learnMore.mouseOut(() => {
    learnMoreEmoji.class("emoji hide");
  });

  agreeAndSave.touchStarted(() => {
    console.log("start");
  });
  agreeAndSave.touchMoved(() => {
    console.log("move");
  });
  agreeAndSave.touchEnded(() => {
    console.log("end");
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function learnMoreToggle() {
  if (privacyStatement.class() == "privacyStatement hide") {
    privacyStatement.class("privacyStatement show");
  } else if (privacyStatement.class() == "privacyStatement show") {
    privacyStatement.class("privacyStatement hide");
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
