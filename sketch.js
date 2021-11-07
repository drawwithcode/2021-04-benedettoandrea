let testo;
let myFont;
let container2;
function preload() {
  // myFont = loadFont("assets/fonts/Sprat-CondensedThin.otf");
  //testo = loadJSON("privacyStatement.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent("container2");
  // textFont(myFont);
  // smooth();
  rectMode(CENTER);
  //noFill();
  strokeWeight(10);
  stroke(255);
  // textWrap(CHAR);
  // textSize(height / 50);
  //textAlign(CENTER, CENTER);
}
function draw() {
  clear();

  // testo = "A";
  //rotateX(frameCount / 40);
  //text(testo.privacyStatement, 0, 0, width, height);
  //push();
  noFill();
  rect(
    0,
    0,
    windowWidth * sin(frameCount / 500),
    windowHeight * sin(frameCount / 500)
  );
  //pop();
  container2 = select("#container2");
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// let wrapper;
// let container2;
// let testo = "AS";
// // let myFont;

// let sketch1 = function (p1) {
//   p1.setup = function () {
//     p1.createCanvas(p1.windowWidth, p1.windowHeight).parent("container1");
//     p1.noFill();
//     p1.strokeWeight(1);
//     p1.stroke(255);
//   };
//   p1.draw = function () {
//     wrapper = p1.select("#wrapper");
//     p1.clear();
//     p1.line(0, 0, p1.width, p1.height);
//     p1.line(p1.width, 0, 0, p1.height);
//   };
//   p1.windowResized = function () {
//     p1.resizeCanvas(p1.windowWidth, p1.windowHeight);
//   };
// };

// let sketch2 = function (p2) {
//   let myFont;
//   p2.preload = function () {
//     myFont = p2.loadFont("assets/fonts/DMSerifDisplay-Regular.ttf");
//   };
//   p2.setup = function () {
//     p2.createCanvas(p2.windowWidth, p2.windowHeight, p2.WEBGL).parent(
//       "container2"
//     );
//     p2.textFont(myFont);
//     p2.smooth();
//     p2.rectMode(p2.CENTER);
//     //p2.noFill();
//     p2.strokeWeight(1.5);
//     p2.stroke(255);
//     p2.textWrap(p2.CHAR);
//     p2.textSize(p2.width / 3);
//     p2.textAlign(p2.CENTER, p2.CENTER);
//   };
//   p2.draw = function () {
//     p2.clear();
//     //testo = "A";
//     p2.text(testo, 0, 0);
//     // p2.rect(
//     //   0,
//     //   0,
//     //   p2.windowWidth * p2.sin(p2.frameCount / 500),
//     //   p2.windowHeight * p2.sin(p2.frameCount / 500)
//     // );
//     container2 = p2.select("#container2");
//   };
//   p2.windowResized = function () {
//     p2.resizeCanvas(p2.windowWidth, p2.windowHeight);
//   };
// };

// let p1 = new p5(sketch1);
// let p2 = new p5(sketch2);

function hideWrapper() {
  wrapper.addClass("hide");
}

function learnMore() {
  container2.removeClass("hide");
  // container2.addClass("show");
}
