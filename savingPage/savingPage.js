function setup() {
  noCanvas();
  // timing
  frameRate(1);
}

function draw() {
  // get #saveState
  let saving = document.querySelector("#saveState");
  if (frameCount == 4) {
    // remove #saveState from the DOM
    saving.parentNode.removeChild(saving);
    createSpan("done.");
  } else if (frameCount > 4) {
    window.open(
      "/2021-04-benedettoandrea/siteNotAvailable/siteNotAvailable.html",
      "_self"
    );
  }
}
