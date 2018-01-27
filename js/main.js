// set up the base pattern

var el = null

v = 0.40

function anim() {
  var pattern = Trianglify({
    variance: v,
    height: window.innerHeight,
    width: window.innerWidth,
    x_colors: 'PuOr',
    cell_size: 30})
  
  //var el_tmp = document.body.appendChild(pattern.canvas())
  var background = document.getElementById("background");
  if (el != null) {
    background.removeChild(el)
  }

  el = background.appendChild(pattern.canvas())
  setTimeout(anim, 1000);
}

anim()
