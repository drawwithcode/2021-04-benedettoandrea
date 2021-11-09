function setup() {
  noCanvas();
  frameRate(1);
}

function draw() {
  if (frameCount == 4) {
    let saved = createSpan("saved. now redirecting");
    saved.parent("loading");
  } else if (frameCount > 4) {
    window.open("/siteNotAvailable/siteNotAvailable.html", "_self");
  }
}
