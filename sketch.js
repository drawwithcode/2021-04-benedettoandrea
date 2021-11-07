let wrapper;
let privacyStatement;
let button;

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
  fill("white");
  rect(
    width / 2,
    height / 2,
    windowWidth * sin(frameCount / 500),
    windowHeight * sin(frameCount / 500)
  );
  pop();
  line(0, 0, width, height);
  line(width, 0, 0, height);
  wrapper = select(".wrapper");
  privacyStatement = select(".privacyStatement");
  button = select("#learnMore");
  button.mouseOver(learnMoreToggleOn);
  button.mouseOut(learnMoreToggleOff);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function hideWrapper() {
  wrapper.addClass("hide");
}

let learnMoreSelector = false;
function learnMore() {
  if (
    privacyStatement.class() == "privacyStatement hide" &&
    learnMoreSelector == false
  ) {
    learnMoreSelector = true;
    console.log(learnMoreSelector);
    privacyStatement.removeClass("hide");
    privacyStatement.addClass("show");
  } else if (
    privacyStatement.class() == "privacyStatement show" &&
    learnMoreSelector == true
  ) {
    learnMoreSelector = false;
    console.log(learnMoreSelector);
    privacyStatement.removeClass("show");
    privacyStatement.addClass("hide");
  }
}

function learnMoreToggleOn() {
  if (learnMoreSelector === false) {
    //console.log(learnMoreSelector);
    privacyStatement.removeClass("hide");
    privacyStatement.addClass("show");
  }
}

function learnMoreToggleOff() {
  if (learnMoreSelector === false) {
    // console.log(learnMoreSelector);
    privacyStatement.removeClass("show");
    privacyStatement.addClass("hide");
  }
}
