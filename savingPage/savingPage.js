function setup() {
  noCanvas();
  frameRate(1);
}

function draw() {
  let saving = document.querySelector("#saveState");
  if (frameCount == 5) {
    saving.parentNode.removeChild(saving);
    createSpan("done.");
  } else if (frameCount > 5) {
    window.open(
      "/2021-04-benedettoandrea/siteNotAvailable/siteNotAvailable.html",
      "_self"
    );
  }
}
