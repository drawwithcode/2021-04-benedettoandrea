function setup() {
  noCanvas();
  frameRate(1);
}

function draw() {
  let saving = document.querySelector("#saveState");
  if (frameCount == 4) {
    saving.parentNode.removeChild(saving);
    createSpan("done.");
  } else if (frameCount > 4) {
    window.open(
      "/2021-04-benedettoandrea/siteNotAvailable/siteNotAvailable.html",
      "_self"
    );
  }
}
