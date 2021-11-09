function setup() {
  noCanvas();
  frameRate(1);
}

function draw() {
  if (frameCount == 4) {
    let saved = createSpan("done.");
    saved.parent("saveState");
  } else if (frameCount > 4) {
    window.open(
      "/2021-04-benedettoandrea/siteNotAvailable/siteNotAvailable.html",
      "_self"
    );
  }
}
